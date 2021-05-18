pipeline {			
	agent { docker { image 'node:16-alpine' } }			

	environment {			
		VERCEL_KEY = credentials("vercel-token")
		DISCORD_URL = credentials("jenkins-discord")		
	}

	stages {			
		stage ('Install') {			
			steps {			
				sh 'npm i'
			}			
		}
		stage ('Build') {
			//when {
			//	expression { BRANCH_NAME ==~ /((?!main).)*/ }
			//}
			steps {
				sh 'npm run build'
				sh 'npm run export'
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
	post {
		always {
			archiveArtifacts artifacts: 'out/**/*'
			discordSend description: "**Build:** ${env.BUILD_NUMBER}\n**Branch:** ${env.BRANCH_NAME}\n**Status:** ${currentBuild.currentResult}", footer: "", link: env.BUILD_URL, result: currentBuild.currentResult, title: "${JOB_NAME} #${env.BUILD_NUMBER}", webhookURL: DISCORD_URL
		}
	}		
}
