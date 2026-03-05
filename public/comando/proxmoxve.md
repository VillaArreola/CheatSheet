---
layout: ../../layouts/cheatlayout.astro
title: Proxmox VE
---


# Proxmox VE


## **🖊️ Ejemplo**


```bash
ssh root@192.168.137.10
# Acceso web: https://192.168.137.10:8006
```


### **📌 Descripción**

> Proxmox VE (Virtual Environment) es un hipervisor tipo 1 open source que corre directamente sobre el hardware. Combina KVM para VMs completas, LXC para contenedores ligeros, ZFS para almacenamiento y administración vía web.

---


### **🛠 Comandos CLI esenciales**


```bash
# Listar VMs y contenedores
qm list           # VMs KVM
pct list          # Contenedores LXC

# Iniciar / detener
qm start <vmid>
qm stop <vmid>
pct start <ctid>
pct stop <ctid>

# Crear snapshot
qm snapshot <vmid> <nombre>

# Ver logs del sistema
journalctl -u pve-cluster
```


---


### **⚙️ Configuración clave**


| Archivo / Ajuste              | Descripción                      | Valor recomendado                   |
| ----------------------------- | -------------------------------- | ----------------------------------- |
| `/etc/systemd/logind.conf`    | Evitar suspensión al cerrar tapa | `HandleLidSwitch=ignore`            |
| KSM (Kernel Samepage Merging) | Deduplicación de RAM entre VMs   | Activado por defecto, ahorra 20-30% |
| IP estática                   | Asignar IP fija al nodo          | `/etc/network/interfaces`           |


---


### **📦 Distribución típica de recursos (32GB RAM)**


| VM / Contenedor     | Función                 | RAM asignada |
| ------------------- | ----------------------- | ------------ |
| Proxmox Base        | Hipervisor              | 2 GB         |
| Wazuh Server        | SIEM / XDR              | 6 GB         |
| Windows Server      | Active Directory (DC)   | 4 GB         |
| Windows 10          | Endpoint víctima        | 4 GB         |
| LXC Docker Host     | Juice Shop, DVWA, Gitea | 4 GB         |
| Whonix Gateway + WS | OSINT / Dark Web        | 4 GB         |


---


### **🚀 Ejemplos de uso**


**Instalar en disco secundario (sin dañar Windows en NVMe1):**


```bash
# Seleccionar el NVMe secundario durante el instalador
# El instalador puede modificar la EFI — usar discos físicamente separados
```


**Evitar suspensión al cerrar tapa del laptop:**


```bash
# Editar /etc/systemd/logind.conf
HandleLidSwitch=ignore
HandleLidSwitchDocked=ignore
systemctl restart systemd-logind
```


**Convertir imagen VMware para importar en Proxmox:**


```bash
qemu-img convert -f vmdk -O qcow2 imagen.vmdk imagen.qcow2
qm importdisk <vmid> imagen.qcow2 local-lvm
```


---


### **💡 Notas / Tips**

- **Tipo 1 vs Tipo 2**: Proxmox corre directo sobre hardware (800MB overhead). VMware Workstation pasa por el OS host (4GB+ overhead).
- KSM fusiona páginas de RAM idénticas entre VMs — muy útil cuando varias VMs usan el mismo OS base.
- Panel web disponible en `https://<IP>:8006`

---


### **🔗 Referencias**

- [Documentación oficial Proxmox](https://pve.proxmox.com/wiki/Main_Page)
