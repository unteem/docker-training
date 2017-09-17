# Continuous integration

continuous integration (CI) is the practice of merging all developer working copies to a shared mainline several times a day


## TDD

Test driven development


## Static analysis

js lint and friends


## Git branching model

 - Each feature/bug fix is a branch.
 - A pull request is made against develop
 - CI is telling you if tests pass
 - you can have code review with [mention bot](https://github.com/facebook/mention-bot)
 - once happy merging time!


# Continuous Deployment

Once a new commit arrives to master:
 -> deploy to staging/prod



Let's build this!

Start a GitLab instance
Git push -> CI -> build container -> gitlab registry -> deploy new container
