---
layout: ../../layouts/cheatlayout.astro
title: Rclone
---


# Rclone 


## **🏴‍☠️  Ejemplo**


```bash
rclone sync "source"   "Destino\"   -P  --exclude ""
```


### **📌 Descripción breve**

> Rclone es una herramienta util par realizar copias o sincronizar archivos locales o desde la nube.

---


### **🛠 Sintaxis básica**


```shell
rclone [comando] [origen] [destino] [opciones]
```


---


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


### **📤 Escript en Python**


```plain text
import subprocess
import datetime
import os
import sys

# === CONFIGURACIÓN ===
source = r"C:/Users/villa/Documents/OBS"
dest_Local = r"X:/OBS"
dest_pcloud = r"P:/OBS"
log_dir = r"C:/Users/villa/Documents"
log_filename = "rclone-sync.log"
log_path = os.path.join(log_dir, log_filename)

Ignore_file = os.path.join(source, ".rcloneignore")

# === CREAR DIRECTORIO DE LOGS ===
if not os.path.exists(log_dir):
    os.makedirs(log_dir, exist_ok=True)
    print(f"📁 Created log directory: {log_dir}")

# === VERIFICAR RUTAS ===
if not os.path.exists(source):
    print(f"❌ Source path not found: {source}")
    sys.exit(1)


dest = ""
for _ in range(3):
    case = input("Select destination (1 for Local, 2 for pCloud): ")
    if case == "1":
        dest = dest_Local
        break
    elif case == "2":
        dest = dest_pcloud
        break
    else:
        print(" ⚠️ Selecciona una opción válida. ⚠️ \n")

if not os.path.exists(dest):
    print(f"❌ Destination path not found: {dest} ↗️   Verifica que la unidad esté montada.")
    sys.exit(1)


dry_run = input("Run in dry-run mode? (y/n): ").strip().lower() == 'y'

# === COMANDO RCLONE ===
command = [
    "rclone", "sync", source, dest,
    "--dry-run" if dry_run else None,
    "--progress",
    "--stats", "1s",
    "--exclude-from", Ignore_file,
    "--log-file", log_path,
    "--log-level", "INFO"

]

# === EJECUCIÓN ===
print(f"\n🔄 Starting sync from {source} → {dest}\n")



try:
    subprocess.run(command, check=True)
    status = "✅ Sync completed successfully!"
    print(status)
except subprocess.CalledProcessError as e:
    status = f"❌ Sync failed: {e}"
    print(status)

# === LOG ===
with open(log_path, "a", encoding="utf-8") as log:
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    log.write(f"\n[{timestamp}] {status}\n")

print(f"🪄 Log saved to: {log_path}")
```


---


### **💡 Notas / Tips**

- Antes de sincronizar, **usa** **`--dry-run`** para evitar errores fatales.
- **Programar backups automáticos** con `cron`
- Rclone puede cifrar tus datos con `rclone config` → tipo `crypt7`

---


### **🔗 Referencias**

- [Documentación](https://github.com/darkoperator/dnsrecon/wiki)
