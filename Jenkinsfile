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
					sh "docker build challenge -t felparejav/cicdchallenge:test" 						               	                      
				}                 
			}                 
			stage('Test') {                         
				steps {                                 
					sh 'node test'                        
				}                 
			}
			stage('push') {
				steps {
					sh '''
					   	docker login -u Docker_User -p Docker_Password
						docker push felparejav/cicdchallenge:test

						'''
				}
			}                 
			stage('Deploy') {                         
				steps {                                 
					echo 'Ya casi'                                     					
				}                 
			}         
		} 
} 
