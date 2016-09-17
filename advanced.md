# advanced



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
 - pod?



## Monitoring

docker can 'monitor' processes for you

--always-restart flag

Note:
That's what some people don't like


### do not monitor the client

`docker run` is just an API call.



## User

You should specify the USER that execute the command and own the data.



## PID 1

Be careful of the PID1.

[zombie reaping problem](https://blog.phusion.nl/2015/01/20/docker-and-the-pid-1-zombie-reaping-problem/)



## Data


### Data container

You could link a container that will just contain the data.


### Volume Mount

`docker run -v /host/path:/guest/path debian cat /guest/path/file`


### Docker volume

You can now create volumes managed by docker.

`docker volume create --name=my_name`

This is now the way. (drivers are coming \o/)



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



# local storage

how to manage locally images, containers and volume!

docker ps

docker images

docker volume

https://microblog.pierre-o.fr/2015/i-know-how-to-clean-docker

https://github.com/spotify/docker-gc


# docker exec

execute a process on the side of the main process.



# Your turn - Tomcat!
