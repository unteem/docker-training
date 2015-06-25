# docker-compose



## Idea

Describe links between containers.



## Install

Install docker-compose

http://docs.docker.com/compose/install/



## Example

```
web:
  build: .
  ports:
   - "5000:5000"
  volumes:
   - .:/code
  links:
   - redis
redis:
  image: redis
  environment:
    - MY_ENV_VARIABLe:development
    - SESSION_SECRET
```

[reference](http://docs.docker.com/compose/yml/)



## Command line

```
docker-compose up
docker-compose stop
docker-compose rm
```

[reference](http://docs.docker.com/compose/cli/)



## Your turn!
