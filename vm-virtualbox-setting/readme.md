## install tools on ubuntu 22 in vm virtual

### fix ip

  -  sudo apt install net-tools
  -  setting 2 adapter in network
     - adapter1 -> bridged adapter -> wireless
     - adapter2 -> bridged adapter -> Hyper-V virtual ethernet Adapter
  -  fix manual ip 

#### install ssh
```
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install openssh-server
```
#### change ssh port
```
netstat -tulnp | grep ssh
grep -i port /etc/ssh/sshd_config
nano /etc/ssh/sshd_config
Port 22000
systemctl restart sshd
```