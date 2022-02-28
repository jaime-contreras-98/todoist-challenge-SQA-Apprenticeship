pipeline{
    agent any
    tools {
        tool name: 'node installation', type: 'nodejs'
    }
    parameters {
        choice choices: ['loginTests', 'notesTests', 'loginTestsHeadless' , 'smokeTests'], name: 'suite'
    }
    stages {
        stage('build') {
            steps {
                sh "npm install"
            }
        }
        stage('test') {
            steps {
                sh "npm run ${params.suite}"
            }
        }
    }    
}