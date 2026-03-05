---
layout: ../../layouts/cheatlayout.astro
title: SSH Key Management
---


# SSH Key Management


## **🏴‍☠️ Ejemplo**


```bash
mkdir -p ~/.ssh
chmod 700 ~/.ssh
chmod 600 ~/.ssh/mi-clave-privada
chmod 644 ~/.ssh/mi-clave-publica.pub
```


### **📌 Descripción breve**

> Gestión de claves SSH: dónde guardarlas, qué permisos aplicar y cómo conectarse con claves de nombre personalizado.

---


### **🛠 Sintaxis básica**


```bash
ssh -i ~/.ssh/nombre-clave.pem usuario@<IP>
```


---


### **⚙️ Parámetros clave**


| Elemento             | Permiso                        | Comando                      |
| -------------------- | ------------------------------ | ---------------------------- |
| Carpeta `~/.ssh`     | `700` (solo el dueño)          | `chmod 700 ~/.ssh`           |
| Clave privada        | `600` (solo lectura del dueño) | `chmod 600 ~/.ssh/clave`     |
| Clave pública `.pub` | `644`                          | `chmod 644 ~/.ssh/clave.pub` |


---


### **🚀 Ejemplos de uso**


**Mover claves desde Descargas:**


```bash
mv ~/Downloads/mi-clave ~/.ssh/
chmod 600 ~/.ssh/mi-clave
```


**Conectar con clave de nombre personalizado:**


```bash
ssh -i ~/.ssh/mi-clave-aws.pem ubuntu@<IP>
```


**Conectar con clave estándar (auto-detectada):**


```bash
ssh usuario@<IP>
```


**Eliminar Key Pair en AWS CLI:**


```bash
aws ec2 delete-key-pair --key-name NombreDeTuClave
rm ~/.ssh/clave-vieja.pem
```


---


### **📤 Salida esperada**


```plain text
# Sin errores = permisos correctos
# Error típico: WARNING: UNPROTECTED PRIVATE KEY FILE!
# → chmod 600 ~/.ssh/clave-privada
```


---


### **💡 Notas / Tips**

- Las claves con nombre estándar (`id_rsa`, `id_ed25519`) se usan automáticamente sin `-i`
- Borrar un Key Pair en AWS solo elimina su registro — las instancias en ejecución conservan acceso
- Para revocar acceso real a un servidor activo: eliminar la línea en `~/.ssh/authorized_keys` del servidor
- En Windows: `%USERPROFILE%\.ssh\` es la ruta equivalente

---


### **🔗 Referencias**

- [OpenSSH Manual](https://www.openssh.com/manual.html)
- [AWS EC2 Key Pairs](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html)
