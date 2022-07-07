pipeline{
    agent any

    triggers{
        githubPush()
    }

    stages{
        stage('INITIALIZE GIT'){
            steps{
                sh 'ls'
                sh 'git pull origin main'
                sh 'npm i'
                sh 'git add .'
            }
        }
        stage('RUN'){
            steps{
                sh 'sudo pm2 start index.js'
            }
        }
    }

}