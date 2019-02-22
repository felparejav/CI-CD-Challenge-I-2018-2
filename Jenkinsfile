pipeline {
	environment{
		
		Docker_User = 'docker_user'
		Docker_Password = 'docker_pass'
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
						docker login -u Docker_User -p Docker_Password
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
