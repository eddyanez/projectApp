pipeline {
  agent any
  options{
    timeout(time: 2, unit, 'MINUTES')
  }
  environment {
    ARTIFACT_ID ="eddyanez/appturboperra:${env.BUILD_NUMBER}"
  }
  stages{
    stage("Build"){
      steps{
        script{
          dockerImage = docker.build "${env.ARTIFACT_ID}"
        }
      }
    }

  }
}
