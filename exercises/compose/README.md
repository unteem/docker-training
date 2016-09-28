# make your first docker-compose

Make a docker-compose.yml file to start a web server and a grunt "application" server to serve this presentation.

When issuing `docker-compose up` it should start the full stack, mount the appropriate volume, create the appropriate networks.

# Moby Couter

From the rest of the training, we'll use the application moby counter.

## Start it

And try it locally.

## Migrate to v2

Migrate the version of compose from v1 to v2 (and add named volumes and isolated networks).

Make the data persistent for redis.

Start it and make sure it is working locally.
Try to access it from your peers.

## Start to build the ci/cd pipeline

Just write down what is necessary to:
 - build docker image
 - deploy to your local docker

It will be the skeleton of your pipeline.
