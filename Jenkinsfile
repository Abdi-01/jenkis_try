pipeline{
    agent {
        node {
            customWorkspace '/root/api_app/jenkis_try/'
        }
    }

    triggers{
        githubPush()
    }

    stages{
        stage('Find Target'){
            steps{
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