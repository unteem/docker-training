# Introduction to Docker

### [Pierre Ozoux](https://microblog.pierre-o.fr/)

29 Juin 2015



# A Brief history of the cloud 


## Xen (2003) 
## KVM (2007)


## Amazon Web Services 2006

![AWS logo](/images/AmazonWebservices_Logo.svg)


## IaaS

Infrastructure as a Service

(Amazon, OVH, Gandi)


## PaaS

Platform as a Service

(EngineYard, Heroku)


## SaaS

Software as a Service

(basecamp, gmail, impots.gouv.fr)


# FSaaS

Free Software as a Service :)

(Owncloud, Wordpress..)



# What is DevOps?


## SysAdmin way:

Quand je fais un "ifconfig eth0 down" en SSH sur un serveur distant.

![sysadmin](/images/sysadmin.gif)

[source: lesjoiesdusysadmin.tumblr.com](http://lesjoiesdusysadmin.tumblr.com/post/83722079163/quand-je-fais-un-ifconfig-eth0-down-en-ssh-sur)


## DevOps way:

Unnecessary automation!

![devops](/images/devops.gif)

[source: devopsreactions.tumblr.com](http://devopsreactions.tumblr.com/post/117760555890/unnecessary-automation)


## Dev and Ops

Infrastructure as Code

Note:
You manage your Infrastructure like you manage your code.
Feature request, bug tracking, Continuous deployment



# 12 Factor App

Developed by Heroku


## I. Codebase

One codebase tracked in revision control, many deploys


## II. Dependencies

Explicitly declare and isolate dependencies

Note:
dependency declaration: Gemfile
dependency isolation: bundle


## III. Config

Store config in the environment

Note:
An app's config is everything that is likely to vary between deploys (staging, production, developer environments, etc). This includes:
 - Resource handles to the database, Memcached, and other backing services
 - Credentials to external services such as Amazon S3 or Twitter
 - Per-deploy values such as the canonical hostname for the deploy
environment variables


## IV. Backing Services

Treat backing services as attached resources

Note:
email, db, twitter


## V. Build, release, run

Strictly separate build and run stages

Note:
build stage
release stage
run stage


## VI. Processes

Execute the app as one or more stateless processes

Note:
Twelve-factor processes are stateless and share-nothing. Any data that needs to persist must be stored in a stateful backing service, typically a database.


## VII. Port binding

Export services via port binding

Note:
The contract with the execution environment is binding to a port to serve requests.
Note also that the port-binding approach means that one app can become the backing service for another app.


## VIII. Concurrency

Scale out via the process model

Note:
Twelve-factor app processes should never daemonize or write PID files.


## IX. Disposability

Maximize robustness with fast startup and graceful shutdown

Note:
The twelve-factor app's processes are disposable, meaning they can be started or stopped at a moment's notice. This facilitates fast elastic scaling, rapid deployment of code or config changes, and robustness of production deploys.


## X. Dev/prod parity

Keep development, staging, and production as similar as possible

Note:
The twelve-factor app is designed for continuous deployment by keeping the gap between development and production small.


## XI. Logs

Treat logs as event streams

Note:
A twelve-factor app never concerns itself with routing or storage of its output stream. It should not attempt to write to or manage logfiles.


## XII. Admin processes

Run admin/management tasks as one-off processes



# Docker


## Containers?

 - BSD Jail
 - Solaris Zones
 - LXC / OpenVZ and now Docker


## What is Docker?

"Docker is an open platform for developers and sysadmins to build, ship, and run distributed applications.
Docker enables apps to be quickly assembled from components and eliminates the friction between development, QA, and production environments.
As a result, IT can ship faster and run the same app, unchanged, on laptops, data center VMs, and any cloud."

From docker's website. 


## Docker is:

- An open source tool that places a layer on top of Linux containers (cgroups and namespaces) to make it simple to package and ship complex apps
- A tool for creating a layered filesystem; each layer is versioned and can be shared across running instances, making for much more lightweight deployments
- A company behind the project, as well as a site called the "Docker Hub" for sharing containers

from [docker-jumpstart](https://github.com/odewahn/docker-jumpstart)


## Docker isn't:

 - A virtual machine. Unlike a true VM, a docker container does not also require a host OS, meaning it's much slimmer than a real VM
 - An infrastructure automation tool, like Puppet or Chef. Like those other tools, Docker is a major player in the DevOps space, but its focus is around running apps in a container environment, as opposed to representing a machine state.

from [docker-jumpstart](https://github.com/odewahn/docker-jumpstart)


## VM

![VM](/images/VM.png)


## Docker/Container

![Docker](/images/docker.png)

