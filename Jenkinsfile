pipeline {
    agent { label 'main' }
    stages {
        stage('build') {
            steps {
                echo "Hello World!"
                sh "echo Hello from the shell"                
                "npm run build"
            }
        }
    }
}