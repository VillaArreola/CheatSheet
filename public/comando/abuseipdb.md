---
layout: ../../layouts/cheatlayout.astro
title: AbuseIPDB
---


##  **Ejemplo**


```bash
curl -G https://api.abuseipdb.com/api/v2/check \
  --data-urlencode "ipAddress=165.227.84.14" \
  -H "Key: TU_API_KEY" \
  -H "Accept: application/json"
```


### **Descripción breve**

> AbuseIPDB es una base de datos colaborativa donde la comunidad reporta IPs maliciosas. Permite consultar el historial de reportes de cualquier IP pública, ver su Confidence Score (0-100%) y los tipos de abuso detectados. Es el primer paso en cualquier flujo de CTI para evaluar reputación.

---


###  **Sintaxis básica**


```bash
# Consulta manual en la web
https://www.abuseipdb.com/check/IP_AQUI

# Consulta via API
curl -G https://api.abuseipdb.com/api/v2/check \
  --data-urlencode "ipAddress=IP_AQUI" \
  -d maxAgeInDays=90 \
  -H "Key: TU_API_KEY" \
  -H "Accept: application/json"
```


---


### **Parámetros clave**


| Parámetro      | Descripción                              | Ejemplo                                |
| -------------- | ---------------------------------------- | -------------------------------------- |
| `ipAddress`    | IP a consultar                           | `--data-urlencode "ipAddress=1.2.3.4"` |
| `maxAgeInDays` | Rango de días para reportes (default 30) | `-d maxAgeInDays=90`                   |
| `verbose`      | Muestra reportes individuales            | `-d verbose`                           |
| `Key`          | API key del header                       | `-H "Key: abc123"`                     |


---


###  **Ejemplos de uso**


**Caso 1: Consulta rápida en web**


```bash
# Abrir en navegador:
https://www.abuseipdb.com/check/165.227.84.14
# Ver: Confidence Score, ISP, número de reportes, tipos de abuso
```


**Caso 2: Consulta API con reportes detallados**


```bash
curl -G https://api.abuseipdb.com/api/v2/check \
  --data-urlencode "ipAddress=165.227.84.14" \
  -d maxAgeInDays=90 \
  -d verbose \
  -H "Key: TU_API_KEY" \
  -H "Accept: application/json" | jq .
```


---


### **Salida esperada**


```plain text
{
  "data": {
    "ipAddress": "165.227.84.14",
    "isPublic": true,
    "ipVersion": 4,
    "isWhitelisted": false,
    "abuseConfidenceScore": 100,
    "countryCode": "US",
    "isp": "DigitalOcean, LLC",
    "domain": "digitalocean.com",
    "totalReports": 2429,
    "numDistinctUsers": 503,
    "lastReportedAt": "2024-xx-xxTxx:xx:xxZ"
  }
}
```


---


### **💡 Notas / Tips**

- Confidence Score 100% con miles de reportes no siempre significa ataque dirigido; puede ser un scanner legítimo (como LeakIX) muy reportado
- Revisar el hostname de la IP en Shodan para confirmar si es un servicio conocido de investigación
- Los tipos de abuso más comunes: Port Scan, Hacking, Web App Attack, Brute-Force
- Integrarlo en scripts de monitoreo para alertas automáticas sobre IPs en tus logs
- API gratuita disponible con registro; límite de 1000 consultas/día en plan free

---


### **🔗 Referencias**

- [AbuseIPDB](https://www.abuseipdb.com/)
- [Documentación API](https://docs.abuseipdb.com/)
- [Registro para API Key](https://www.abuseipdb.com/register)
