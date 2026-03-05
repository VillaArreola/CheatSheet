---
layout: ../../layouts/cheatlayout.astro
title: Win-Kex
---


# Win-Kex


## **🏴‍☠️ Ejemplo**


```bash
# Instalar
sudo apt install kali-win-kex

# Iniciar en modo ventana
kex --win -s

# Iniciar en modo pantalla completa (seamless)
kex --sl -s

# Iniciar en modo ESM (Enhanced Session Mode, más rápido)
kex --esm --ip -s
```


### **📌 Descripción breve**

> Win-Kex proporciona un entorno de escritorio Kali completo dentro de WSL2, con tres modos de visualización: ventana dedicada, seamless integrado en Windows o Enhanced Session.

---


### **🛠 Sintaxis básica**


```bash
kex [modo] [opciones]
```


---


### **⚙️ Modos de Win-Kex**


| Modo             | Flag    | Descripción                                     |
| ---------------- | ------- | ----------------------------------------------- |
| Window           | `--win` | Kali en ventana separada (VNC)                  |
| Seamless         | `--sl`  | Apps Kali integradas en barra de tareas Windows |
| Enhanced Session | `--esm` | Via RDP, soporta audio, portapapeles y USB      |


---


### **🚀 Ejemplos de uso**


**Abrir Firefox en WSL sin Win-Kex (WSLg nativo, Windows 11):**


```bash
sudo apt install firefox-esr -y
firefox  # abre ventana nativa si WSLg está activo
```


**Abrir escritorio completo Kali con Win-Kex:**


```bash
kex --win -s
# Conectarse con VNC viewer a localhost:5901
# Password por defecto: kex
```


**Detener el servidor Kex:**


```bash
kex stop
```


---


### **📤 Salida esperada**


```plain text
$ kex --win -s
Starting Win-KeX server...
Win-KeX is now running at localhost:5901
```


---


### **💡 Notas / Tips**

- En Windows 11 actualizado, WSLg permite abrir apps gráficas individuales sin necesidad de Win-Kex
- Win-Kex es necesario para escritorio completo o si WSLg no está disponible (Windows 10)
- Para web pentesting (Burp, Firefox, SQLMap) suele bastar con WSLg + apps individuales
- Para configurar FoxyProxy + Burp: instalar Firefox ESR y apuntar proxy a `127.0.0.1:8080`

---


### **🔗 Referencias**

- [Win-Kex Kali Docs](https://www.kali.org/docs/wsl/win-kex/)
- [WSLg GitHub](https://github.com/microsoft/wslg)
