pipeline{
    agent any

    triggers{
        githubPush()
    }

    stages{
        stage('Find Target'){
            steps{
                sh 'cd ../../../../../'
                sh 'cd root/api_app/JENKIS-TRY/'
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