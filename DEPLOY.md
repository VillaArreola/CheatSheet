# 🚀 Guía de Despliegue - TechSec Cheatsheet

## 📋 Contenido
- [Hosting Compartido (Hostinger, cPanel)](#hosting-compartido)
- [Vercel / Netlify](#vercel--netlify)
- [Actualización de Contenido](#actualización-de-contenido)

---

## 🏠 Hosting Compartido

Tu sitio está configurado en modo **estático**, lo que significa que puedes desplegarlo en cualquier hosting compartido.

### Paso 1: Build del Proyecto

```bash
npm run build
```

Esto genera la carpeta `dist/` con todo el sitio estático.

### Paso 2: Subir Archivos

Sube **TODO** el contenido de la carpeta `dist/` a tu hosting:

#### Via FTP (FileZilla, WinSCP, etc.)
1. Conecta a tu hosting
2. Ve a la carpeta `public_html` o `www`
3. Sube TODO el contenido de `dist/`

#### Via cPanel File Manager
1. Accede a cPanel
2. Abre "File Manager"
3. Ve a `public_html`
4. Sube los archivos desde `dist/`
5. Extrae si subes un ZIP

### Paso 3: Verificar Archivos

Asegúrate de que estos archivos estén en la raíz:
```
public_html/
├── .htaccess          ← IMPORTANTE
├── index.html
├── favicon.ico
├── MVLOGO.png
├── _astro/
├── comando/
├── rclone/
├── crypto/
├── ls/
└── ...
```

### Paso 4: Configurar Dominio (Si es nuevo)

1. En cPanel → "Domains" o "Addon Domains"
2. Apunta el dominio a la carpeta donde subiste los archivos
3. Espera propagación DNS (puede tomar hasta 24h)

### ⚙️ Archivo .htaccess

El archivo `.htaccess` ya está incluido en `public/` y se copia automáticamente al `dist/` durante el build. Este archivo:

- ✅ Maneja las rutas limpias (`/rclone`, `/crypto`)
- ✅ Habilita compresión GZIP
- ✅ Configura caché del navegador
- ✅ Mejora la seguridad

Si necesitas forzar HTTPS o www, edita el archivo `public/.htaccess` antes del build.

---

## ☁️ Vercel / Netlify

### Vercel (Recomendado)

1. **Conectar Repositorio**
   ```bash
   # Instalar Vercel CLI (opcional)
   npm i -g vercel
   
   # Hacer deploy
   vercel
   ```

2. **Via Dashboard Web**
   - Ve a [vercel.com](https://vercel.com)
   - "New Project" → Conecta tu repositorio Git
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Deploy!

### Netlify

1. **Via Dashboard**
   - Ve a [netlify.com](https://netlify.com)
   - "Add new site" → "Import from Git"
   - Build Command: `npm run build`
   - Publish Directory: `dist`
   - Deploy!

2. **Via Netlify CLI**
   ```bash
   npm i -g netlify-cli
   netlify deploy --prod
   ```

---

## 🔄 Actualización de Contenido

### Comandos de Notion

Si actualizas comandos en Notion:

```bash
# Sincronizar desde Notion
npm run sync-notion

# Rebuild
npm run build

# Subir nuevamente a hosting
```

### Nuevos Comandos Manuales

1. Agrega el archivo `.md` en `public/comando/`
2. Actualiza `src/data/generated/commands.ts`
3. Build y deploy

### Cambios de Diseño

```bash
# Desarrollo local
npm run dev

# Build de producción
npm run build
```

---

## 📂 Estructura de Archivos en Producción

```
Tu Hosting/
└── public_html/
    ├── .htaccess              # Configuración Apache
    ├── index.html             # Página principal
    ├── favicon.ico            # Favicon principal
    ├── MVLOGO.png             # Tu logo
    ├── android-chrome-*.png   # Iconos Android
    ├── apple-touch-icon.png   # Icono iOS
    ├── site.webmanifest       # PWA manifest
    ├── _astro/                # CSS/JS compilado
    │   ├── *.css
    │   └── *.js
    ├── comando/               # Archivos markdown
    │   ├── rclone.md
    │   ├── crypto.md
    │   └── ...
    ├── rclone/                # Páginas de comandos
    │   └── index.html
    ├── crypto/
    │   └── index.html
    └── ...
```

---

## 🔗 URLs Finales

Después del deploy, tus URLs serán:

- `https://tudominio.com/` → Página principal
- `https://tudominio.com/rclone` → Comando Rclone
- `https://tudominio.com/crypto` → Comando Crypto
- `https://tudominio.com/ls` → Comando ls
- `https://tudominio.com/?search=linux` → Búsqueda

---

## ⚡ Tips de Optimización

1. **Compresión GZIP**: Ya está configurada en `.htaccess`
2. **Caché**: Configurado para 1 año en recursos estáticos
3. **Imágenes**: Considera usar WebP para logos
4. **CDN**: Cloudflare gratis puede acelerar tu sitio

---

## 🐛 Troubleshooting

### Las rutas no funcionan (404)
- Verifica que `.htaccess` esté en la raíz
- Verifica que `mod_rewrite` esté habilitado en tu hosting
- Contacta soporte si persiste

### Logos no cargan
- Verifica que los archivos PNG estén en la raíz de `dist/`
- Revisa permisos de archivos (644)

### Búsqueda no funciona
- Verifica que `commands.ts` se haya copiado correctamente
- Revisa la consola del navegador

---

## 📞 Soporte

- **Git Issues**: [Tu repositorio]
- **Hosting**: [Soporte de tu proveedor]
- **Astro Docs**: https://docs.astro.build

---

¡Listo para producción! 🎉

