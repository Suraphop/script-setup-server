## Devops server
 - docker
 - docker-compose
 - jenkins
 - gitlab
 - kong
 - sshpass

#### docker
```
sudo yum install -y yum-utils
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
sudo systemctl start docker
sudo usermod -aG docker jenkins
```
