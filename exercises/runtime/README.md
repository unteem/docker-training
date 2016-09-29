# Start a container

 - start an nginx container (use RUN)
 - see the default html page
  - with host port mapping (-p)
  - with container IP (use inspect to get local IP)
 - mount the current index.html instead of the default one (situated in /var/share/nginx/html) (-v)
 - try to reach your peer web server!

## Help

Use the Hub luke:

https://hub.docker.com

`docker help run`

http://devdocs.io/docker~1.12/engine/reference/commandline/run/index
https://docs.docker.com/engine/reference/run/
