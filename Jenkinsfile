pipeline {
  agent any

  stages {
    stage('Install') {
      steps { echo 'npm install' }
    }

    stage('Test') {
      parallel {
        stage('Static code analysis') {
            steps { echo 'npm run-script lint' }
        }
        stage('Unit tests') {
            steps { echo 'npm run-script test' }
        }
      }
    }

    stage('Build') {
      steps { echo 'npm run-script build' }
    }
  }
}