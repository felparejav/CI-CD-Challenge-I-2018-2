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
					sh "docker tag challenge felparejav/cicdchallenge:test" 						               	                      
				}                 
			}                 
			stage('Test') {                         
				steps {                                 
					sh 'node test'                        
				}                 
			}
			stage('push') {
				steps {
					sh 'docker push felparejav/cicdchallenge:test'
				}
			}                 
			stage('Deploy') {                         
				steps {                                 
					echo 'Ya casi'                                     					
				}                 
			}         
		} 
} 
