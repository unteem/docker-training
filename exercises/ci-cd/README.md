# Gitlab

Start GitLab on the swarm with the attached docker-compose.yml./

Monitor on your laptop with `watch docker ps` pointing to the swarm.

## Add a runner

```
curl -L https://packages.gitlab.com/install/repositories/runner/gitlab-ci-multi-runner/script.deb.sh | sudo bash

cat > /etc/apt/preferences.d/pin-gitlab-runner.pref <<EOF
Explanation: Prefer GitLab provided packages over the Debian native ones
Package: gitlab-ci-multi-runner
Pin: origin packages.gitlab.com
Pin-Priority: 1001
EOF

#Get the token from:
#http://gitlab.local/admin/runners

gitlab-ci-multi-runner register \
  -n \
  --url http://0.0.0.0:80/ci \
  --tag-list "docker" \
  --registration-token token\
  --executor docker \
  --description "Docker Runner" \
  --docker-image "docker:latest" \
  --docker-extra-hosts "gitlab.local:138.68.148.209" \
  --docker-volumes /var/run/docker.sock:/var/run/docker.sock
```

Add your ssh key
http://gitlab.local/profile/keys

create a new repo and push moby-counter to it

# Moby counter!

Start moby counter on the swarm, test it.

Start an nginx-proxy on all hosts.

Add the relevant entry on your /etc/hosts file.

Test Moby from your browser.

## Deploy

Deploy it from gitlab with the associated .gitlab-ci.yml
Modify to add your steps.


## Inspired from:

https://medium.com/@PS_/a-guide-to-automated-docker-deployments-w-gitlab-ci-510966dd6022#.b3obwnh3n
https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/blob/master/docs/install/linux-repository.md
https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/blob/master/docs/configuration/advanced-configuration.md
