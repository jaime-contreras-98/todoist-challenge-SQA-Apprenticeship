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
                sh "npm run ${params.suite} --reporter html:tests-reports/login-tests-results.html"
            }
            post {
                always {
                    archiveArtifacts artifacts: "tests-reports/login-tests-results.html", followSymlinks: false
                }
            }
        }
    }
}
