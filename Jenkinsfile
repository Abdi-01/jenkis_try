pipeline{
    agent  {
        node {
            label 'main'
            customWorkspace '/root/api_app/'
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