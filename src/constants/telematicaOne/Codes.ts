export const Codes = [
/* 1 --------------------------------------------------*/
`// Ejemplo de subnetting
// Red: 192.168.1.0/24 dividida en 4 subredes:
192.168.1.0/26 (1-62)
192.168.1.64/26 (65-126)
192.168.1.128/26 (129-190)
192.168.1.192/26 (193-254)`,

/* 2 --------------------------------------------------*/
`enable secret MiClaveSecreta123 // Contraseña modo privilegiado (encriptada)

// Configuración de contraseñas para la TTY (línea auxiliar)
line console 0
password ConsolaSegura
login

// Configuración para puerto AUX/TTY
line aux 0
password AuxPassword
login

service password-encryption
`,

/* 3 --------------------------------------------------*/
`//Subinterfaz para VLAN 10 (Ventas)
interface GigabitEthernet0/0.10
description VLAN 10 - Ventas
encapsulation dot1Q 10 // El número 10 DEBE coincidir con el VLAN ID
ip address 192.168.10.1 255.255.255.0 // Gateway para VLAN 10
no shutdown
exit`,

/* 4 --------------------------------------------------*/
`banner motd # 
[!] ADVERTENCIA  
    [+] Sistema monitoreado en todo momento  
    [+] Intentos de acceso no autorizados serán bloqueados  
    [+] Todas las acciones quedan registradas  

[!] Si no tienes permiso, sal de inmediato #

banner motd #
[!] 🚨 SISTEMA PROTEGIDO 🚨  
    [+] Este sistema está vigilado las 24/7  
    [+] Cualquier actividad sospechosa será registrada  
    [+] Intrusos no serán tolerados  

[!] ⚠ ¡NO INTENTES NADA! ⚠ #`,

/* 5 --------------------------------------------------*/
`copy running-config startup-config //Guarda la configuración

reload  // Reiniciar router

write erase  // Borra startup-config`,

/* 6 --------------------------------------------------*/
`ip dhcp excluded-address 192.168.1.1 192.168.1.50  // Rango excluido

ip dhcp pool RED-LAN
network 192.168.1.0 255.255.255.0
default-router 192.168.1.1
dns-server 8.8.8.8
lease 7  // Días de concesión

service dhcp  // Activar servicio DHCP`,

/* 7 --------------------------------------------------*/
`vlan 10
name Ventas

vlan 20
name IT

interface range GigabitEthernet0/1-24  // Configurar puertos switch
switchport mode access
switchport access vlan 10
spanning-tree portfast`,
]