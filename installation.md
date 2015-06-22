# installation



## boot2docker

Minimal linux image to run Docker

Needs VirtualBox


## Docker API

docker daemon

docker client


## docker-machine

https://docs.docker.com/machine/

https://github.com/docker/machine/releases


## First run

```bash
docker-machine create --driver digitalocean --digitalocean-access-token $DIGITALOCEAN_API_KEY dev
eval "$(docker-machine env dev)"
docker run busybox echo hello world
docker run -it busybox
docker-machine rm dev
```

