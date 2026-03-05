---
layout: ../../layouts/cheatlayout.astro
title: MEGAcmd
---


# MEGAcmd


## **🏴‍☠️ Ejemplo**


```bash
# Instalar en Kali/Debian 12
wget https://mega.nz/linux/repo/Debian_12/amd64/megacmd-Debian_12_amd64.deb
sudo apt install ./megacmd-Debian_12_amd64.deb

# Login seguro (modo interactivo)
mega-cmd
# > login tu_email@gmail.com
# > exit

# Sincronizar carpeta local con MEGA
mkdir -p ~/MEGA_local
mega-sync ~/MEGA_local /
```


### **📌 Descripción breve**

> MEGAcmd es el cliente de línea de comandos oficial de MEGA. Permite sincronizar carpetas, transferir archivos individuales, montar la nube como WebDAV y automatizar backups sin interfaz gráfica.

---


### **🛠 Sintaxis básica**


```bash
mega-<comando> [opciones] [argumentos]
```


---


### **⚙️ Comandos clave**


| Comando       | Descripción                       | Ejemplo                       |
| ------------- | --------------------------------- | ----------------------------- |
| `mega-login`  | Iniciar sesión                    | `mega-login email pass`       |
| `mega-sync`   | Sincronizar carpeta local ↔ cloud | `mega-sync ~/local /remoto`   |
| `mega-get`    | Descargar archivo puntual         | `mega-get /ruta/archivo.py .` |
| `mega-put`    | Subir archivo                     | `mega-put local.txt /ruta/`   |
| `mega-ls`     | Listar archivos en la nube        | `mega-ls /HTB`                |
| `mega-webdav` | Montar como WebDAV local          | `mega-webdav /`               |
| `mega-sync`   | Ver sincronizaciones activas      | `mega-sync` (sin args)        |


---


### **🚀 Ejemplos de uso**


**Login no-interactivo (limpiar historial después):**


```bash
mega-login email@gmail.com TuContraseña
history -c   # borrar contraseña del historial
```


**Sincronización multiplataforma (mismo cloud, distintos Linux):**


```bash
# En cada máquina:
mkdir -p ~/MEGA_CTF
mega-sync ~/MEGA_CTF /HTB
# Los archivos se sincronizan automáticamente entre todas
```


**Archivo** **`.megaignore`** **para excluir basura:**


```javascript
# ~/MEGA_CTF/.megaignore
__pycache__/
*.pyc
*.iso
*.vmdk
*.qcow2
rockyou.txt
.DS_Store
desktop.ini
```


---


### **📤 Salida esperada**


```plain text
# mega-sync
Syncing [/home/usuario/MEGA_CTF] to [/HTB] — Active
```


---


### **💡 Notas / Tips**

- El archivo `.megaignore` se sincroniza como cualquier archivo — editándolo en un equipo se propaga a todos
- `mega-webdav` permite montar MEGA como unidad local accesible desde cualquier app

---


### **🔗 Referencias**

- [MEGAcmd GitHub](https://github.com/meganz/MEGAcmd)
- [Descargas Linux](https://mega.nz/cmd)
