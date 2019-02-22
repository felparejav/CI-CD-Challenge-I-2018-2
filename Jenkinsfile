pipeline {
	environment{
		registry = "felparejav/cicdchallenge"
		registryCredential = 'dockerhub'
	} 
	agent any         
		stages {                 
			stage('Prepare') {                         
				steps {                                 
					echo "Preparing"
				}                 
			}                 
			stage('Build') {                         
				steps {
					sh "docker rmi -f challenge " 
					sh "docker build -t challenge ."											               	                      
				}                 
			}                 
			stage('Test') {                         
				steps {                                 
					sh 'docker run challenge npm test'                        
				}                 
			}
			stage('push') {
				steps {
					sh '''
						docker tag challenge felparejav/cicdchallenge:test2
						docker push felparejav/cicdchallenge:test2
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
