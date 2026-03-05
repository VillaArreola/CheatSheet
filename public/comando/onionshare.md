---
layout: ../../layouts/cheatlayout.astro
title: OnionShare
---


# OnionShare


## **🏴‍☠️ Ejemplo**


```bash
# En Windows/Mac/Linux:
# 1. Abrir OnionShare → arrastrar archivo
# 2. Copiar dirección .onion generada
# 3. En Tor Browser: pegar la dirección .onion → descargar
# 4. Cerrar OnionShare → servidor desaparece
```


### **📌 Descripción breve**

> OnionShare crea un servidor .onion temporal para compartir archivos de forma P2P sobre Tor. No requiere cuentas, no deja rastro, y el servidor desaparece al cerrarlo.

---


### **🛠 Sintaxis básica**


```bash
# Flujo completo
Emisor: OnionShare → arrastrar archivo → copiar URL .onion
Receptor: Tor Browser → pegar URL .onion → descargar
```


---


### **⚙️ Parámetros clave**


| Característica    | Descripción                                  |
| ----------------- | -------------------------------------------- |
| Servidor temporal | Existe solo mientras OnionShare está abierto |
| P2P sobre Tor     | Sin servidores intermedios, E2EE             |
| Sin registro      | No requiere cuenta ni email                  |
| Multiplataforma   | Windows, macOS, Linux                        |


---


### **🚀 Ejemplos de uso**


**Pasar archivos de Windows a Whonix:**


```bash
# En Windows: abrir OnionShare → arrastrar el archivo
# OnionShare genera: http://ejemplo123abc.onion/descarga
# En Whonix Workstation → Tor Browser → pegar URL
```


**Modo recepción (recibir archivos):**


```bash
# OnionShare → modo "Receive" → compartir URL .onion con emisor
```


---


### **📤 Salida esperada**


```plain text
OnionShare genera URL tipo:
abcdef1234567890.onion
Archivo disponible hasta cerrar OnionShare
```


---


### **💡 Notas / Tips**

- El servidor .onion es E2EE: el tráfico nunca sale a internet abierto

---


### **🔗 Referencias**

- [OnionShare oficial](https://onionshare.org/)
- [Documentación](https://docs.onionshare.org/)
