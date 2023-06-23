## Docker Command 

#### check log 
```
docker logs - f <container name>
```

#### remove all images
```
docker rmi -f $(docker images -aq)
```
#### remove all container
```
docker rm -f $(docker ps -aq)
```

#### delete container 
```
docker rmi <container name>
```

#### delete images
```
docker rm <container name>
```

#### build dockerfile
```
docker build -t <container name> .
```

#### run dockerfile
```
docker run -it --rm <container name>
```

#### run terminal
```
docker exec -it <container name> bash
```