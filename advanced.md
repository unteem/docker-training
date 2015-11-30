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

You can and should specify the USER that execute the command.



## PID 1

Be careful of the PID1.

[zombie reaping problem](https://blog.phusion.nl/2015/01/20/docker-and-the-pid-1-zombie-reaping-problem/)



## Data


### Data container

You could link a container that will just contain the data.


### Volume Mount

`docker run -v /host/path:/guest/path debian cat /guest/path/file`

This is the way :)



# Logs


## Stdout/Stderr

The best!


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

docker volumes

https://microblog.pierre-o.fr/2015/i-know-how-to-clean-docker


# docker exec

execute a process on the side of the main process.
