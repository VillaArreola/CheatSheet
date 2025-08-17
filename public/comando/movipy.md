---
layout: ../../layouts/cheatlayout.astro
title: movipy
---


# 🎬 Guía Completa de Configuración MoviePy


---


## 📋 Requisitos Previos


### Herramientas Necesarias

- **Python 3.11** (muy recomendado para máxima estabilidad)
- PowerShell o CMD en Windows

### Enlaces Útiles

- [Descargar Python 3.11](https://www.python.org/downloads/)

---


## 🔧 Configuración Inicial


### 1. Verificar/Instalar Python 3.11


```shell
# Verificar versión actual
python --version
```

> 💡 Nota: Si no tienes Python 3.11, descárgalo desde el enlace oficial

### 2. Limpiar Entorno Anterior


### Desactivar entorno actual


```shell
deactivate
```


### Eliminar entornos virtuales previos


```powershell
# En PowerShell
Remove-Item -Recurse -Force .\env\
Remove-Item -Recurse -Force .\.venv\
```


### 3. Crear Nuevo Entorno Virtual


```shell
# Opción 1: Si py funciona con versiones
py -3.11 -m venv env

# Opción 2: Si python3.11 está en PATH
python3.11 -m venv env

# Opción 3: Si solo tienes python
python -m venv env
```


### 4. Activar Entorno Virtual


```powershell
# PowerShell
.\env\Scripts\Activate.ps1

# CMD
.\env\Scripts\activate.bat

# Linux/Mac
source env/bin/activate
```

> ✅ Verificación: Tu prompt debe cambiar a (env) PS X:\....

---


## 📦 Instalación de Dependencias


### 1. Actualizar Herramientas Base


```shell
python -m pip install --upgrade pip setuptools wheel
```


### 2. Instalar MoviePy y Dependencias


### Comando Recomendado


```shell
pip install "moviepy<2" imageio==2.31.1 imageio-ffmpeg==0.4.8 numpy==1.24.3 decorator==4.4.2 proglog==0.1.10 tqdm==4.66.1 pillow==9.5.0
```


### Si hay errores SSL (solo desarrollo local)


```shell
pip install "moviepy<2" imageio==2.31.1 imageio-ffmpeg==0.4.8 numpy==1.24.3 decorator==4.4.2 proglog==0.1.10 tqdm==4.66.1 pillow==9.5.0 --trusted-host pypi.org --trusted-host files.pythonhosted.org --cert ""
```


### 3. Verificar Instalación


```shell
python -c "from moviepy.editor import *; print('✔ MoviePy funcionando correctamente')"
```


**Resultado esperado:** `✔ MoviePy funcionando correctamente`


---


## 📁 Estructura del Proyecto


### Organización Recomendada


```plain text
Capitulo5/
├── moviepy/
│   ├── env/                    # Entorno virtual
│   └── Generador_video.py      # Tu script principal
├── audio.mp3
├── Portada.png
├── marca.png
├── salida.mp4
├── generico.png
└── imagenes/
    ├── imagen1.jpg
    ├── imagen2.png
    └── ...
```


---


## 💻 Código Base


### Script Principal (Generador_video.py)


```python
from pathlib import Path
from moviepy.editor import *

def main():
    # Definir ruta base (subir un nivel desde moviepy/ a Capitulo5/)
    base_path = Path(__file__).resolve().parent.parent

    # Cargar archivos usando str() para compatibilidad
    audio = AudioFileClip(str(base_path / "audio.mp3"))
    portada = ImageClip(str(base_path / "Portada.png")).set_duration(3)
    marca = ImageClip(str(base_path / "marca.png"))
    salida = VideoFileClip(str(base_path / "salida.mp4")).set_duration(3)

    # Ejemplo de procesamiento de imágenes
    clips = []
    imagenes_path = base_path / "imagenes"

    for img_file in imagenes_path.glob("*.jpg"):
        try:
            img_clip = ImageClip(str(img_file)).set_duration(2)
            clips.append(img_clip)
        except Exception as e:
            print(f"Error procesando {img_file}: {e}")
            # Usar imagen genérica si hay error
            generico = ImageClip(str(base_path / "generico.png")).set_duration(2)
            clips.append(generico)

    # Filtrar clips válidos antes de concatenar
    clips_validos = [c for c in clips if c and c.duration]

    # Crear video final
    if clips_validos:
        video_final = concatenate_videoclips(
            [portada] + clips_validos + [salida]
        ).set_audio(audio).set_fps(24)

        # Exportar
        video_final.write_videofile(
            str(base_path / "video_generado.mp4"),
            codec='libx264'
        )
        print("✔ Video generado exitosamente")
    else:
        print("❌ No se encontraron clips válidos")

if __name__ == "__main__":
    main()
```


---


## 🚀 Ejecución


### Ejecutar el Script


```shell
# Asegúrate de que el entorno esté activo
python Generador_video.py
```


---


## 🔧 Solución de Problemas


### ❌ Error: `No module named 'moviepy.editor'`

- **Causa:** MoviePy 2.x cambió la estructura de módulos
- **Solución:** Usar `"moviepy<2"` en la instalación

### ❌ Error: `AttributeError: module 'PIL.Image' has no attribute 'ANTIALIAS'`

- **Causa:** Pillow muy nuevo incompatible con MoviePy 1.x
- **Solución:** Usar `pillow==9.5.0`

### ❌ Error: `TypeError: unsupported operand type(s) for +: 'int' and 'NoneType'`

- **Causa:** Clips con duración `None`
- **Solución:** Filtrar clips antes de concatenar:

```python
clips_validos = [c for c in clips if c and c.duration]
```


### ❌ Error: `ssl.SSLCertVerificationError`

- **Causa:** Problemas de certificados SSL
- **Solución:** Usar `-trusted-host` en pip install

### ❌ Error: Conflicto de nombres

- **Causa:** Script nombrado `moviepy.py`
- **Solución:** Renombrar a `Generador_video.py` o similar

---


## 📊 Versiones Compatibles


| Librería           | Versión |
| ------------------ | ------- |
| **Python**         | 3.11.x  |
| **MoviePy**        | < 2.0   |
| **Pillow**         | 9.5.0   |
| **NumPy**          | 1.24.3  |
| **ImageIO**        | 2.31.1  |
| **ImageIO-FFmpeg** | 0.4.8   |


---


## ✅ Comandos de Verificación


### Verificar entorno activo


```shell
where python
# Debe mostrar: X:\ruta\env\Scripts\python.exe
```


### Verificar instalaciones


```shell
pip list | findstr moviepy
pip list | findstr pillow
pip list | findstr numpy
```


### Prueba rápida


```shell
python -c "from moviepy.editor import VideoFileClip, ImageClip, AudioFileClip; print('✔ Todas las importaciones OK')"
```


---


## 📝 Notas Importantes


### Mejores Prácticas

1. **Siempre usar el entorno virtual activado**
2. **Usar** **`str()`** **al pasar rutas a MoviePy**
3. **No nombrar scripts como** **`moviepy.py`**
4. **Manejar errores de carga de archivos**
5. **Filtrar clips inválidos antes de concatenar**

---

> 🎯 Estado: Configuración probada y funcional - Versión Final
