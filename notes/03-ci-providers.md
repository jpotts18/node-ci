
## Code Coverage Tracking

Codecov: https://codecov.io/#features
Coveralls: https://coveralls.io/features
Codeclimate: https://codeclimate.com/features
Codacy: https://codacy.com/product`

## Continuous Integration Services

### Travis
* Sign in with Github Account
* Enable via web
* Defaults based on Node.js conventions
* .travis.yml is very well documented and thought out
* Notifications are easy to setup
* GUI is pretty user friendly
* Badges
* Cron Jobs
* Code Driven through YAML
* Lots of 3rd party apps, Mac apps, CLI apps, https://docs.travis-ci.com/user/apps/

### Jenkins

* Docker Container
`docker run -p 8080:8080 jenkins/jenkins:lts`
* Password echoed out after build or in a document on the server
* Configure Plugins
* Configure Credentials

### AWS CodeBuild

* Project Name: node-ci
* Source Provider: Github
* Repository: Use Public or (From My Account):
* Choose a Repo: node-ci
* Git Clone Depth: 1
* Branch Filter: Empty = All
* Environment Image: (AWS Managed) or Docker
* OS
* Run Time: NodeJs
* Build Specification: Use Buildspec.yml
* Artifacts: No
* Cache: No
* Service Role: Make a new one

### Circle CI

* Github Signin
* 1 container free
