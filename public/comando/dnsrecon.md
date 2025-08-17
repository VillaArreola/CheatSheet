---
layout: ../../layouts/cheatlayout.astro
title: Dnsrecon
---


`dnsrecon` — Enumeración de DNS


---


### **📌 Descripción breve**

> Herramienta para enumerar registros DNS y realizar descubrimiento de subdominios. Soporta consultas directas, reversas, transfers de zona y brute force.

---


### **🛠 Sintaxis básica**


```bash
dnsrecon [opciones]
```


---


### **⚙️ Parámetros clave**


| Parámetro    | Descripción                                       | Ejemplo             |
| ------------ | ------------------------------------------------- | ------------------- |
| `-d`         | Dominio objetivo                                  | `-d ejemplo.com`    |
| `-t`         | Tipo de enumeración (`std`, `brt`, `axfr`, `goo`) | `-t brt`            |
| `-D`         | Diccionario de subdominios                        | `-D subdomains.txt` |
| `--lifetime` | Timeout de consulta                               | `--lifetime 5`      |


---


### **🚀 Ejemplos de uso**


**Enumeración estándar:**


```bash
dnsrecon -d ejemplo.com -t std
```


**Brute force de subdominios con diccionario:**


```bash
dnsrecon -d ejemplo.com -D subdomains.txt -t brt
```


**Transferencia de zona:**


```bash
dnsrecon -d ejemplo.com -t axfr
```


---


### **📤 Salida esperada**


```plain text
[*] STD: ejemplo.com NS ns1.ejemplo.com
[*] STD: ejemplo.com MX mail.ejemplo.com
[*] BRUTE: shop.ejemplo.com A 192.168.1.25
```


_(Insertar captura real si la tienes.)_


---


### **💡 Notas / Tips**

- El tipo `std` obtiene registros básicos (A, AAAA, MX, NS, TXT).
- Usar `t goo` para buscar subdominios indexados en Google.
- Con diccionarios grandes, limitar el tiempo de consulta con `-lifetime`.

---


### **🔗 Referencias**

- [Repositorio oficial](https://github.com/darkoperator/dnsrecon)
- [Documentación](https://github.com/darkoperator/dnsrecon/wiki)
