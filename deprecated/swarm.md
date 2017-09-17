# Discovery / Registration


## Old way

Chef Server

TL;DR doesn't scale


## New Way

Service registers

Hey, I'm a new http server in town o/


Service discovers

I'm a load balancer, I watch every http server.


 - powerful and flexible
 - Monolithic vs Microservice
 - Clean little API
 - single responsability pattern


Demo with libre.sh / HAPorxy

http://libre.sh



# ETCD

 - Distributed key-value store
 - Consul / ZooKeeper
 - CoreOS
 - Raft concensus


Think of it as a modern database that is HA.

Or Distributed /etc


Supports the Discovery / Registration Pattern


Let's setup an ETCD cluster \o/

https://coreos.com/etcd/



# CEPH

 - Distributed Filesystem
 - FLOSS S3
 - RedHat supported
 - torus/Gulsterfs
 - CERN \o/


## Apps need state

 - Not all app are built last year :/
 - We need to provide them a fs


## Modern apps need Object Store :)

RadosGW (S3 / Swift)


Let's build a cluster!



# Docker swarm

swarm is a simple tool which controls a cluster of Docker hosts and exposes it as a single "virtual" host


## Disambiguation

 - swarm mode
 - swarm


## Alternatives

 - Kubernetes (k8s) - Google / CoreOS
 - Mesos
 - Nomad (HashiCorp)
 - Rancher


## Architecture

 - Manager
 - Worker
 - runs on docker \o/
 - backed by a kv
 - New API end point


Let's build a cluster!
