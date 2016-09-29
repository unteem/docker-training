# Discovery / Registration

Put an nginx proxy in front of Moby counter.

We'll use [nginx-proxy ](https://github.com/jwilder/nginx-proxy)for that.

Read [usage](https://github.com/jwilder/nginx-proxy/#usage), start it, and modify moby compose file accordingly.
TL;DR we need to use VIRTUAL_HOST env variable.

# etcd

## Install

curl -L  https://github.com/coreos/etcd/releases/download/v2.3.7/etcd-v2.3.7-linux-amd64.tar.gz -o etcd-v2.3.7-linux-amd64.tar.gz
tar xzvf etcd-v2.3.7-linux-amd64.tar.gz
cd etcd-v2.3.7-linux-amd64
mv ./etcd /usr/local/bin
mv ./etcdctl /usr/local/bin

## Get a discovery token

(once for the full cluster)

curl https://discovery.etcd.io/new?size=3

## Start the cluster

On 3 nodes, execute the following:

export IP=$private_ip
export token=""
etcd --discovery "https://discovery.etcd.io/$token" \
     --name $(hostname) \
     --advertise-client-urls "http://$IP:2379" \
     --initial-advertise-peer-urls "http://$IP:2380" \
     --listen-client-urls "http://$IP:2379" \
     --listen-peer-urls "http://$IP:2380"


## Tests

etcdctl set foo bar
etcdctl get foo

# Reconfigure Docker

To listen on Public port and use etcd cluster.


In /lib/systemd/system/docker.service

...
ExecStart=/usr/bin/dockerd -H fd:// --cluster-advertise 0.0.0.0:2376 --cluster-store etcd://0.0.0.0:2379 -H tcp://0.0.0.0:2376 -H unix:///var/run/docker.sock
...

systemctl daemon-reload
service docker restart



## Test

docker -H tcp://$node_ip:2376 ps
docker -H tcp://$node_ip:2376 run hello-world


# Ceph

## Configuration

etcdctl set /ceph-config/ceph/osd/osd_max_object_namespace_len "64"
etcdctl set /ceph-config/ceph/osd/osd_max_object_name_len "256"

mkdir -p /var/lib/ceph/osd/

## Start ceph

docker run -d --name mon --net=host \
           -v /etc/ceph:/etc/ceph \
           -v /var/lib/ceph:/var/lib/ceph \
           -e MON_IP=$IP:6789 \
           -e CEPH_PUBLIC_NETWORK=10.131.26.125/27 \
           -e MON_NAME=$(hostname) \
           -e KV_TYPE=etcd \
           -e KV_IP=$IP \
           -e KV_PORT=2379 \
           ceph/daemon mon


docker run -d --name osd --net=host \
           -e OSD_TYPE="directory"\
           -e HOSTNAME=$(hostname) \
           -e KV_TYPE=etcd \
           -e KV_IP=$IP \
           -e KV_PORT=2379 \
           -v /var/log/ceph:/var/log/ceph \
           -v /var/lib/ceph:/var/lib/ceph \
           ceph/daemon osd

## Test

docker exec -it mon ceph -s

# Volplugin

## Configure

etcdctl set /volplugin/policies/policy2  '{"name":"policy2","create":{"size":"1000MB","filesystem":""},"runtime":{"snapshots":true,"snapshot":{"frequency":"30m","keep":20},"rate-limit":{"write-iops":0,"read-iops":0,"write-bps":0,"read-bps":0}},"driver":{"pool":"rbd"},"filesystems":{"ext4":"mkfs.ext4 -m0 %"},"backends":{"crud":"ceph","mount":"ceph","snapshot":"ceph"}}'

## Start

docker run -it -v /var/run/docker.sock:/var/run/docker.sock contiv/volplugin-autorun

## Test

docker volume create -d volplugin --name policy1/sample
docker run -it -v policy1/sample:/mnt debian bash -c "echo 'victory' > /mnt/test"
docker run -it -v policy1/sample:/mnt debian cat /mnt/test

# Swarm

## Start

docker run -d -p 4000:4000 --name=swarm-manager swarm manage -H :4000 --replication --advertise $IP:4000 etcd://$IP:2379/nodes
docker run -d --name=swarm-agent swarm join --addr=$IP:2376 etcd://$IP:2379/nodes


## Test
docker -H tcp://$node_ip:4000 ps
export DOCKER_HOST=$node_ip:4000
docker ps
docker info
docker run hello-world
