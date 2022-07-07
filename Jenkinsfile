pipeline{
    agent any

    triggers{
        githubPush()
    }

    node{
        stage('Find Target'){
            steps{
                sh script:'''
                #!/bin/bash
                pwd
                '''
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