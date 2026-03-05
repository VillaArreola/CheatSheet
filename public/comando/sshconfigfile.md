---
layout: ../../layouts/cheatlayout.astro
title: SSH Config File
---


# SSH Config File


## **🏴‍☠️ Ejemplo**


```bash
# ~/.ssh/config
Host mi-servidor-aws
    HostName 12.34.56.78
    User ubuntu
    IdentityFile ~/.ssh/mi-clave-aws.pem

Host proxmox-lab
    HostName 192.168.137.100
    User root
    IdentityFile ~/.ssh/id_ed25519
```


### **📌 Descripción breve**

> El archivo `~/.ssh/config` permite definir alias para servidores SSH con sus parámetros, simplificando la conexión a un simple `ssh alias`.

---


### **🛠 Sintaxis básica**


```bash
Host <alias>
    HostName <IP o dominio>
    User <usuario>
    IdentityFile <ruta-a-clave-privada>
    Port <puerto>          # opcional, default 22
```


---


### **⚙️ Parámetros clave**


| Directiva      | Descripción                          | Ejemplo                       |
| -------------- | ------------------------------------ | ----------------------------- |
| `Host`         | Alias que usarás en el comando `ssh` | `Host prod-server`            |
| `HostName`     | IP o dominio real del servidor       | `HostName 10.0.0.5`           |
| `User`         | Usuario de login                     | `User ubuntu`                 |
| `IdentityFile` | Ruta a la clave privada              | `IdentityFile ~/.ssh/key.pem` |
| `Port`         | Puerto SSH (si no es 22)             | `Port 2222`                   |


---


### **🚀 Ejemplos de uso**


**Conectar usando alias:**


```bash
ssh mi-servidor-aws
# equivale a: ssh -i ~/.ssh/mi-clave-aws.pem ubuntu@12.34.56.78
```


**Agregar nuevo host al config:**


```bash
echo -e "\nHost nuevo\n    HostName 1.2.3.4\n    User debian\n    IdentityFile ~/.ssh/id_ed25519" >> ~/.ssh/config
```


**Verificar permisos del config:**


```bash
chmod 600 ~/.ssh/config
```


---


### **📤 Salida esperada**


```plain text
# ssh mi-servidor-aws
Welcome to Ubuntu 22.04 LTS
ubuntu@ip-12-34-56-78:~$
```


---


### **💡 Notas / Tips**

- El archivo `config` también debe tener permisos `600`
- Usar `Host *` al final del archivo para definir defaults globales
- `ProxyJump` permite saltar por un bastión: `ProxyJump bastion-host`
- Compatible con `scp` y `rsync` — también usan el archivo config

---


### **🔗 Referencias**

- [ssh_config man page](https://man.openbsd.org/ssh_config)
