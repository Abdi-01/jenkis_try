pipeline{
    agent any

    triggers{
        githubPush()
    }

    stages{
        stage('PROJECT CHECK'){
            steps{
                sh 'pm2 list'
            }
        }
    }

}