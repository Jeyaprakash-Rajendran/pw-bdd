pipeline {
  agent any

  triggers {
    pollSCM('H/2 * * * *')             // check GitHub every ~2 minutes
  }

  parameters {
    choice(name: 'BROWSER', choices: ['chromium', 'firefox', 'all'], description: 'Which browser')
    string(name: 'TAGS', defaultValue: '', description: 'e.g. @smoke (leave empty for all)')
  }

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
        script {
          def grep    = params.TAGS ? "--grep \"${params.TAGS}\"" : ''
          def project = params.BROWSER == 'all' ? '' : "--project=${params.BROWSER}"
          bat "npx playwright test ${project} ${grep}"
        }
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
    }
    success { echo 'All tests passed' }
    failure { echo 'Some tests failed - check the report under Artifacts' }
  }
}