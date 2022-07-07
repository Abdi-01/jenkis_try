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
                sh 'pm2 list'
                sh 'pm2 start api.js --attach'
            }
        }
    }

}