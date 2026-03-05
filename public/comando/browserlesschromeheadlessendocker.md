---
layout: ../../layouts/cheatlayout.astro
title: Browserless — Chrome Headless en Docker
---


## **🏴‍☠️ Ejemplo**


```bash
docker run -p 3000:3000 ghcr.io/browserless/chromium
```


### **📌 Descripción breve**

> Expone una API REST y WebSocket de Puppeteer/Playwright sobre Chrome sin interfaz gráfica. Permite hacer scraping de páginas que renderizan JavaScript, capturar screenshots, generar PDFs, y ejecutar scripts de automatización del navegador.

---


### **🛠 Docker Compose**


```yaml
services:
  browserless:
    image: ghcr.io/browserless/chromium
    restart: unless-stopped
    ports:
      - "3000:3000"
    environment:
      - TOKEN=${BROWSERLESS_TOKEN}  # opcional pero recomendado
      - CONCURRENT=5                # sesiones paralelas máximas
      - TIMEOUT=30000               # timeout por sesión (ms)
```


---


### **⚙️ Endpoints principales**


| Endpoint         | Descripción                                |
| ---------------- | ------------------------------------------ |
| `/screenshot`    | Captura PNG/JPEG de una URL                |
| `/pdf`           | Genera PDF de una URL                      |
| `/content`       | Devuelve el HTML renderizado (post-JS)     |
| `/scrape`        | Extrae elementos del DOM por selector CSS  |
| `ws://host:3000` | WebSocket para Puppeteer/Playwright remoto |


---


### **🚀 Ejemplos de uso**


**Screenshot de una URL:**


```bash
curl -X POST http://localhost:3000/screenshot \
  -H 'Content-Type: application/json' \
  -d '{"url": "https://example.com"}' \
  --output screenshot.png
```


**Extraer contenido HTML renderizado:**


```bash
curl -X POST http://localhost:3000/content \
  -H 'Content-Type: application/json' \
  -d '{"url": "https://spa-app.com"}'
```


**Scrape por selector CSS:**


```bash
curl -X POST http://localhost:3000/scrape \
  -H 'Content-Type: application/json' \
  -d '{
    "url": "https://tienda.com/productos",
    "elements": [{"selector": ".precio"}]
  }'
```


**Puppeteer remoto (Node.js):**


```javascript
const browser = await puppeteer.connect({
  browserWSEndpoint: 'ws://localhost:3000?token=MI_TOKEN'
});
```


---


### **💡 Notas / Tips**

- n8n no interpreta JavaScript por sí solo: para scraping de SPAs o páginas con JS, Browserless es el complemento estándar.
- Usar en la misma red Docker que n8n y llamarlo por nombre de servicio.
- `CONCURRENT=5` limita sesiones simultáneas para proteger la RAM del servidor.
- Alternativa: **Playwright** directo en contenedor propio si se necesita mayor control.

---


### **🔗 Referencias**

- [Browserless docs](https://docs.browserless.io/)
- [GitHub](https://github.com/browserless/browserless)
