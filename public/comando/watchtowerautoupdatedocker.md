---
layout: ../../layouts/cheatlayout.astro
title: Watchtower — Auto-update Docker
---


## **🏴‍☠️ Ejemplo**


```bash
docker run -d \
  --name watchtower \
  -v /var/run/docker.sock:/var/run/docker.sock \
  containrrr/watchtower --interval 86400
```


### **📌 Descripción breve**

> Watchtower observa los contenedores en ejecución y los actualiza automáticamente cuando detecta una nueva imagen en el registry. Equivale a actualizaciones automáticas, pero para tu stack Docker.

---


### **🛠 Sintaxis básica (Docker Compose)**


```yaml
services:
  watchtower:
    image: containrrr/watchtower
    restart: unless-stopped
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    command: --interval 86400
```


---


### **⚙️ Parámetros clave**


| Flag                | Descripción                                                                        | Ejemplo                  |
| ------------------- | ---------------------------------------------------------------------------------- | ------------------------ |
| `--interval <s>`    | Segundos entre cada chequeo                                                        | `--interval 86400` (24h) |
| `--cleanup`         | Elimina imágenes antiguas tras actualizar                                          | `--cleanup`              |
| `--monitor-only`    | Solo notifica, no actualiza                                                        | `--monitor-only`         |
| `--include-stopped` | Incluye contenedores detenidos                                                     | `--include-stopped`      |
| `--label-enable`    | Solo actualiza contenedores con label `com.centurylinklabs.watchtower.enable=true` | `--label-enable`         |


---


### **🚀 Ejemplos de uso**


**Actualizar solo contenedores etiquetados:**


```yaml
services:
  watchtower:
    image: containrrr/watchtower
    command: --label-enable --cleanup --interval 3600
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock

  mi_app:
    image: nginx
    labels:
      - "com.centurylinklabs.watchtower.enable=true"
```


**Notificación por email al actualizar:**


```yaml
environment:
  - WATCHTOWER_NOTIFICATIONS=email
  - WATCHTOWER_NOTIFICATION_EMAIL_FROM=from@ejemplo.com
  - WATCHTOWER_NOTIFICATION_EMAIL_TO=to@ejemplo.com
  - WATCHTOWER_NOTIFICATION_EMAIL_SERVER=smtp.ejemplo.com
```


---


### **📤 Salida esperada**


```javascript
time="..." level=info msg="Found new n8nio/n8n:latest image"
time="..." level=info msg="Stopping /n8n"
time="..." level=info msg="Creating /n8n"
```


---


### **💡 Notas / Tips**

- Montar `/var/run/docker.sock` le da acceso total al daemon de Docker: **no exponer en contenedores públicos**.
- En producción crítica usar `--monitor-only` + pipeline CI/CD para actualizaciones controladas.
- Combinar con `--cleanup` evita que el disco se llene de imágenes antiguas.

---


### **🔗 Referencias**

- [Watchtower docs](https://containrrr.dev/watchtower/)
- [Docker Hub](https://hub.docker.com/r/containrrr/watchtower)
