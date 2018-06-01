pipeline {
  agent {
    docker {
      image 'node:6-alpine'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh '''echo "> Running Tests"
npm test
echo "> Running Lint"
node_modules/.bin/eslint .'''
      }
    }
  }
}