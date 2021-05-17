pipeline {			
	agent { docker { image 'node:16-alpine' } }			

	environment {			
		VERCEL_KEY = credentials("vercel-token")			
	}			

	stages {			
		stage ('Install') {			
			steps {			
				sh 'npm i'			
				sh 'npm i -g vercel'			
			}			
		}			
		stage ('Deploy') {			
			steps {			
				sh 'vercel --prod --token $VERCEL_KEY --confirm'			
			}			
		}			
	}			
}
