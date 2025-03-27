import { TitleType } from "@/types/type"
const spacesDot = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;●&nbsp;`
const spaces = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`

export const TitlesNetworkILeft: TitleType[] = [
    {
        title: "Conceptos Básicos de Redes",
        description: "Fundamentos de redes: <span>OSI/TCP-IP</span>, <span>dispositivos de red</span> (routers, switches, hubs), <span>direccionamiento IP</span> (IPv4/IPv6), <span>subnetting</span>, y <span>protocolos comunes</span> (TCP, UDP, ICMP). Diferencias entre redes LAN, MAN y WAN."
    },
    {
        title: "Contraseñas y Seguridad Básica",
        description: "Configuración de contraseñas en <span>terminal</span> y <span>líneas TTY</span> para controlar el acceso al dispositivo. Se establecen credenciales en <span>líneas de consola (console)</span>, <span>líneas virtuales (vty)</span> y <span>líneas auxiliares (aux)</span> mediante el uso de <span>password</span> y el comando <span>login</span>. Además, se recomienda utilizar <span>enable secret</span> en lugar de <span>enable password</span> para proteger el acceso al modo privilegiado con cifrado seguro. También se puede configurar <span>exec-timeout</span> para cerrar sesiones inactivas automáticamente, reduciendo riesgos de seguridad."
    },    
    {
        title: "Configuración de Interfaces y Subinterfaces",
        description: `
            Asignación de IPs a interfaces físicas y lógicas (<span>GigabitEthernet, Serial</span>). Creación de subinterfaces para VLANs con <span>encapsulation dot1Q</span>. Uso de <span>no shutdown</span> para activación.
            Configuración avanzada de interfaces físicas y lógicas:
            <br><br>${spacesDot} Las interfaces físicas se identifican por tipo y número (<span>GigabitEthernet0/0</span>, <span>Serial0/0/0</span>)
            <br>${spacesDot} Las subinterfaces se crean añadiendo un punto (.10), generalmente coincide con el ID de VLAN.
            <br>${spacesDot} El encapsulamiento VLAN de cada subinterfaz requiere <span>encapsulation dot1Q XX</span> donde <span>XX</span> es el VLAN ID.
            <br>${spacesDot} La activación de las interfaces requiere <span>no shutdown</span> para habilitarlas.
            <br><br>Notas clave:
            <br>${spaces} 1. El número de subinterfaz (.10) es arbitrario pero por convención se usa el VLAN ID
            <br>${spaces} 2. Cada subinterfaz actúa como gateway para su VLAN
            <br>${spaces} 3. La interfaz física padre NO debe tener dirección IP
        `
    },
    {
        title: "Banners Legales y Mensajes",
        description: "Implementación de <span>banner motd</span> y <span>banner login</span> con delimitadores personalizados. Estos banners permiten mostrar mensajes de advertencia, términos de uso o información relevante para los usuarios antes de acceder al sistema. Al definir un <span>banner motd</span>, es necesario utilizar un símbolo cualquiera como delimitador (por ejemplo, <code>^</code>, <code>#</code> o <code>@</code>) después del comando. Este mismo símbolo debe aparecer nuevamente al final del mensaje para indicar su cierre. También es posible usar variables dinámicas, como <span>$line</span>, que proporcionan información contextual sobre la sesión del usuario. Esto permite personalizar los mensajes en función del entorno de conexión, brindando una experiencia más informativa y segura."
    },    
    {
        title: "Gestión de Configuraciones",
        description: `
            La <span>gestión de configuraciones</span> permite respaldar, restaurar y comparar configuraciones de red para mantener la estabilidad de la infraestructura. A través de comandos específicos, se pueden automatizar tareas de administración de configuraciones y asegurarse de que los cambios se gestionen de forma eficiente y segura. 
            Implementación completa de gestión de configuraciones:
            <br><br>${spacesDot} Backup con <span>copy running-config tftp://192.168.1.100/router.cfg</span>
            <br>${spacesDot} Restauración mediante <span>configure replace</span>
            <br>${spacesDot} Borrado seguro con <span>write erase</span> + <span>reload</span>
            <br>${spacesDot} Comparación de configuraciones con <span>show archive config differences</span>
            <br>${spacesDot} Uso de <span>archive</span> para versionado automático
            <br>${spacesDot} Configuración de servidores <span>TFTP</span> y <span>SCP</span> para almacenamiento externo
            <br>${spacesDot} Implementación de <span>configuration rollback</span> para revertir cambios críticos
        `
    },      
    {
        title: "Servicio DHCP en el Router",
        description: `
            Configuración del servicio <span>DHCP</span> en el router para asignar dinámicamente direcciones IP a los dispositivos en la red. Se establece un <span>pool de direcciones</span> con un rango específico, configurando opciones como <span>tiempo de arrendamiento</span>, <span>puerta de enlace predeterminada</span> y <span>servidores DNS</span>. Además, se pueden configurar <span>reservas de IP</span> para asignar direcciones fijas a dispositivos específicos dentro de la red. La implementación de DHCP mejora la administración de direcciones IP y facilita la configuración de dispositivos sin intervención manual.
            Implementación completa de servidor DHCP:
            <br><br>${spacesDot} Creación de pools con <span>ip dhcp pool LAN</span>
            <br>${spacesDot} Exclusión de IPs estáticas (<span>ip dhcp excluded-address</span>)
            <br>${spacesDot} Asignación de parámetros: <span>default-router</span>, <span>dns-server</span>
            <br>${spacesDot} Opciones avanzadas: <span>lease infinite</span>, <span>domain-name</span>
            <br>${spacesDot} Soporte para DHCPv6 (<span>ipv6 dhcp pool</span>)
            <br>${spacesDot} Monitoreo con <span>show ip dhcp binding</span>
            <br>${spacesDot} Configuración de DHCP relay con <span>ip helper-address</span>
        `
    },
    {
        title: "Configuración de VLANs",
        description: `
            Administración de redes virtuales mediante la creación y asignación de <span>VLANs</span> en switches. Configuración de <span>nombres</span> y <span>puertos de acceso</span> para segmentar la red de manera eficiente. Implementación de <span>trunking (802.1Q)</span> para la comunicación entre switches y enrutamiento inter-VLAN con un router o switch capa 3. Se recomienda el uso de <span>VLAN nativa</span> y la asignación segura de puertos para evitar ataques como <span>VLAN hopping</span>.    
            Administración de redes virtuales:
            <br><br>${spacesDot} Creación en switches: <span>vlan 10 name Ventas</span>
            <br>${spacesDot} Asignación de puertos: <span>switchport mode access</span>
            <br>${spacesDot} Configuración de trunk: <span>switchport trunk encapsulation dot1q</span>
            <br>${spacesDot} Optimización con <span>spanning-tree portfast</span>
            <br>${spacesDot} Agregación de enlaces: <span>channel-group 1 mode active</span>
            <br>${spacesDot} Seguridad de puertos: <span>switchport port-security</span>
            <br>${spacesDot} Monitoreo con <span>show vlan brief</span> y <span>show interfaces switchport</span>
        `
    }
]

export const TitlesUsesTool: TitleType[] = [
    {
        title: "Como instalar Gns3",
        description: ""
    }
]