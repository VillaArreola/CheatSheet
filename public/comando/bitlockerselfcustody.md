---
layout: ../../layouts/cheatlayout.astro
title: BitLocker Self-Custody
---


# BitLocker Self-Custody


## **🏴‍☠️ Ejemplo**


```powershell
manage-bde -protectors -enable C: -RecoveryPassword
```


### **📌 Descripción breve**

> Protocolo para sacar la Recovery Key de BitLocker de la nube de Microsoft, guardarla offline y rotarla para invalidar cualquier copia previa. Aplica cuando se usa cuenta Microsoft en Windows 10/11.

---


### **🛠 Sintaxis básica**


```powershell
# PowerShell / CMD como Administrador
manage-bde -protectors -get C:                          # Ver claves actuales
manage-bde -protectors -disable C:                      # Suspender protección
manage-bde -protectors -enable C: -RecoveryPassword     # Generar nueva Recovery Key
manage-bde -status                                      # Ver estado general
```


---


### **⚙️ Parámetros clave**


| Fase               | Acción                                                | Comando                                                                                                |
| ------------------ | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 1 — Respaldar      | Anotar clave actual en papel/USB offline              | `manage-bde -protectors -get C:`                                                                       |
| 2 — Borrar de nube | Eliminar entradas en portal Microsoft                 | [https://account.microsoft.com/devices/recoverykey](https://account.microsoft.com/devices/recoverykey) |
| 3 — Rotar clave    | Generar nueva Recovery Key (nunca ha tocado internet) | `manage-bde -protectors -disable C:` luego `-enable C: -RecoveryPassword`                              |
| 4 — Verificar      | Confirmar que el ID y clave cambiaron                 | `manage-bde -protectors -get C:`                                                                       |


---


### **🚀 Ejemplos de uso**


**Fase 1 — Respaldar clave actual:**


```powershell
manage-bde -protectors -get C:
# Anotar la "Contraseña numérica" de 48 dígitos en papel o USB offline
# NUNCA guardar en archivo de texto en el mismo equipo
```


**Fase 2 — Eliminar de la nube de Microsoft:**


```plain text
URL: https://account.microsoft.com/devices/recoverykey
→ Eliminar todas las entradas del dispositivo
```


**Fase 3 — Rotar la clave:**


```powershell
manage-bde -protectors -disable C:
manage-bde -protectors -enable C: -RecoveryPassword
manage-bde -protectors -get C:
# El ID y la Password deben ser DISTINTOS a los del Paso 1
```


---


### **📤 Salida esperada**


```plain text
Volume C: [Windows]
Key Protectors:
  Numerical Password:
    ID: {NUEVO-UUID-DISTINTO-AL-ANTERIOR}
    Password: XXXXXX-XXXXXX-XXXXXX-XXXXXX-XXXXXX-XXXXXX-XXXXXX-XXXXXX
```


---


### **💡 Notas / Tips**

- La **Recovery Key** (48 dígitos) es la que Microsoft sube automáticamente si se usa cuenta MS. La **VMK** nunca sale del chip TPM.
- Una clave que tocó un medio no confiable se considera comprometida (OpSec). Rotar = cambiar la cerradura.
- NUNCA guardar la Recovery Key en archivo de texto en el mismo equipo cifrado.
- Bajo **CLOUD Act**, Microsoft está obligado a entregar datos bajo orden judicial válida.
- Para deshabilitar el envío automático: `gpedit.msc` → Configuración de equipo → Plantillas administrativas → Componentes de Windows → BitLocker Drive Encryption.

---


### **🔗 Referencias**

- [Portal de claves Microsoft](https://account.microsoft.com/devices/recoverykey)
- [Documentación manage-bde](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/manage-bde)
