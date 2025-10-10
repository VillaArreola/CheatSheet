// Este archivo es generado automáticamente desde Notion
// NO editar manualmente - los cambios se sobrescribirán

export interface Command {
  id: string;
  title: string;
  command: string;
  description: string;
  category: string;
  tags: string[];
  examples?: string[];
  dangerous?: boolean;
  platform?: string;
  syntax?: string;
  parameters?: Array<{
    param: string;
    description: string;
    example: string;
  }>;
  output?: string;
  notes?: string;
  references?: string[];
  created_at: string;
  updated_at: string;
}

export const commands: Command[] = [
  {
    "id": "24fec7e7-4fc0-80ef-a008-f3585a1afc4e",
    "title": "Dnsrecon ",
    "command": "dnsrecon -d ejemplo.com -t std",
    "description": "Herramienta para enumerar registros DNS y realizar descubrimiento de subdominios.",
    "category": "Escan",
    "tags": [],
    "examples": [
      "dnsrecon -d ejemplo.com -D subdomains.txt -t brt",
      "dnsrecon [opciones]",
      "dnsrecon -d ejemplo.com -t std",
      "dnsrecon -d ejemplo.com -D subdomains.txt -t brt",
      "dnsrecon -d ejemplo.com -t axfr"
    ],
    "dangerous": false,
    "platform": "Unix",
    "syntax": "dnsrecon -d ejemplo.com -D subdomains.txt -t brt",
    "parameters": [
      {
        "param": "-d",
        "description": "Dominio objetivo",
        "example": "`-d ejemplo.com`"
      },
      {
        "param": "-t",
        "description": "Tipo de enumeración (`std`, `brt`, `axfr`, `goo`)",
        "example": "`-t brt`"
      },
      {
        "param": "-D",
        "description": "Diccionario de subdominios",
        "example": "`-D subdomains.txt`"
      },
      {
        "param": "--lifetime",
        "description": "Timeout de consulta",
        "example": "`--lifetime 5`"
      }
    ],
    "output": "",
    "notes": "- El tipo `std` obtiene registros básicos (A, AAAA, MX, NS, TXT).\n- Usar `t goo` para buscar subdominios indexados en Google.\n- Con diccionarios grandes, limitar el tiempo de consulta con `-lifetime`.",
    "references": [
      "Repositorio oficial",
      "Documentación"
    ],
    "created_at": "2025-08-14T20:53:00.000Z",
    "updated_at": "2025-08-18T01:51:00.000Z"
  },
  {
    "id": "253ec7e7-4fc0-80e2-bdb9-e54621c69807",
    "title": "Ls ",
    "command": "ls -la /home/usuario/documentos",
    "description": " listar archivos y directorios",
    "category": "Linux",
    "tags": [],
    "examples": [
      "ls -la /home/usuario/documentos"
    ],
    "dangerous": false,
    "platform": "Unix",
    "syntax": "ls -la /home/usuario/documentos",
    "parameters": [],
    "output": "",
    "notes": "",
    "references": [
      "Manual de ls",
      "Guía de comandos Linux"
    ],
    "created_at": "2025-08-18T01:16:00.000Z",
    "updated_at": "2025-08-18T01:52:00.000Z"
  },
  {
    "id": "252ec7e7-4fc0-8011-b047-f847e6967442",
    "title": "movipy",
    "command": "python Generador_video.py",
    "description": "Genera videos a partir de imagenes ",
    "category": "Python",
    "tags": [],
    "examples": [
      "# Verificar versión actual\npython --version",
      "deactivate",
      "### 3. Crear Nuevo Entorno Virtual",
      "### 4. Activar Entorno Virtual",
      "> ✅ Verificación: Tu prompt debe cambiar a (env) PS X:\\....\n\n---\n\n\n## 📦 Instalación de Dependencias\n\n\n### 1. Actualizar Herramientas Base",
      "### 2. Instalar MoviePy y Dependencias\n\n\n### Comando Recomendado",
      "### Si hay errores SSL (solo desarrollo local)",
      "### 3. Verificar Instalación",
      "**Resultado esperado:** `✔ MoviePy funcionando correctamente`\n\n\n---\n\n\n## 📁 Estructura del Proyecto\n\n\n### Organización Recomendada",
      "---\n\n\n## 💻 Código Base\n\n\n### Script Principal (Generador_video.py)",
      "---\n\n\n## 🚀 Ejecución\n\n\n### Ejecutar el Script",
      "---\n\n\n## 🔧 Solución de Problemas\n\n\n### ❌ Error: `No module named 'moviepy.editor'`\n\n- **Causa:** MoviePy 2.x cambió la estructura de módulos\n- **Solución:** Usar `\"moviepy<2\"` en la instalación\n\n### ❌ Error: `AttributeError: module 'PIL.Image' has no attribute 'ANTIALIAS'`\n\n- **Causa:** Pillow muy nuevo incompatible con MoviePy 1.x\n- **Solución:** Usar `pillow==9.5.0`\n\n### ❌ Error: `TypeError: unsupported operand type(s) for +: 'int' and 'NoneType'`\n\n- **Causa:** Clips con duración `None`\n- **Solución:** Filtrar clips antes de concatenar:",
      "### ❌ Error: `ssl.SSLCertVerificationError`\n\n- **Causa:** Problemas de certificados SSL\n- **Solución:** Usar `-trusted-host` en pip install\n\n### ❌ Error: Conflicto de nombres\n\n- **Causa:** Script nombrado `moviepy.py`\n- **Solución:** Renombrar a `Generador_video.py` o similar\n\n---\n\n\n## 📊 Versiones Compatibles\n\n\n| Librería           | Versión |\n| ------------------ | ------- |\n| **Python**         | 3.11.x  |\n| **MoviePy**        | < 2.0   |\n| **Pillow**         | 9.5.0   |\n| **NumPy**          | 1.24.3  |\n| **ImageIO**        | 2.31.1  |\n| **ImageIO-FFmpeg** | 0.4.8   |\n\n\n---\n\n\n## ✅ Comandos de Verificación\n\n\n### Verificar entorno activo",
      "### Verificar instalaciones",
      "### Prueba rápida"
    ],
    "dangerous": false,
    "platform": "Unix",
    "syntax": "# Verificar versión actual\npython --version",
    "parameters": [],
    "output": "",
    "notes": "",
    "references": [
      "Descargar Python 3.11"
    ],
    "created_at": "2025-08-17T02:46:00.000Z",
    "updated_at": "2025-10-10T02:36:00.000Z"
  },
  {
    "id": "288ec7e7-4fc0-80b3-81ca-f99965597cc9",
    "title": "Rclone",
    "command": "rclone sync \"source\"   \"Destino\\\"   -P ",
    "description": "Como usar Rclone",
    "category": "Config",
    "tags": [],
    "examples": [
      "rclone sync \"source\"   \"Destino\\\"   -P  --exclude \"\"",
      "rclone [comando] [origen] [destino] [opciones]",
      "rclone sync ./MisFotos gdrive:/Fotos --progress --dry-run",
      "rclone mount gdrive:/ ~/GDrive",
      "rclone sync ./Documentos gdrive:/Backup/Documentos -P --delete-after",
      "rclone copy ./notas gdrive:/pdfs --include \"*.pdf\" -P",
      "rclone sync \"C:\\OBS\" \"P:\\OBS\" -P --exclude \"*.tmp\" --exclude \"*.bak\""
    ],
    "dangerous": false,
    "platform": "Unix",
    "syntax": "rclone sync \"source\"   \"Destino\\\"   -P  --exclude \"\"",
    "parameters": [
      {
        "param": "-listremotes",
        "description": "Lista las particones remotas",
        "example": "rclone listremotes"
      },
      {
        "param": "-config delete ''",
        "description": "Elimina el directorio deseado",
        "example": "|"
      },
      {
        "param": "--dry-run",
        "description": "Muestra un apreview sobre el comando a ejecutar.",
        "example": "rcloud   -comand —dry-run"
      },
      {
        "param": "--update",
        "description": "Actualiza solo lo mas reciente",
        "example": "rclone —command —update"
      }
    ],
    "output": "",
    "notes": "- Antes de sincronizar, **usa** **`--dry-run`** para evitar errores fatales.\n- **Programar backups automáticos** con `cron`\n- Rclone puede cifrar tus datos con `rclone config` → tipo `crypt7`",
    "references": [
      "Documentación"
    ],
    "created_at": "2025-10-10T01:31:00.000Z",
    "updated_at": "2025-10-10T02:36:00.000Z"
  }
];

