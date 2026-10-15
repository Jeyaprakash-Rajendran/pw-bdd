pipeline {
  agent any

  stages {
    stage('Install') {
      steps {
        bat 'npm ci'
        bat 'npx playwright install'
      }
    }
    stage('Generate BDD specs') {
      steps {
        bat 'npx bddgen'
      }
    }
    stage('Run tests') {
      steps {
        bat 'npx playwright test'
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
    }
  }
}