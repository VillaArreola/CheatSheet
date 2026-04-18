---
layout: ../../layouts/cheatlayout.astro
title: Venv
---


###  **Descripción breve**

> `venv` es el módulo estándar de Python para crear entornos virtuales aislados por proyecto.

---


###  **Crear venv**


```bash
# Windows / Linux / macOS
python -m venv .venv
```


---


###  **Activar venv**


```bash
# Windows (PowerShell)
.venv\Scripts\Activate.ps1

# Windows (CMD)
.venv\Scripts\activate.bat

# Linux / macOS (bash/zsh)
source .venv/bin/activate
```


---


### **Desactivar**


```bash
deactivate
```


---


### **Instalar dependencias (dentro del venv)**


```bash
python -m pip install -U pip
pip install requests
pip freeze > requirements.txt
pip install -r requirements.txt
```


---


### **Eliminar un venv**

> Solo borra la carpeta del entorno (ej. `.venv/`).

```bash
# Linux / macOS
rm -rf .venv

# Windows (PowerShell)
Remove-Item -Recurse -Force .venv
```


---


### **💡 Notas / Tips**

- Usa el nombre `.venv` por convención y agrégalo a tu `.gitignore`.
- Si PowerShell bloquea scripts, ejecuta (temporalmente):

    ```powershell
    Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
    ```

- Confirma que estás en el venv:

    ```bash
    which python  # Linux/macOS
    where python  # Windows
    ```


---


### **🔗 Referencias**

- [https://docs.python.org/3/library/venv.html](https://docs.python.org/3/library/venv.html)
