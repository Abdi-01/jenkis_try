pipeline{
    agent any

    triggers{
        githubPush()
    }

    stages{
        stage('PROJECT CHECK'){
            steps{
                sh 'pwd'
                sh 'cd ../'
                sh 'pwd'
                sh 'cd ../'
                sh 'pwd'
            }
        }
    }

}