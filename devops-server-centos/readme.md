# Devops server
 - docker
 - docker-compose
 - git
 - jenkins
 - gitlab


#### docker
- jenkins (usermod command)  is a user login, can find with whoami
```
sudo yum install -y yum-utils &&
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo &&
sudo yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin &&
sudo systemctl enable docker.service &&
sudo systemctl start docker &&
sudo usermod -aG docker jenkins 
```

#### docker compose
```
sudo curl -SL https://github.com/docker/compose/releases/download/v2.18.1/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose &&
sudo chmod +x /usr/local/bin/docker-compose
```

#### git
```
sudo yum -y install git
```

#### jenkins,gitlab
- edit gitlab ip in docker-compose file
```
sudo rm -r readme ;
git clone https://github.com/Suraphop/readme.git &&
mkdir jenkins-data ;
cd readme &&
cp -r devops-server-centos/. ../jenkins-data/ &&
cd .. &&
cd jenkins-data &&
mkdir jenkins_home ;
sudo chown 1000:1000 jenkins_home -R &&
docker-compose build &&
docker rmi $(docker images -f "dangling=true" -q) --force && ;
docker rm -f $(docker ps -a -q --filter "name=jenkins") ;
docker rm -f $(docker ps -a -q --filter "name=git-server") ;
docker-compose up -d 
```
#### initial jenkins
- get init password from docker log
- add plugin: GitLab Plugin
```
docker logs -f jenkins
```
#### add permission docker for jenkins
```
sudo chown 1000:1000 /var/run/docker.sock
```

#### add plugin's jenkins
```
manage jenkins -> plugins -> available plugins - > search "gitlab" -> install named "Gitlab"
```

#### initial gitlab
- get init password from docker log
```
sudo docker exec -it gitlab grep 'Password:' /etc/gitlab/initial_root_password
```

#### edit root password
```
admin account -> Preferences -> Password
```
#### Add a new user
```
Search or go to -> admin area -> User -> new user
```

#### enable local domain for webhook
go to admin area -> setting -> network - outbound requests -> allow requests to the local network

#### gpathed (rocky linux)
```
sudo dnf update
sudo dnf install epel-release
sudo dnf install gparted
```
