pipeline{
    agent any

    triggers{
        githubPush()
    }

    stages{
        stage('Target'){
            steps{
                sh 'cd ../../../../../'
                sh 'cd root/api_app/'
            }
        }
        stage('Pull Github'){
            steps{
                sh 'git pull origin main'
            }
        }
        stage('PROJECT RUNNING'){
            steps{
                sh 'npm run start'
            }
        }
    }

}