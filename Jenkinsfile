pipeline {
    agent any

    environment {
        NAUKRI_EMAIL = credentials('8a6dca82-8943-492d-8cf5-75791748334e')
        NAUKRI_PASSWORD = credentials('6eaf16df-7605-476b-bcb6-c4884c8c32c1')
    }

    tools {
        nodejs 'NodeJS 22.12.0'  // NodeJS version from Global Tool Configuration
    }

    stages {
        stage('Checkout Repository') {
            steps {
                checkout scm
            }
        }

        stage('Cache Cypress Binary') {
            steps {
                sh '''
                mkdir -p ~/.cache/Cypress
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Fix Cypress Permissions') {
            steps {
                sh 'chmod +x ./node_modules/.bin/cypress'
            }
        }

        stage('Add Cypress to PATH') {
            steps {
                sh 'echo "$(pwd)/node_modules/.bin" >> $GITHUB_PATH'
            }
        }

        stage('Install Cypress Binary') {
            steps {
                sh 'npx cypress install --force'
            }
        }

        stage('Verify Cypress Installation') {
            steps {
                sh 'npx cypress verify'
            }
        }

        stage('Run Cypress Tests (Attempt 1)') {
            steps {
                script {
                    try {
                        sh 'xvfb-run --auto-servernum npx cypress run --browser chrome --headed --env NAUKRI_EMAIL=$NAUKRI_EMAIL,NAUKRI_PASSWORD=$NAUKRI_PASSWORD'
                    } catch (Exception e) {
                        currentBuild.result = 'UNSTABLE'
                        echo "First attempt failed, retrying after 15 minutes..."
                        sleep(time: 15, unit: 'MINUTES')
                        sh 'xvfb-run --auto-servernum npx cypress run --browser chrome --headed --env NAUKRI_EMAIL=$NAUKRI_EMAIL,NAUKRI_PASSWORD=$NAUKRI_PASSWORD'
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
