pipeline {			
	agent { docker { image 'node:16-alpine' } }			

	environment {			
		VERCEL_KEY = credentials("vercel-token")			
	}			

	stages {			
		stage ('Install') {			
			steps {			
				sh 'npm i'			
				sh 'npm i vercel'			
			}			
		}			
		stage ('Deploy') {			
			steps {			
				sh './node_modules/.bin/vercel --prod --token $VERCEL_KEY --confirm --name abmgrt-dev'			
			}			
		}			
	}			
}
