---
layout: ../../layouts/cheatlayout.astro
title: Ls 
---


# LS - listar


## 🏴‍☠️ Ejemplo


```bash
ls -la /home/usuario/documentos
```


**📌 Descripción breve**
Comando fundamental de Linux para listar archivos y directorios. Muestra contenido de directorios con información detallada sobre permisos, propietarios, tamaños y fechas de modificación.


**🛠 Sintaxis básica**


`ls [opciones] [directorio/archivo]`


**⚙️ Parámetros clave**


| Parámetro | Descripción                                   | Ejemplo  |
| --------- | --------------------------------------------- | -------- |
| `-l`      | Formato largo (permisos, propietario, tamaño) | `ls -l`  |
| `-a`      | Mostrar archivos ocultos (incluye . y ..)     | `ls -a`  |
| `-h`      | Tamaños legibles para humanos (KB, MB, GB)    | `ls -lh` |
| `-t`      | Ordenar por fecha de modificación             | `ls -lt` |
| `-r`      | Orden reverso                                 | `ls -lr` |
| `-R`      | Listado recursivo                             | `ls -R`  |


**🚀 Ejemplos de uso**

- **Listado básico:**

    ```bash
    ls
    ```

- **Listado detallado con archivos ocultos:**

    ```bash
    ls -la
    ```

- **Listado con tamaños legibles ordenado por fecha:**

    ```bash
    ls -lht
    ```

- **Listado recursivo de subdirectorios:**

    ```bash
    ls -R /var/log
    ```


**📤 Salida esperada**


```plain text
drwxr-xr-x  3 usuario usuario 4.0K ene 15 10:30 Documentos
-rw-r--r--  1 usuario usuario 1.2M ene 14 09:15 archivo.pdf
-rwx------  1 usuario usuario  256 ene 13 16:45 script.sh
```


**💡 Notas / Tips**

- Combinar `-l` y `-a` es muy común para ver todos los archivos con detalles.
- Usar `-h` con `-l` para ver tamaños en formato legible (MB, GB).
- El color en la salida suele indicar tipos de archivo (azul = directorio, verde = ejecutable).
- `ls -1` lista un archivo por línea (útil para scripts).

**🔗 Referencias**

- [Manual de ls](https://man7.org/linux/man-pages/man1/ls.1.html)
- [Guía de comandos Linux](https://linux.die.net/man/1/ls)
