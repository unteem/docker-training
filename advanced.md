# advanced



## Namespace

 - NET
 - PID
 - USER
 - Mount
 - UTS



## Multiprocess

2 schools:


## 12factor app

one container - one process


## VM school

supervisord
init system


## Conclusion

 - supervision of processes
 - sshd? seriously?
 - postfix case, couldn't avoid multiprocess
 - forking daemon like HAproxy
 - pod



## User

You should specify the USER that execute the command and own the data.

If you don't it is fine, Namespace translations!



## Data


### Docker volume

You can create volumes managed by docker.

SDS


From Dockerfile

`VOLUME myvolume`


From runtime

`docker volume create --name=my_name`


Support for drivers \o/ (Ceph, glusterfs...)


### Data container

You could link a container that will just contain the data.

`--volumes-from`

(no longer recommended, but you might see it)


### Host Mount

`docker run -v /host/path:/guest/path debian cat /guest/path/file`



# Logs


## Stdout/Stderr

The recommended!


## Special Log file

```
RUN ln -sf /dev/stdout /var/log/nginx/access.log
RUN ln -sf /dev/stderr /var/log/nginx/error.log
```


## Log file

You could mount a host file where your process will log


## log driver

complicated


### 1st way

mount /dev/log from host/another container


### 2nd way

expose the UDP port to inside the container



## Monitoring

docker can 'monitor' processes for you

--always-restart flag

Note:
That's what some people don't like


### do not monitor the client

`docker run` is just an API call.



# Central logging and Monitoring

 - ELK
 - Prometheus
 - [Netdata](https://github.com/firehol/netdata)
 - https://github.com/uschtwill/docker_monitoring_logging_alerting



# local storage

how to manage locally images, containers and volumes!

docker images

docker ps

docker volumes

https://microblog.pierre-o.fr/2015/i-know-how-to-clean-docker

https://github.com/spotify/docker-gc



# docker exec

execute a process on the side of the main process.



# Networks

You can now create and manage networks from Docker.
SDN

```
docker network ls
               create/rm
               connect/disconnect             
```


## Features

 - automatic name resolution using DNS
 - automatic secured isolated environment for the containers in a network
 - ability to dynamically attach and detach to multiple networks


## Overlay

An overlay network can span multiple hosts running their own engines.

Needs a key-value store (Consul, Etcd, and ZooKeeper)

Supports encryption \o/


## Documentation

https://docs.docker.com/engine/userguide/networking/work-with-networks/



# Your turn!
