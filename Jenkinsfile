pipeline{
    agent any

    triggers{
        githubPush()
    }

    stages{
        stage('INITIALIZE'){
            steps{
                sh 'ls'
                sh 'git pull origin main'
                sh 'npm i'
                sh 'git add .'
            }
        }
        stage('RUN'){
            steps{
                sh 'pm2 stop 0'
                sh 'pm2 stop 1'
                sh 'pm2 start index.js'
            }
        }
    }

}