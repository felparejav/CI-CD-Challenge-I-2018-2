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
					sh "docker build -t challenge ." 						               	                      
				}                 
			}                 
			stage('Test') {                         
				steps {                                 
					echo 'Testing...'                        
				}                 
			}
			stage('push') {
				steps {
					echo 'pushing'
				}
			}                 
			stage('Deploy') {                         
				steps {                                 
					echo 'Deploying....'                                     					
				}                 
			}         
		} 
} 
