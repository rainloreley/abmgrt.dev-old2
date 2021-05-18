pipeline {			
	agent { docker { image 'node:16-alpine' } }			

	environment {			
		VERCEL_KEY = credentials("vercel-token")			
	}

	stages {			
		stage ('Install') {			
			steps {			
				sh 'npm i'
			}			
		}
		stage ('Build') {
			when {
				expression { BRANCH_NAME ==~ /((?!main).)*/ }
			}
			steps {
				sh 'npm run build'
			}
		}
		stage ('Build & Deploy') {
			when {
				branch 'main'
			}	
			steps {
				sh 'npm i vercel'	
				sh './node_modules/.bin/vercel --prod --token $VERCEL_KEY --confirm --name abmgrt-dev'			
			}			
		}			
	}			
}
