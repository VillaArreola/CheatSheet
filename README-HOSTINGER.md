# 🚀 Deploy en Hostinger - TechSec Cheatsheet

## 📋 Pasos para Deploy

### 1. **Preparar el Proyecto**
```bash
# Hacer build del proyecto
npm run build
```

### 2. **Archivos para Subir**
Sube **TODA** la carpeta `dist/` al directorio raíz de tu hosting en Hostinger.

### 3. **Estructura de Archivos**
```
public_html/
├── index.html              # Página principal
├── test/
│   └── index.html         # Página de test
├── _astro/                # Assets de Astro (JS/CSS)
├── comando/               # Archivos markdown de comandos
├── img/                   # Imágenes
├── favicon.svg           # Icono del sitio
├── robots.txt            # SEO - Robots
├── sitemap.xml           # SEO - Sitemap
└── [otros archivos...]
```

### 4. **Configuración en Hostinger**

#### **Panel de Control:**
1. Ve a **File Manager**
2. Navega a `public_html/`
3. Sube todos los archivos de la carpeta `dist/`

#### **Configuración de Dominio:**
- Asegúrate de que el dominio apunte a `public_html/`
- Verifica que `index.html` esté en la raíz

### 5. **Variables de Entorno (Opcional)**

Si quieres configurar Google Analytics, crea un archivo `.env` en la raíz:

```env
PUBLIC_GA_MEASUREMENT_ID=G-TU-ID-DE-GOOGLE-ANALYTICS
PUBLIC_SITE_URL=https://cheatsheet.villaarreola.com
```

### 6. **Verificación**

Después del deploy, verifica:

- ✅ **Página principal** carga correctamente
- ✅ **Búsqueda** funciona
- ✅ **Filtros de categoría** funcionan
- ✅ **Vista móvil** se adapta
- ✅ **Comandos** se cargan desde `/comando/`

### 7. **SEO y Analytics**

#### **Google Analytics:**
1. Ve a [Google Analytics](https://analytics.google.com)
2. Crea una nueva propiedad
3. Copia el ID de medición (G-XXXXXXXXXX)
4. Agrega la variable de entorno

#### **Google Search Console:**
1. Verifica tu sitio en Search Console
2. Sube el `sitemap.xml`
3. Verifica que `robots.txt` esté accesible

### 8. **Solución de Problemas**

#### **Si la página no carga:**
- Verifica que `index.html` esté en la raíz
- Revisa los logs de error en Hostinger
- Asegúrate de que todos los archivos se subieron

#### **Si los comandos no cargan:**
- Verifica que la carpeta `comando/` esté presente
- Revisa que los archivos `.md` estén accesibles
- Verifica la consola del navegador para errores

#### **Si el CSS no se aplica:**
- Verifica que la carpeta `_astro/` esté presente
- Revisa que los archivos CSS se carguen correctamente

### 9. **Actualizaciones**

Para actualizar el sitio:

1. Haz cambios en el código
2. Ejecuta `npm run build`
3. Sube la nueva carpeta `dist/` reemplazando la anterior

### 10. **Backup**

Antes de cada actualización:
- Haz backup de la carpeta actual en Hostinger
- Guarda una copia local de la versión anterior

---

## 🎯 Características del Deploy

- ✅ **Sitio estático** - No requiere servidor
- ✅ **SEO optimizado** - Meta tags, sitemap, robots.txt
- ✅ **Responsive** - Funciona en móvil y desktop
- ✅ **Búsqueda en tiempo real** - Filtrado instantáneo
- ✅ **Dark mode** - Tema oscuro/claro
- ✅ **Analytics listo** - Google Analytics configurado

---

**¡Tu cheatsheet estará listo para usar!** 🚀✨
