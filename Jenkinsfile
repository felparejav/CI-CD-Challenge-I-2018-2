pipeline {
	
	agent any 
	environment{
		
		Docker_User = credentials('dockerhub_user')
		Docker_Password = credentials('dockerhub_pass')
		Ver = "${env.BUILD_ID}"
		Name = "${env.JOB_NAME}"
		
	}         
		stages {                 
			stage('Prepare') {                         
				steps {                                 
					echo "${Name}"
				}                 
			}                 
			stage('Build') {                         
				steps {
					sh "docker rmi -f challenge" 
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
						docker tag challenge felparejav/cicdchallenge:${Ver}
						docker push felparejav/cicdchallenge:${Ver}
						'''
				}
			}                 
			stage('Deploy') {                         
				steps {                                 
					input("Are you sure ?")
					sh '''docker rm -v -f $(docker ps -qa)
						docker run -d -p 8000:8000 --name challenge felparejav/cicdchallenge:${Ver}'''
					                                     					
				}                 
			}         
		} 
} 
