pipeline{
    agent any
    tools {
        nodejs 'node installation'
    }
    parameters {
        choice choices: ['loginTests', 'projectsTests' ,'tasksTests', 'loginTestsHeadless' , 'smokeTests', 'regressionTests'], name: 'suite'
    }
    stages {
        stage('build') {
            steps {
                sh "npm install"
            }
        }
        stage('test') {
            steps {
                sh "npm run ${params.suite} --reporter html:tests-reports/${params.suite}.html"
            }
            post {
                always {
                    archiveArtifacts artifacts: "tests-reports/${params.suite}.html", followSymlinks: false
                }
            }
        }
    }
}