// Convertir categorías de strings a objetos para compatibilidad con componentes
export const categories = [
  { id: 'all', name: 'Todos los comandos', color: 'gray', count: commands.length },
  ...([...new Set(commands.map(cmd => cmd.category))].sort().map(category => ({
    id: category.toLowerCase().replace(/s+/g, '-'),
    name: category,
    color: getCategoryColor(category),
    count: commands.filter(cmd => cmd.category === category).length
  })))
];

// Función para asignar colores a categorías
function getCategoryColor(category: string): string {
  const colorMap: { [key: string]: string } = {
    'dns': 'blue',
    'linux': 'green',
    'security': 'red',
    'network': 'indigo',
    'database': 'purple',
    'web': 'orange',
    'git': 'teal',
    'docker': 'cyan',
    'escan': 'blue',
    'python': 'green',
    'config': 'purple',
    'all': 'gray'
  };
  
  return colorMap[category.toLowerCase()] || 'gray';
}

export function getCommandById(id: string): Command | undefined {
  return commands.find(cmd => cmd.id === id);
}

export function getCommandsByCategory(category: string): Command[] {
  if (category === 'all') return commands;
  return commands.filter(cmd => cmd.category === category);
}

export function searchCommands(query: string): Command[] {
  const searchTerm = query.toLowerCase();
  return commands.filter(cmd => 
    cmd.title.toLowerCase().includes(searchTerm) ||
    cmd.command.toLowerCase().includes(searchTerm) ||
    cmd.description.toLowerCase().includes(searchTerm) ||
    cmd.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
}
