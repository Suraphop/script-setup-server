## Devops server

- docker
- docker-compose
- kong
- ftp server
- portainer
- uptime-kuma

#### kong gateway
- open kong with http:localhost:8443
- kong api gateway with http://localhost:8001
```
docker network create kong-net
docker run -d --restart unless-stopped --name kong-database --network=kong-net -p 5432:5432 -e "POSTGRES_USER=kong" -e "POSTGRES_DB=kong" -e "POSTGRES_PASSWORD=kongpass" postgres:13
```
```
docker run --restart unless-stopped --network=kong-net -e "KONG_DATABASE=postgres" -e "KONG_PG_HOST=kong-database" -e "KONG_PG_PASSWORD=kongpass" -e "KONG_PASSWORD=test" kong/kong-gateway:3.2.2.1 kong migrations bootstrap
```
```
docker run -d --restart unless-stopped --name kong-gateway --network=kong-net  -e "KONG_DATABASE=postgres" -e "KONG_PG_HOST=kong-database" -e "KONG_PG_USER=kong" -e "KONG_PG_PASSWORD=kongpass" -e "KONG_PROXY_ACCESS_LOG=/dev/stdout" -e "KONG_ADMIN_ACCESS_LOG=/dev/stdout" -e "KONG_PROXY_ERROR_LOG=/dev/stderr" -e "KONG_ADMIN_ERROR_LOG=/dev/stderr" -e "KONG_ADMIN_LISTEN=0.0.0.0:8001" -p 8000:8000 -p 8443:8443 -p 8001:8001 -p 8444:8444 -p 8002:8002 -p 8445:8445 -p 8003:8003 -p 8004:8004 kong/kong-gateway:3.2.2.1
docker run -d --restart unless-stopped -p 1337:1337 --network kong-net --name konga pantsel/konga
```

#### Ftp server
- edit
  - floder directory
  - FTP_USER
  - FTP_PASS
  - PASV_ADDRESS
```
docker run -d -v $HOME/ftp/data/:/home/vsftpd -p 20:20 -p 21:21 -p 47400-47470:47400-47470 -e FTP_USER=admin -e FTP_PASS=1234 -e PASV_ADDRESS=10.128.16.210 --name ftp --restart=always bogem/ftp
```

#### Uptime-kuma
```
docker run -d --restart=always -p 3001:3001 -v $HOME/uptime-kuma/data:/app/data --name uptime-kuma louislam/uptime-kuma:latest
```

#### Portainer
```
docker run -d -p 9000:9000 --name=portainer --restart=unless-stopped -v /var/run/docker.sock:/var/run/docker.sock -v $HOME/portainer:/data portainer/portainer:latest

```