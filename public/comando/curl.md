---
layout: ../../layouts/cheatlayout.astro
title: Curl
---


# Uso de comando Curl


## **🏴‍☠️  Ejemplo**


```bash
curl -v http://10.129.234.57:8080
```


### **📌 Descripción breve**

> Las busquedas de gogole dorking usan operadores para indicar donde buscar en sitios publicos pero no visibles dfacilmete.

---


### **🛠 Sintaxis básica**


```bash
"Busqueda" > Coincidencia exacta de la frase
site:site.com > Busqueda unicamente en el dominio seleccionado.
```


---


### **⚙️ Parámetros clave**


| Parámetro | Descripción                                                        | Ejemplo                                        |
| --------- | ------------------------------------------------------------------ | ---------------------------------------------- |
| “  ”      | Búsqueda solo de estas palabras                                    | “Computación cuántica”                         |
| site:     | Busque da en el sitio deseado                                      | site:gob.mx                                    |
| filetype: | Tipos de archivos especificos                                      | filetype:xls “”Registro de compras”            |
| intitle:  | Incluye busquedas solo si se encuentran en el titulo de la pagina. | intitle: “administration”                      |
| inurl:    | Incluye busquedas solo si se encuentran el la url                  | inurl: “manzanas”                              |
| -         | Excluye palabras en la búsqueda                                    | “Eduardo Rodriguez” -facebook                  |
| or        | una palabra u otra                                                 | “Machine learnig” or “Aprendizaje automatico”  |
| and       | La busqueda debe tener las 2 palabras                              | “Machine learnig” and “Aprendizaje automatico” |
|           |                                                                    |                                                |


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
