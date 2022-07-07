pipeline{
    agent any

    triggers{
        githubPush()
    }

    stages{
        stage('Pull Github'){
            steps{
                sh 'git pull origin main'
            }
        }
        stage('PROJECT RUNNING'){
            steps{
                sh 'npm run stop'
                sh 'npm run start'
            }
        }
    }

}