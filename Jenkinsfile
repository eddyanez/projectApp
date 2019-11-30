pipeline {
  agent any
  options{
    timeout(time: 2, unit: 'MINUTES')
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
    stage("Run Test"){
      steps{
        script{
          sh "docker run ${env.ARTIFACT_ID} npm test "
        }
      }
    }

    stage("Extract test results"){
      steps{


        script{
        cobertura autoUpdateHealth: false, autoUpdateStability: false, coberturaReportFile: 'hola', conditionalCoverageTargets: '70, 0, 0', failUnhealthy: false, failUnstable: false, lineCoverageTargets: '80, 0, 0', maxNumberOfBuilds: 0, methodCoverageTargets: '80, 0, 0', onlyStable: false, sourceEncoding: 'ASCII', zoomCoverageChart: false
        cobertura coberturaReportFile: 'path-to/coverage.xml'
        }
      }
    }
  }
}
