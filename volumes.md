# volumes



### Docker volume

You can create volumes managed by docker.

SDS - Software-defined storage


From Dockerfile

```
VOLUME /my/path
```


From runtime

```
docker volume create --name=my_name
```

```
docker run -v mon_nom:/path_container ...
```


Support for drivers \o/ (Ceph, glusterfs...)



### Data container

You could link a container that will just contain the data.

```
--volumes-from
```


(no longer recommended, but you might see it)



### Host Bind  Mount

```
docker run -v /host/path:/guest/path debian cat /guest/path/file
```



## Exercise!

```
cd exercises/volumes
```
