---
layout: ../../layouts/cheatlayout.astro
title: HTTP Status Codes
---


##  **Ejemplo**


```bash
curl -o /dev/null -s -w "%{http_code}" https://example.com
```


### **Descripción**

> Los códigos de estado HTTP son respuestas numéricas de 3 dígitos que el servidor envía al cliente para indicar el resultado de una solicitud. Se agrupan en 5 familias según el primer dígito.

---


### **Sintaxis básica**


```bash
HTTP/1.1 <código> <mensaje>
```


---


###  **Códigos por categoría**


**1XX — Informativos**


| Código | Nombre              | Descripción                                                           |
| ------ | ------------------- | --------------------------------------------------------------------- |
| `100`  | Continue            | El servidor recibió la solicitud inicial; el cliente puede continuar. |
| `101`  | Switching Protocols | El servidor acepta cambiar de protocolo (ej. WebSocket).              |


**2XX — Éxito**


| Código | Nombre  | Descripción                                      |
| ------ | ------- | ------------------------------------------------ |
| `200`  | OK      | La solicitud fue exitosa.                        |
| `201`  | Created | Recurso creado correctamente (ej. tras un POST). |


**3XX — Redirección**


| Código | Nombre            | Descripción                                     |
| ------ | ----------------- | ----------------------------------------------- |
| `301`  | Moved Permanently | El recurso se movió definitivamente a otra URL. |
| `302`  | Found             | Redirección temporal a otra URL.                |


**4XX — Error del cliente**


| Código | Nombre             | Descripción                                                                  |
| ------ | ------------------ | ---------------------------------------------------------------------------- |
| `400`  | Bad Request        | La solicitud tiene sintaxis incorrecta o es inválida.                        |
| `401`  | Unauthorized       | Se requiere autenticación para acceder al recurso.                           |
| `403`  | Forbidden          | El servidor rechaza la solicitud aunque el cliente esté autenticado.         |
| `404`  | Not Found          | El recurso solicitado no existe en el servidor.                              |
| `405`  | Method Not Allowed | El método HTTP usado no está permitido para ese endpoint.                    |
| `429`  | Too Many Requests  | El cliente ha enviado demasiadas solicitudes en poco tiempo (rate limiting). |


**5XX — Error del servidor**


| Código | Nombre                | Descripción                                                                 |
| ------ | --------------------- | --------------------------------------------------------------------------- |
| `500`  | Internal Server Error | Error genérico en el servidor; algo falló internamente.                     |
| `502`  | Bad Gateway           | El servidor actúa como proxy y recibió una respuesta inválida del upstream. |
| `503`  | Service Unavailable   | El servidor no puede manejar solicitudes (sobrecarga o mantenimiento).      |
| `504`  | Gateway Timeout       | El servidor proxy no recibió respuesta a tiempo del upstream.               |


---


### **Ejemplos de uso**


**Verificar el código de respuesta de una URL:**


```bash
curl -o /dev/null -s -w "%{http_code}" https://example.com
```


**Ver cabeceras completas de respuesta:**


```bash
curl -I https://example.com
```


**Seguir redirecciones automáticamente:**


```bash
curl -L https://example.com
```


---


### **📤 Salida esperada**


```plain text
HTTP/2 200
content-type: text/html; charset=UTF-8
date: Mon, 13 Apr 2026 00:00:00 GMT
```


---


### **💡 Notas / Tips**

- `401` = sin autenticar; `403` = autenticado pero sin permisos.
- `429` se usa para detectar rate limiting en fuzzing/escaneo web.
- `502`/`504` en proxies inversos suelen indicar que el backend está caído.
- En pentesting, un `403` a veces puede bypassearse cambiando headers como `X-Forwarded-For`.
- El código `200` en un `OPTIONS` revela métodos HTTP permitidos por el servidor.

---


### **🔗 Referencias**

- [MDN Web Docs — HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [RFC 9110 — HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110)
