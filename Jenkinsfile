pipeline {
    agent any

    environment {
        NAUKRI_EMAIL = credentials('8a6dca82-8943-492d-8cf5-75791748334e')
        NAUKRI_PASSWORD = credentials('6eaf16df-7605-476b-bcb6-c4884c8c32c1')
    }

    tools {
        nodejs 'Default'  // Use the default NodeJS installation
    }

    stages {
        stage('Checkout Repository') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Cypress Binary') {
            steps {
                bat 'npx cypress install --force'
            }
        }

        stage('Verify Cypress Installation') {
            steps {
                bat 'npx cypress verify'
            }
        }

        stage('Run Cypress Tests (Attempt 1)') {
            steps {
                script {
                    try {
                        bat "npx cypress run --browser chrome --headed --env NAUKRI_EMAIL=%NAUKRI_EMAIL%,NAUKRI_PASSWORD=%NAUKRI_PASSWORD%"
                    } catch (Exception e) {
                        currentBuild.result = 'UNSTABLE'
                        echo "First attempt failed, retrying after 15 minutes..."
                        sleep(time: 15, unit: 'MINUTES')
                        bat "npx cypress run --browser chrome --headed --env NAUKRI_EMAIL=%NAUKRI_EMAIL%,NAUKRI_PASSWORD=%NAUKRI_PASSWORD%"
                    }
                }
            }
        }

        stage('Upload Artifacts on Failure') {
            when {
                expression { currentBuild.result == 'UNSTABLE' }
            }
            steps {
                archiveArtifacts artifacts: 'cypress/screenshots/**/*', allowEmptyArchive: true
                archiveArtifacts artifacts: 'cypress/videos/**/*', allowEmptyArchive: true
            }
        }
    }

    post {
        always {
            cleanWs() // Clean workspace after pipeline execution
        }
    }
}
