---
layout: ../../layouts/cheatlayout.astro
title: venv
---


# Rclone 


## **🏴‍☠️  Ejemplo**


```bash
python -m venv
```


### **📌 Descripción breve**

> Rclone es una herramienta util par realizar copias o sincronizar archivos locales o desde la nube.

---


### **🛠 Sintaxis básica windows** 


```shell
Crear env en windows 
python -m venv name

Activar env en PS:

.venv\Scripts\Activate.ps1

Activar env en Linux:
source name/bin/activate
```


**🛠 Sintaxis básica  linux**



```shell
python -m venv name

Activar env en Linux:
source name/bin/activate
```


---


### ⚔️ Eliminar un venv


### **⚙️ Parámetros clave**


| Parámetro            | Descripción                                      | Ejemplo                   |
| -------------------- | ------------------------------------------------ | ------------------------- |
| `-listremotes`       | Lista las particones remotas                     | rclone listremotes        |
| `-config delete ''`  | Elimina el directorio deseado                    |                           |
| `-p`                 | Muestra el log del proceso                       | rclone -P                 |
| `--dry-run`          | Muestra un apreview sobre el comando a ejecutar. | rcloud   -comand —dry-run |
| `--update`           | Actualiza solo lo mas reciente                   | rclone —command —update   |


---


### **🚀 Ejemplos de uso**


**Sincronizar 2 nubes:**


```bash
rclone sync ./MisFotos gdrive:/Fotos --progress --dry-run
```


**Montar una unidad en local:**


```bash
rclone mount gdrive:/ ~/GDrive
```


Sincroniza una carpeta y elimina el origen:


```bash
rclone sync ./Documentos gdrive:/Backup/Documentos -P --delete-after
```


Sincroniza solo archivo especifico:


```bash
rclone copy ./notas gdrive:/pdfs --include "*.pdf" -P
```


Excluye archivos temporales:


```bash
rclone sync "C:\OBS" "P:\OBS" -P --exclude "*.tmp" --exclude "*.bak"
```


---


### **📤 Salida esperada**


```plain text
2025/10/09 21:16:56 NOTICE:
Transferred:       13.275 MiB / 13.275 MiB, 100%, 0 B/s, ETA -
Checks:               131 / 131, 100%, Listed 767
Transferred:          241 / 241, 100%
Elapsed time:         0.2s
```


---


### **💡 Notas / Tips**

- Antes de sincronizar, **usa** **`--dry-run`** para evitar errores fatales.
- **Programar backups automáticos** con `cron`
- Rclone puede cifrar tus datos con `rclone config` → tipo `crypt7`

---


### **🔗 Referencias**

- [Documentación](https://github.com/darkoperator/dnsrecon/wiki)
