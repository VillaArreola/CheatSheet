---
layout: ../../layouts/cheatlayout.astro
title: dig — Consultas DNS
---


## **Ejemplo**


```bash
dig CAA dominio.com
dig TXT _dmarc.dominio.com
dig MX dominio.com
```


###  **Descripción breve**

> `dig` (Domain Information Groper) permite hacer consultas DNS directas desde la terminal. Esencial para verificar registros DNS, diagnosticar problemas de propagación y auditar configuraciones.

---


### **Sintaxis básica**


```bash
dig [tipo_registro] [dominio] [@servidor_dns_opcional]
```


---


### **Parámetros clave**


| Flag / Opción | Descripción                                         | Ejemplo                      |
| ------------- | --------------------------------------------------- | ---------------------------- |
| `A`           | Resolución IPv4 del dominio                         | `dig A dominio.com`          |
| `MX`          | Registros de correo                                 | `dig MX dominio.com`         |
| `TXT`         | Registros de texto (SPF, DKIM, DMARC, verificación) | `dig TXT dominio.com`        |
| `CAA`         | Autoridades certificadoras autorizadas              | `dig CAA dominio.com`        |
| `NS`          | Nameservers del dominio                             | `dig NS dominio.com`         |
| `-x`          | Consulta inversa (IP → hostname)                    | `dig -x 1.2.3.4`             |
| `@servidor`   | Consultar contra un DNS específico                  | `dig A dominio.com @8.8.8.8` |
| `+short`      | Salida compacta solo con el valor                   | `dig A dominio.com +short`   |


---


###  **Ejemplos de uso**


**Verificar registro CAA:**


```bash
dig CAA dominio.com
```


**Verificar DMARC:**


```bash
dig TXT _dmarc.dominio.com
```


**Verificar SPF:**


```bash
dig TXT dominio.com | grep spf
```


**Verificar MX:**


```bash
dig MX dominio.com +short
```


**Consulta inversa (IP a hostname):**


```bash
dig -x 165.227.84.14
```


**Consultar contra DNS de Google (omitiendo caché local):**


```bash
dig A dominio.com @8.8.8.8
```


---


### **📤 Salida esperada**


```plain text
$ dig CAA dominio.com +short
0 issuewild "letsencrypt.org"

$ dig TXT _dmarc.dominio.com +short
"v=DMARC1; p=none; rua=mailto:admin@dominio.com"

$ dig MX dominio.com +short
10 mx.zoho.com.
20 mx2.zoho.com.
```


---


### **💡 Notas / Tips**

- Usar `+short` para obtener solo el valor del registro, sin cabeceras.
- Consultar `@8.8.8.8` o `@1.1.1.1` para verificar propagación desde DNS públicos.
- Los registros DMARC siempre se consultan en el subdominio `_dmarc.dominio.com`.
- Los registros DKIM se consultan en `[selector]._domainkey.dominio.com`.

---


### **🔗 Referencias**

- [dig man page](https://linux.die.net/man/1/dig)
- [MXToolbox DNS Lookup](https://mxtoolbox.com/DNSLookup.aspx)
