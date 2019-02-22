pipeline {
	agent any         
		stages {                 
			stage('Prepare') {                         
				steps {                                 
					echo "Preparing"
				}                 
			}                 
			stage('Build') {                         
				steps {
					sh "docker tag challengefelparejav/cicdchallenge:test" 						               	                      
				}                 
			}                 
			stage('Test') {                         
				steps {                                 
					sh 'node test'                        
				}                 
			}
			stage('push') {
				steps {
					echo 'docker login -u Docker_User -p Docker_Password'
					echo 'docker push felparejav/cicdchallenge:test2'
				}
			}                 
			stage('Deploy') {                         
				steps {                                 
					echo 'Deploying....'                                     					
				}                 
			}         
		} 
} 
