---
layout: ../../layouts/cheatlayout.astro
title: Nmap
---


# Nmap


## **🖊️ Ejemplo**


```bash
nmap -sC -sV -oN scan.txt 192.168.1.0/24
```


### **📌 Descripción**

> Nmap (Network Mapper) es una herramienta open source para exploración de redes y auditoría de seguridad. Permite descubrir hosts activos, puertos abiertos, servicios en ejecución y sistema operativo.

---


### **🛠 Sintaxis básica**


```bash
nmap [opciones] <target>
# target puede ser IP, rango CIDR, hostname o archivo
```


---


### **⚙️ Parámetros clave**


| Parámetro  | Descripción                                     | Ejemplo                       |
| ---------- | ----------------------------------------------- | ----------------------------- |
| `-sC`      | Scripts NSE por defecto                         | `nmap -sC <target>`           |
| `-sV`      | Detecta versión de servicios                    | `nmap -sV <target>`           |
| `-sS`      | SYN scan (stealth, requiere root)               | `sudo nmap -sS <target>`      |
| `-sU`      | Escaneo UDP                                     | `sudo nmap -sU <target>`      |
| `-p-`      | Escanear todos los 65535 puertos                | `nmap -p- <target>`           |
| `-p`       | Puertos específicos o rango                     | `nmap -p 22,80,443 <target>`  |
| `-O`       | Detección de OS (requiere root)                 | `sudo nmap -O <target>`       |
| `-A`       | Aggressive: OS + versión + scripts + traceroute | `nmap -A <target>`            |
| `-oN`      | Output en formato normal                        | `nmap -oN out.txt <target>`   |
| `-oG`      | Output grepable                                 | `nmap -oG out.gnmap <target>` |
| `--script` | Ejecutar script NSE específico                  | `nmap --script vuln <target>` |
| `-T4`      | Velocidad agresiva (0=lento, 5=máximo)          | `nmap -T4 <target>`           |
| `-Pn`      | Sin ping — asume host activo                    | `nmap -Pn <target>`           |
| `-n`       | Sin resolución DNS                              | `nmap -n <target>`            |


---


### **🚀 Ejemplos de uso**


**Escaneo rápido con scripts y versiones:**


```bash
nmap -sC -sV -oN initial.txt <target>
```


**Todos los puertos (lento pero completo):**


```bash
nmap -p- -sC -sV -oN full.txt <target>
```


**UDP top ports:**


```bash
sudo nmap -sU -sC -sV --top-ports 200 -oN udp.txt <target>
```


**Detección de vulnerabilidades:**


```bash
nmap --script vuln -oN vuln.txt <target>
```


**Escaneo de red completa:**


```bash
nmap -sn 192.168.1.0/24   # ping sweep — solo descubre hosts
```


---


### **📤 Salida esperada**


```plain text
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 8.9p1
80/tcp open  http    Apache httpd 2.4.52
```


---


### **💡 Notas / Tips**

- **Siempre usar Nmap en Linux** — Windows limita Raw Sockets (incluso con Npcap). Los escaneos `-sS` y `-O` fallan o son inestables en Windows.
- `/24` = tu red doméstica (256 IPs). Evita `/4` o rangos amplios sin permiso — escanear millones de IPs es ilegal.
- Combina `-p-` con `-T4` para rapidez: `nmap -p- -T4 -sC -sV <target>`
- Para CTF: primero `nmap -p-` para descubrir todos los puertos, luego `-sC -sV` solo en los abiertos.
- Output `-oA nombre` genera los 3 formatos a la vez (.nmap, .gnmap, .xml)

---


### **🔗 Referencias**

- [Documentación oficial](https://nmap.org/book/man.html)
- [NSE Scripts](https://nmap.org/nsedoc/)
