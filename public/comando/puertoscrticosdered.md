---
layout: ../../layouts/cheatlayout.astro
title: Puertos Críticos de Red
---


## **Ejemplo**


```bash
nmap -p 22,80,443,3306,3389,5900,8080 <target>
```


### **Descripción breve**

> Referencia de puertos TCP/UDP críticos organizados por categoría. Útil para reconocimiento, hardening y análisis de exposición en redes.

---


###  **WEB**


| Puerto | Servicio | Descripción              | 80   | HTTP      | Protocolo web sin cifrado |
| ------ | -------- | ------------------------ | ---- | --------- | ------------------------- |
| 443    | HTTPS    | Web cifrada mediante TLS | 8000 | Dev web   | Entornos de prueba        |
| 8080   | HTTP alt | Proxies y aplicaciones   | 8443 | HTTPS alt | Puerto no estándar        |


---


###  **Bases de Datos**


| Puerto | Servicio | Descripción              | 1433  | MSSQL      | Base de datos Microsoft  |
| ------ | -------- | ------------------------ | ----- | ---------- | ------------------------ |
| 3306   | MySQL    | Base de datos relacional | 5432  | PostgreSQL | Base de datos relacional |
| 6379   | Redis    | Base de datos en memoria | 27017 | MongoDB    | Base de datos NoSQL      |


---


### **Acceso Remoto**


| Puerto | Servicio | Descripción                            | 22   | SSH   | Acceso remoto seguro          |
| ------ | -------- | -------------------------------------- | ---- | ----- | ----------------------------- |
| 23     | Telnet   | Acceso remoto sin cifrado (inseguro)   | 3389 | RDP   | Escritorio remoto Windows     |
| 5900   | VNC      | Control remoto gráfico multiplataforma | 5985 | WinRM | Administración remota Windows |


---


### **Infraestructura**


| Puerto | Servicio | Descripción                     | 88  | Kerberos | Autenticación centralizada |
| ------ | -------- | ------------------------------- | --- | -------- | -------------------------- |
| 139    | NetBIOS  | Servicio de red heredado        | 389 | LDAP     | Directorio (requiere TLS)  |
| 445    | SMB      | Compartición de archivos en red | 636 | LDAPS    | LDAP cifrado mediante TLS  |


---


###  **Servicios de Red**


| Puerto | Servicio | Descripción                 | 21  | FTP  | Transferencia de archivos sin cifrado |
| ------ | -------- | --------------------------- | --- | ---- | ------------------------------------- |
| 25     | SMTP     | Envío de correo electrónico | 53  | DNS  | Resolución de nombres de dominio      |
| 110    | POP3     | Recepción básica de correo  | 143 | IMAP | Gestión avanzada de correo            |


---


### **UDP Críticos**


| Puerto | Servicio | Descripción              | 53   | DNS  | Resolución de dominio |
| ------ | -------- | ------------------------ | ---- | ---- | --------------------- |
| 123    | NTP      | Sincronización de tiempo | 69   | TFTP | Transferencia simple  |
| 161    | SNMP     | Gestión de dispositivos  | 1900 | SSDP | Descubrimiento de red |


---


### **💡 Notas / Tips**

- Puerto 23 (Telnet) y 21 (FTP) transmiten credenciales en claro — evitar en producción
- Puerto 445 (SMB) es vector frecuente de ransomware
- Puerto 3389 (RDP) sufre ataques de fuerza bruta constantes — siempre detrás de VPN
- Puerto 5900 (VNC) suele quedar expuesto con autenticación débil

---


### **🔗 Referencias**

- [IANA Port Numbers](https://www.iana.org/assignments/service-names-port-numbers/)
