pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = 'lead2learn-ai'
        DOCKER_TAG = "${env.BUILD_NUMBER}"
        REGISTRY = 'your-registry.com' // Change this to your Docker registry
        VERCEL_TOKEN = credentials('vercel-token') // Add this credential in Jenkins
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'pnpm install --frozen-lockfile'
                    } else {
                        bat 'pnpm install --frozen-lockfile'
                    }
                }
            }
        }
        
        stage('Lint & Test') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'pnpm run lint'
                        // Add tests when available: sh 'pnpm run test'
                    } else {
                        bat 'pnpm run lint'
                        // Add tests when available: bat 'pnpm run test'
                    }
                }
            }
        }
        
        stage('Build') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'pnpm run build'
                    } else {
                        bat 'pnpm run build'
                    }
                }
            }
        }
        
        stage('Docker Build') {
            steps {
                script {
                    sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
                    sh "docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:latest"
                    
                    // Tag for registry if specified
                    if (env.REGISTRY != 'your-registry.com') {
                        sh "docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${REGISTRY}/${DOCKER_IMAGE}:${DOCKER_TAG}"
                        sh "docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${REGISTRY}/${DOCKER_IMAGE}:latest"
                    }
                }
            }
        }
        
        stage('Docker Push') {
            when {
                anyOf {
                    branch 'main'
                    branch 'master'
                }
            }
            steps {
                script {
                    if (env.REGISTRY != 'your-registry.com') {
                        sh "docker push ${REGISTRY}/${DOCKER_IMAGE}:${DOCKER_TAG}"
                        sh "docker push ${REGISTRY}/${DOCKER_IMAGE}:latest"
                    }
                }
            }
        }
        
        stage('Deploy to Vercel') {
            when {
                anyOf {
                    branch 'main'
                    branch 'master'
                }
            }
            steps {
                script {
                    if (isUnix()) {
                        sh 'pnpm dlx vercel@latest --prod --token $VERCEL_TOKEN --yes'
                    } else {
                        bat 'pnpm dlx vercel@latest --prod --token %VERCEL_TOKEN% --yes'
                    }
                }
            }
        }
        
        stage('Cleanup') {
            always {
                script {
                    sh "docker rmi ${DOCKER_IMAGE}:${DOCKER_TAG} || true"
                    sh "docker rmi ${DOCKER_IMAGE}:latest || true"
                    
                    if (env.REGISTRY != 'your-registry.com') {
                        sh "docker rmi ${REGISTRY}/${DOCKER_IMAGE}:${DOCKER_TAG} || true"
                        sh "docker rmi ${REGISTRY}/${DOCKER_IMAGE}:latest || true"
                    }
                }
            }
        }
    }
    
    post {
        success {
            echo "Pipeline completed successfully!"
            // Add notifications here (Slack, email, etc.)
        }
        failure {
            echo "Pipeline failed!"
            // Add failure notifications here
        }
        always {
            cleanWs()
        }
    }
}
