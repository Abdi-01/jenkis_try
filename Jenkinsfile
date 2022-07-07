pipeline{
    agent any

    triggers{
        githubPush()
    }

    stages{
        stage('PROJECT CHECK'){
            steps{
                sh 'cd ..'
                sh 'pwd'
            }
        }
    }

}