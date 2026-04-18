---
layout: ../../layouts/cheatlayout.astro
title: manage-bde
---


# manage-bde


## **🏴‍☠️ Ejemplo**


```powershell
manage-bde -status
```


###  **Descripción breve**

> Herramienta CLI de Windows (PowerShell/CMD) para gestionar BitLocker Drive Encryption. Permite ver estado de cifrado, administrar protectores y generar claves de recuperación. Requiere permisos de Administrador.

---


### **Sintaxis básica**


```powershell
manage-bde [volumen] [operación] [parámetros]
# Debe ejecutarse como Administrador
```


---


### **Parámetros clave**


| Comando                                 | Descripción                                    | Ejemplo                                               |
| --------------------------------------- | ---------------------------------------------- | ----------------------------------------------------- |
| `-status`                               | Estado del cifrado de todos los volúmenes      | `manage-bde -status`                                  |
| `-on`                                   | Activa BitLocker en un volumen                 | `manage-bde -on C:`                                   |
| `-off`                                  | Desactiva BitLocker (descifra el volumen)      | `manage-bde -off C:`                                  |
| `-protectors -get`                      | Lista todos los protectores/claves del volumen | `manage-bde -protectors -get C:`                      |
| `-protectors -enable`                   | Habilita protectores desactivados              | `manage-bde -protectors -enable C:`                   |
| `-protectors -disable`                  | Suspende protectores temporalmente             | `manage-bde -protectors -disable C:`                  |
| `-protectors -enable -RecoveryPassword` | Genera nueva Recovery Key de 48 dígitos        | `manage-bde -protectors -enable C: -RecoveryPassword` |
| `-protectors -delete -id {UUID}`        | Elimina un protector específico por ID         | `manage-bde -protectors -delete C: -id {UUID}`        |


---


###  **Ejemplos de uso**


**Ver estado completo:**


```powershell
manage-bde -status
manage-bde -status C:      # Solo volumen C
```


**Listar claves de recuperación actuales:**


```powershell
manage-bde -protectors -get C:
```


**Rotar (generar nueva) Recovery Key:**


```powershell
manage-bde -protectors -disable C:
manage-bde -protectors -enable C: -RecoveryPassword
manage-bde -protectors -get C:     # Verificar que el ID cambió
```


---


###  **Salida esperada**


```plain text
Volume C: [Label]
  Size:                 XXX GB
  BitLocker Version:    2.0
  Conversion Status:    Fully Encrypted
  Percentage Encrypted: 100%
  Encryption Method:    XTS-AES 128
  Protection Status:    Protection On
  Lock Status:          Unlocked
```


---


### **💡 Notas / Tips**

- Siempre ejecutar como **Administrador** (PowerShell o CMD elevado).
- `-protectors -disable` es temporal: al reiniciar se reactivan.
- Después de rotar, verificar que el UUID del protector cambió.
- Alternativa gráfica: `control /name Microsoft.BitLockerDriveEncryption`

---


### **🔗 Referencias**

- [Documentación oficial Microsoft](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/manage-bde)
