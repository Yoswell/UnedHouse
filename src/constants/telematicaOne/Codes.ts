export const Codes = [
/* 1 --------------------------------------------------*/
`enable
configure terminal
hostname Router-GNS3`,

/* 2 --------------------------------------------------*/
`// Contraseña modo privilegiado (encriptada)
enable secret MiClaveSecreta123

// Configuración de contraseñas para consola y TTY (línea auxiliar)
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
`interface GigabitEthernet0/0
description Enlace a Switch Principal
ip address 192.168.1.1 255.255.255.0
duplex auto
speed auto
no shutdown

// Subinterfaz para VLAN
interface GigabitEthernet0/1.10
description VLAN 10 - Departamento Ventas
encapsulation dot1Q 10
ip address 10.10.10.1 255.255.255.0

interface Serial0/0/0
ip address 172.16.0.1 255.255.255.252
clock rate 64000  // Solo en lado DCE
bandwidth 64  // Ancho de banda en Kbps
no shutdown`,

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
`show ip interface brief  // Estado interfaces
show running-config | include password  // Ver contraseñas
show crypto key mypubkey rsa  // Ver llaves SSH

ping 192.168.1.5 repeat 100 size 1500  // 100 paquetes grandes
ping ipv6 2001:db8::1  // Ping IPv6
traceroute 8.8.8.8 probe 3  // 3 intentos por salto`,

/* 6 --------------------------------------------------*/
`copy running-config startup-config

// Restaurar desde TFTP
copy tftp://192.168.1.100/respaldo.cfg startup-config
reload  // Reiniciar router

// Eliminar configuración
write erase  // Borra startup-config`,

/* 8 --------------------------------------------------*/
`ip dhcp excluded-address 192.168.1.1 192.168.1.50  // Rango excluido

ip dhcp pool RED-LAN
network 192.168.1.0 255.255.255.0
default-router 192.168.1.1
dns-server 8.8.8.8
lease 7  // Días de concesión

service dhcp  // Activar servicio DHCP`,

/* 9 --------------------------------------------------*/
`vlan 10
name Ventas

vlan 20
name IT

interface range GigabitEthernet0/1-24  // Configurar puertos switch
switchport mode access
switchport access vlan 10
spanning-tree portfast`,
]