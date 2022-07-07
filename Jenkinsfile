pipeline{
    agent any

    triggers{
        githubPush()
    }

    stages{
        stage('Target'){
            steps{
                sh 'cd ../../../../../'
                sh 'pwd'
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