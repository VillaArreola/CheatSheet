---
layout: ../../layouts/cheatlayout.astro
title: Docker Compose
---


# Docker Compose 


## **Ejemplo**


```bash
# V2 (correcto en Docker moderno)
docker compose up -d

# V1 (obsoleto — produce "command not found" en Docker V2)
docker-compose up -d
```


### **Descripción breve**

> Docker V2 integra Compose como plugin nativo (`docker compose` con espacio); el binario separado `docker-compose` de V1 ya no se instala por defecto. Si aparece `command not found`, instalar el plugin o corregir la sintaxis.

---


### **Sintaxis básica**


```bash
docker compose [comando] [opciones]
```


---


### **⚙️ Comandos clave**


| Comando   | Descripción                          | Ejemplo                                |
| --------- | ------------------------------------ | -------------------------------------- |
| `up -d`   | Levanta el stack en segundo plano    | `docker compose up -d`                 |
| `down`    | Detiene y elimina contenedores/redes | `docker compose down`                  |
| `logs -f` | Sigue los logs en tiempo real        | `docker compose logs -f`               |
| `ps`      | Estado de los servicios del stack    | `docker compose ps`                    |
| `restart` | Reinicia un servicio específico      | `docker compose restart wazuh-manager` |
| `pull`    | Descarga imágenes actualizadas       | `docker compose pull`                  |


---


### **Ejemplos de uso**


**Instalar el plugin si falta:**


```bash
sudo apt-get update && sudo apt-get install docker-compose-plugin
```


**Verificar versión instalada:**


```bash
docker compose version
# Docker Compose version v2.x.x
```


**Ver estado de contenedores del stack:**


```bash
docker compose ps
docker ps -a          # todos los contenedores del host
docker stats          # consumo CPU/RAM en tiempo real
```


---


### **Salida esperada**


```plain text
$ docker compose up -d
[+] Running 3/3
 ✔ Container wazuh-manager    Started
 ✔ Container wazuh-indexer    Started
 ✔ Container wazuh-dashboard  Started
```


---


### **💡 Notas / Tips**

- El warning `the attribute 'version' is obsolete` en V2 es informativo — no rompe nada; se puede eliminar la línea `version:` del YAML
- Siempre ejecutar desde el directorio que contiene `docker-compose.yml`
- `docker compose down` elimina contenedores y redes pero **no** los volúmenes; usar `down -v` para eliminar volúmenes también
- `docker compose up -d --build` fuerza rebuild de imágenes locales

---


### **🔗 Referencias**

- [Docker Compose V2 — Docs oficiales](https://docs.docker.com/compose/)
