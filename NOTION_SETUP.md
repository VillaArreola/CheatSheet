# Configuración de Notion API para CheatSheet

## 🚀 Configuración Rápida

### 1. Crear Integración en Notion

1. Ve a [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Crea una nueva integración
3. Dale un nombre (ej: "CheatSheet Sync")
4. Copia el **Internal Integration Token**

### 2. Crear Base de Datos en Notion

Crea una nueva base de datos con estas propiedades:

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| **Title** | Title | Nombre del comando (requerido) |
| **command** | Text | El comando en sí (nombre en minúsculas) |
| **Description** | Text | Descripción del comando |
| **Category** | Multi-select | Categoría (ej: Linux, Git, Docker) |
| **Tags** | Select | Tags para búsqueda |
| **Examples** | Text | Ejemplos de uso (opcional) |
| **Dangerous** | Select | YES/NO - Si el comando es peligroso |
| **Platform** | Select | Plataforma (Unix, Windows, etc.) |
| **Status** | Status | Not started/In progress/Done |

### 3. Compartir Base de Datos

1. En tu base de datos, haz clic en "Share"
2. Invita a tu integración (busca el nombre que le diste)
3. Dale permisos de "Can edit"

### 4. Obtener Database ID

1. Abre tu base de datos en Notion
2. Copia el ID de la URL: `https://notion.so/workspace/DATABASE_ID?v=...`
3. El ID es la parte entre `workspace/` y `?v=`

### 5. Configurar Variables de Entorno

1. Copia `env.example` a `.env`
2. Llena las variables:
```env
NOTION_TOKEN=secret_tu_token_aqui
NOTION_DB=tu_database_id_aqui
```

### 6. Instalar Dependencias

```bash
npm install
```

### 7. Sincronizar Comandos

Tienes varias opciones de sincronización:

```bash
# Solo generar archivo TypeScript con comandos
npm run sync

# Solo generar archivos markdown individuales
npm run sync:md

# Generar ambos (recomendado)
npm run sync:all
```

## 📁 Estructura de Archivos

```
src/
├── lib/
│   └── notion.ts                    # Funciones de la API de Notion
├── data/
│   ├── commands.ts                  # Comandos actuales (manual)
│   └── generated/
│       └── commands.ts              # Comandos sincronizados (automático)
├── pages/
│   └── comando/                     # Archivos markdown individuales
│       ├── dnsrecon.md             # Ejemplo de comando
│       └── [otros-comandos].md     # Generados automáticamente
└── scripts/
    ├── sync-notion-commands.cjs     # Script para TypeScript
    └── generate-markdown-files.cjs  # Script para markdown
```

## 🔄 Flujo de Trabajo

1. **Editar en Notion**: Agrega/modifica comandos en tu base de datos
2. **Sincronizar**: Ejecuta `npm run sync`
3. **Desplegar**: Los cambios se reflejan automáticamente

## 🎯 Propiedades Recomendadas para Categorías

- **Linux**: Comandos del sistema
- **Git**: Control de versiones
- **Docker**: Contenedores
- **Network**: Redes y conectividad
- **Security**: Seguridad y pentesting
- **Database**: Bases de datos
- **Web**: Desarrollo web
- **General**: Comandos generales

## 🏷️ Tags Útiles

- `frecuente`: Comandos de uso diario
- `peligroso`: Comandos que pueden causar daño
- `admin`: Comandos administrativos
- `desarrollo`: Comandos de desarrollo
- `monitoreo`: Comandos de monitoreo
- `backup`: Comandos de respaldo

## 🚨 Comandos Peligrosos

Marca la casilla "Dangerous" para comandos que:
- Pueden eliminar archivos
- Modifican configuraciones críticas
- Requieren permisos de administrador
- Pueden causar pérdida de datos

Estos comandos se mostrarán con una advertencia visual en la interfaz.

## 📝 Estructura de Contenido en Notion

Para que los comandos se procesen correctamente, usa esta estructura en el contenido de Notion:

### Sintaxis Básica
```markdown
### **🛠 Sintaxis básica**

```bash
comando [opciones]
```
```

### Parámetros
```markdown
### **⚙️ Parámetros clave**

| Parámetro | Descripción | Ejemplo |
| --- | --- | --- |
| `-d` | Dominio objetivo | `-d ejemplo.com` |
| `-t` | Tipo de enumeración | `-t brt` |
```

### Ejemplos
```markdown
### **🚀 Ejemplos de uso**

**Enumeración estándar:**

```bash
dnsrecon -d ejemplo.com -t std
```
```

### Salida Esperada
```markdown
### **📤 Salida esperada**

```
[*] STD: ejemplo.com NS ns1.ejemplo.com
[*] STD: ejemplo.com MX mail.ejemplo.com
```
```

### Notas/Tips
```markdown
### **💡 Notas / Tips**

- El tipo `std` obtiene registros básicos
- Usar `-t goo` para buscar subdominios
- Limitar tiempo con `--lifetime`
```

### Referencias
```markdown
### **🔗 Referencias e Instalación**

- [Repositorio oficial](https://github.com/example)
- [Documentación](https://docs.example.com)
```
