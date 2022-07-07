pipeline{
    agent any

    triggers{
        githubPush()
    }

    stages{
        stage('Find Target'){
            steps{
                sh 'cd ../../../../../'
                sh 'cd root/api_app/jenkis_try/'
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