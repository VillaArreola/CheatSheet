---
layout: ../../layouts/cheatlayout.astro
title: Google Dorking
---


# **Google Dorking** — Búsqueda Avanzada


##  **Ejemplo**


```bash
"incident report" filetype:pdf site:av-test.org
```


### **Descripción breve**

> Las búsquedas de Google Dorking usan operadores para indicar donde buscar en sitios públicos pero no visibles fácilmente.

---


### **Sintaxis básica**


```bash
"Busqueda" > Coincidencia exacta de la frase
site:site.com > Busqueda unicamente en el dominio seleccionado.
```


---


###  **Parámetros clave**


| Parámetro | Descripción                                                        | Ejemplo                                        |
| --------- | ------------------------------------------------------------------ | ---------------------------------------------- |
| “  ”      | Búsqueda solo de estas palabras                                    | “Computación cuántica”                         |
| site:     | Busque da en el sitio deseado                                      | site:[gob.mx](http://gob.mx/)                  |
| filetype: | Tipos de archivos especificos                                      | filetype:xls “”Registro de compras”            |
| intitle:  | Incluye busquedas solo si se encuentran en el titulo de la pagina. | intitle: “administration”                      |
| inurl:    | Incluye busquedas solo si se encuentran el la url                  | inurl: “manzanas”                              |
| -         | Excluye palabras en la búsqueda                                    | “Eduardo Rodriguez” -facebook                  |
| or        | una palabra u otra                                                 | “Machine learnig” or “Aprendizaje automatico”  |
| and       | La busqueda debe tener las 2 palabras                              | “Machine learnig” and “Aprendizaje automatico” |
|           |                                                                    |                                                |


---


###  **Ejemplos de uso**


**Puedes buscar por palabras clave en algún sitio:**


```bash
site:facebook.com "Datos Robados"
```


**Busqueda por número de teléfono:**


```bash
"445 118 4920" OR "+524451184920" OR "4451184920"
```


**Búsqueda con condicionales:**


```bash
site:twitter.com OR site:x.com "4451184920" OR "+52524451184920"
```


Dorks para documentos y archivos expuestos (PDF, XLS, DOC 


```bash
filetype:pdf "numero" OR "+52 numeor"
filetype:xls OR filetype:xlsx "Numeor" "Puebla" OR "CDMX"
filetype:doc OR filetype:docx intext:"Numeor" "keyW" OR "keyW"

intext:"TU_NÚMERO" filetype:pdf site:.mx
```


Dorks combinados avanzados


```bash
("445 118 4920" OR "+524451184920" OR "4451184920" OR "+52 445 118 4920") ("Lugar 1" OR "Lugar 2" OR "Puebla" OR "Key 1" OR "KEy 2")
site:facebook.com OR site:mercadolibre.com.mx OR site:olx.com.mx "445 118 4920"
intext:"445 118 4920" (WhatsApp OR celular OR teléfono OR contacto)
"445 118 4920" (RFC OR CURP OR INE) filetype:pdf OR filetype:jpg
```


---


### **💡 Notas / Tips**

- **Legal/ético:** úsalo solo en activos propios o con permiso.
- **Reduce ruido:** combina `site:` + `filetype:` + una frase exacta entre comillas.

---

