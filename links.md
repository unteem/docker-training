# Docker links

(deprecated but important to see)



## Name is important!

`docker run --name nostalgic_morse`



## Volumes linking


### Runtime

```
docker run --name data -v /my_volume debian /bin/true
```


### Dockerfile

```
...
VOLUME ["/my_volume"]
...
```


### Links

```
docker run --volumes-from data debian /bin/true
```

[reference](http://docs.docker.com/userguide/dockervolumes/)


### Concrete cases

 - DB backup
 - logs



## Network links


### Runtime

```
docker run --expose=80 web
```


### Dockerfile

```
EXPOSE 80 443
```


### Effect on ENV

```
$ docker run --rm --name db mysql
$ docker run --rm --name web2 --link db:db1 training/webapp
    . . .
    DB1_NAME=/web2/db
    DB1_PORT=tcp://172.17.0.5:5432
    DB1_PORT_5432_TCP=tcp://172.17.0.5:5432
    DB1_PORT_5432_TCP_PROTO=tcp
    DB1_PORT_5432_TCP_PORT=5432
    DB1_PORT_5432_TCP_ADDR=172.17.0.5
```


### Effect on host file

```
cat /etc/hosts

...
172.17.0.5  db1 6e5cdeb2d300 db
...
```

[reference](http://docs.docker.com/userguide/dockerlinks/)


### ENV

Linking a container will expose all local environment to the linked container.

`<alias>_ENV_<name>`
