`npm init`

`npm install express --save`

### Create simple route

### Unit Tests
`npm install --save-dev mocha chai`
`mkdir test`

### Linter
`npm install --save-dev eslint `
`node_modules/.bin/eslint .`

### Test Coverage
`npm install --save-dev nyc`


### Code Coverage Tracking

Codecov: https://codecov.io/#features

Coveralls: https://coveralls.io/features
* `npm install coveralls --save-dev`

Codeclimate: https://codeclimate.com/features

Codacy: https://codacy.com/product`

### Documentation

Swagger

`npm install -g documentation`

`documentation build addTwoNumbers.js -f html -o docs`

`echo 'docs/' >> .eslintignore`

### Resources

Precommit hooks - http://codeinthehole.com/tips/tips-for-using-a-git-pre-commit-hook/

https://hackernoon.com/the-ultimate-list-of-javascript-tools-e0a5351b98e3


### Continuous Integration

## Github management
 * Locked branches etc.
 * PR Templates


## Jenkins

* Docker Container
`docker run -p 8080:8080 jenkins/jenkins:lts`
* Password echoed out after build or in a document on the server

* Configure Plugins

* Configure Credentials

## AWS CodeBuild

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
