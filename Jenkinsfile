pipeline {
	
	agent any 
	environment{
		
		Docker_User = credentials('dockerhub_user')
		Docker_Password = credentials('dockerhub_pass')
		V = ${env.BUILD_ID}
		
	}         
		stages {                 
			stage('Prepare') {                         
				steps {                                 
					echo "V"
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
					echo ''                        
				}                 
			}
			stage('push') {
				steps {
					sh '''
						docker login -u $Docker_User -p $Docker_Password
						docker tag challenge felparejav/cicdchallenge:${V}
						docker push felparejav/cicdchallenge:${V}
						'''
				}
			}                 
			stage('Deploy') {                         
				steps {                                 
					input ("Seguro perro ?")
					sh'''
						docker rmi $(docker images -q)
						docker run -d -p 8000:8000 --name challenge felparejav/cicdchallenge:"\${V}"
						'''                                     					
				}                 
			}         
		} 
} 
