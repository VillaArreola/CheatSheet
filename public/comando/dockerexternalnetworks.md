---
layout: ../../layouts/cheatlayout.astro
title: Docker External Networks
---


# Docker External Networks


## **Ejemplo**


```bash
# Crear red externa
docker network create shared_net

# Referenciar en docker-compose.yml
networks:
  shared_net:
    external: true
```


###  **Descripción breve**

> Red Docker declarada fuera de cualquier Compose file que permite a contenedores de distintos proyectos comunicarse entre sí.

---


### **Sintaxis básica**


```yaml
services:
  miservicio:
    networks:
      - shared_net

networks:
  shared_net:
    external: true
```


---


### **Parámetros clave**


| Parámetro        | Descripción                           | Ejemplo               |
| ---------------- | ------------------------------------- | --------------------- |
| `external: true` | La red ya existe; Docker no la crea   | ver arriba            |
| `name`           | Nombre explícito si difiere del alias | `name: mi_red_global` |


---


###  **Ejemplos de uso**


**Crear la red una vez:**


```bash
docker network create shared_net
```


**Stack A — exponer servicio:**


```yaml
services:
  app_a:
    image: nginx
    networks:
      - shared_net
networks:
  shared_net:
    external: true
```


**Stack B — consumir por nombre de servicio:**


```yaml
services:
  app_b:
    image: curlimages/curl
    command: curl http://app_a
    networks:
      - shared_net
networks:
  shared_net:
    external: true
```


---


### **📤 Salida esperada**


```javascript
docker network ls
NETWORK ID     NAME         DRIVER    SCOPE
abc123def456   shared_net   bridge    local
```


---


### **💡 Notas / Tips**

- La red debe existir **antes** de `docker compose up` en cualquier stack.
- Los contenedores se llaman por **nombre de servicio**, no por IP.
- Para multi-host usar overlay networks con Docker Swarm.
- Proyectos en carpetas distintas = redes distintas por defecto; external network rompe ese aislamiento deliberadamente.

---


### **🔗 Referencias**

- [Docker Networking overview](https://docs.docker.com/network/)
- [Compose networking](https://docs.docker.com/compose/networking/)
