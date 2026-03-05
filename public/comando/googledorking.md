---
layout: ../../layouts/cheatlayout.astro
title: Google Dorking
---


# **Google Dorking** — Busqueda Avanzada


## **🏴‍☠️  Ejemplo**


```bash
"incident report" filetype:pdf site:av-test.org
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
| site:     | Busque da en el sitio deseado                                      | site:[gob.mx](http://gob.mx/)                  |
| filetype: | Tipos de archivos especificos                                      | filetype:xls “”Registro de compras”            |
| intitle:  | Incluye busquedas solo si se encuentran en el titulo de la pagina. | intitle: “administration”                      |
| inurl:    | Incluye busquedas solo si se encuentran el la url                  | inurl: “manzanas”                              |
| -         | Excluye palabras en la búsqueda                                    | “Eduardo Rodriguez” -facebook                  |
| or        | una palabra u otra                                                 | “Machine learnig” or “Aprendizaje automatico”  |
| and       | La busqueda debe tener las 2 palabras                              | “Machine learnig” and “Aprendizaje automatico” |
|           |                                                                    |                                                |


---


### **🚀 Ejemplos de uso**


### Ejemplo real (login expuesto en un dominio)


```bash
intitle:"index of" "login" site:example.com
Brute force de subdominios con diccionario:
```


---


### **💡 Notas / Tips**

- **Legal/ético:** úsalo solo en activos propios o con permiso.
- **Reduce ruido:** combina `site:` + `filetype:` + una frase exacta entre comillas.

---

