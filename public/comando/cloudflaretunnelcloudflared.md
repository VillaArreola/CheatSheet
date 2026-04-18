---
layout: ../../layouts/cheatlayout.astro
title: Cloudflare Tunnel (cloudflared)
---


## **🏴‍☠️ Ejemplo**


```bash
cloudflared tunnel run mi-tunnel
```


### **Descripción breve**

> El servidor abre una conexión saliente persistente hacia Cloudflare. El tráfico entra por Cloudflare y regresa por ese túnel al servicio local. No se exponen puertos en el firewall.

---


### **Sintaxis básica**


```bash
cloudflared tunnel login          # Autenticar (genera cert.pem)
cloudflared tunnel create <n>     # Crear túnel + credencial JSON
cloudflared tunnel route dns <n> <sub.dom.com>  # CNAME en Cloudflare DNS
cloudflared tunnel run <n>        # Levantar túnel
```


---


###  **Parámetros clave**


| Comando      | Descripción                                 |
| ------------ | ------------------------------------------- |
| `login`      | Abre browser para autenticar con Cloudflare |
| `create <n>` | Crea túnel y genera credencial JSON         |
| `route dns`  | Crea CNAME en zona DNS de Cloudflare        |
| `run <n>`    | Proceso persistente que mantiene el túnel   |


---


###  **Ejemplos de uso**


**Docker Compose con token:**


```yaml
services:
  cloudflared:
    image: cloudflare/cloudflared:latest
    restart: unless-stopped
    command: tunnel --no-autoupdate run
    environment:
      - TUNNEL_TOKEN=${CLOUDFLARE_TUNNEL_TOKEN}
```


**Config file (****`~/.cloudflared/config.yml`****):**


```yaml
tunnel: <TUNNEL_ID>
credentials-file: /root/.cloudflared/<TUNNEL_ID>.json
ingress:
  - hostname: app.dominio.com
    service: http://localhost:8080
  - service: http_status:404
```


---


### **Salida esperada**


```javascript
INF Connection registered with protocol: quic
INF Registered tunnel connection connIndex=0
```


---


### **💡 Notas / Tips**

- Firewall puede estar **completamente cerrado** (sin puertos 80/443 expuestos).
- Al rotar entre nubes solo cambia la IP interna; el CNAME de Cloudflare permanece igual.
- Con `TUNNEL_TOKEN` (dashboard CF) no necesitas montar el JSON de credenciales.
- No actives el proxy naranja (nube naranja) sobre el subdominio del túnel; ya está implícito.

---


### **🔗 Referencias**

- [Cloudflare Tunnel docs](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/)
- [cloudflared Docker Hub](https://hub.docker.com/r/cloudflare/cloudflared)
