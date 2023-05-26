# Devops server
 - docker
 - docker-compose
 - git
 - jenkins
 - gitlab

#### docker
```
sudo yum install -y yum-utils
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
sudo systemctl start docker
sudo usermod -aG docker jenkins
```

#### docker compose
```
curl -SL https://github.com/docker/compose/releases/download/v2.18.1/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

#### git
```
sudo yum -y install git

```

#### jenkins,gitlab
```
sudo rm -r readme
git clone https://github.com/Suraphop/readme.git
cd readme/devops-server-centos/
mkdir jenkins_home
sudo chown 1000:1000 jenkins_home -R
docker-compose build
docker-compose up -d
```
