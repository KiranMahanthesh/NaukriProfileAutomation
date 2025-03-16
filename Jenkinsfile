pipeline {
    agent any

    // Schedule the pipeline to run daily at 7:00 AM IST
    triggers {
        cron('0 7 * * *')
    }

    environment {

        NAUKRI_EMAIL = credentials('8a6dca82-8943-492d-8cf5-75791748334e')
        NAUKRI_PASSWORD = credentials('6eaf16df-7605-476b-bcb6-c4884c8c32c1')

        // Cypress cache folder location within the workspace
        CYPRESS_CACHE_FOLDER = "${WORKSPACE}\\.cache\\Cypress"
    }

    tools {
        nodejs 'Default'  // Use the default NodeJS installation
    }

    options {
        ansiColor('xterm') // Enable color output
    }

    stages {
        // Step to checkout the repository
        stage('Checkout Repository') {
            steps {
                echo "[INFO] Checking out the repository..."
                checkout scm
            }
        }

        // Step to create a cache folder for Cypress
        stage('Cache Cypress') {
            steps {
                echo "[INFO] Creating Cypress cache folder if not exists..."
                bat "if not exist \"%CYPRESS_CACHE_FOLDER%\" mkdir \"%CYPRESS_CACHE_FOLDER%\""
            }
        }

        // Install project dependencies
        stage('Install Dependencies') {
            steps {
                echo "[INFO] Installing project dependencies..."
                bat 'npm ci' // Using 'npm ci' for faster, reliable installs
            }
        }

        // Install Cypress binary with cache management
        stage('Install Cypress Binary') {
            steps {
                echo "[INFO] Installing Cypress binary..."
                bat "npx cypress install --cache-folder \"%CYPRESS_CACHE_FOLDER%\""
            }
        }

        // Verify the Cypress installation
        stage('Verify Cypress Installation') {
            steps {
                echo "[INFO] Verifying Cypress installation..."
                bat 'npx cypress verify'
            }
        }

        // Run the Cypress tests with credentials passed as environment variables
        stage('Run Cypress Tests') {
            steps {
                echo "[INFO] Running Cypress tests..."
                bat "npx cypress run --browser chrome --headed --env NAUKRI_EMAIL=%NAUKRI_EMAIL%,NAUKRI_PASSWORD=%NAUKRI_PASSWORD%"
            }
        }
    }

    post {
        // If the pipeline fails, capture screenshots and videos
        failure {
            echo "[ERROR] Test run failed. Capturing artifacts..."
            archiveArtifacts artifacts: 'cypress/screenshots/**/*, cypress/videos/**/*', allowEmptyArchive: true
        }

        // Always clean the workspace after execution
        always {
            echo "[INFO] Cleaning up workspace..."
            cleanWs()
        }

        // On success, cache the Cypress binary for future runs
        success {
            echo "[INFO] Caching Cypress binary for future runs..."
            archiveArtifacts artifacts: '${WORKSPACE}\\.cache\\Cypress/**', allowEmptyArchive: true
        }
    }
}
