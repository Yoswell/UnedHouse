import { TitleType } from "@/types/type"
const spaces = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;●&nbsp;`;

export const TitlesNetworkILeft: TitleType[] = [
    {
        title: "Configuración Inicial del Router",
        description: "Asignación de <span>hostname</span>, contraseñas en consola y TTY (<span>line console/aux</span>), y configuración de <span>banners legales</span>. Uso de <span>service password-encryption</span> para proteger contraseñas."
    },
    {
        title: "Contraseñas y Seguridad Básica",
        description: "Configuración de contraseñas en <span>terminal</span> y <span>líneas TTY</span> para controlar el acceso al dispositivo. Se establecen credenciales en <span>líneas de consola (console)</span>, <span>líneas virtuales (vty)</span> y <span>líneas auxiliares (aux)</span> mediante el uso de <span>password</span> y el comando <span>login</span>. Además, se recomienda utilizar <span>enable secret</span> en lugar de <span>enable password</span> para proteger el acceso al modo privilegiado con cifrado seguro. También se puede configurar <span>exec-timeout</span> para cerrar sesiones inactivas automáticamente, reduciendo riesgos de seguridad."
    },    
    {
        title: "Configuración de Interfaces y Subinterfaces",
        description: "Asignación de IPs a interfaces físicas y lógicas (<span>GigabitEthernet, Serial</span>). Creación de subinterfaces para VLANs con <span>encapsulation dot1Q</span>. Uso de <span>no shutdown</span> para activación."
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
            <br><br>${spaces} Backup con <span>copy running-config tftp://192.168.1.100/router.cfg</span>
            <br>${spaces} Restauración mediante <span>configure replace</span>
            <br>${spaces} Borrado seguro con <span>write erase</span> + <span>reload</span>
            <br>${spaces} Comparación de configuraciones con <span>show archive config differences</span>
            <br>${spaces} Uso de <span>archive</span> para versionado automático
            <br>${spaces} Configuración de servidores <span>TFTP</span> y <span>SCP</span> para almacenamiento externo
            <br>${spaces} Implementación de <span>configuration rollback</span> para revertir cambios críticos
        `
    },      
    {
        title: "Servicio DHCP en el Router",
        description: `
            Configuración del servicio <span>DHCP</span> en el router para asignar dinámicamente direcciones IP a los dispositivos en la red. Se establece un <span>pool de direcciones</span> con un rango específico, configurando opciones como <span>tiempo de arrendamiento</span>, <span>puerta de enlace predeterminada</span> y <span>servidores DNS</span>. Además, se pueden configurar <span>reservas de IP</span> para asignar direcciones fijas a dispositivos específicos dentro de la red. La implementación de DHCP mejora la administración de direcciones IP y facilita la configuración de dispositivos sin intervención manual.
            Implementación completa de servidor DHCP:
            <br><br>${spaces} Creación de pools con <span>ip dhcp pool LAN</span>
            <br>${spaces} Exclusión de IPs estáticas (<span>ip dhcp excluded-address</span>)
            <br>${spaces} Asignación de parámetros: <span>default-router</span>, <span>dns-server</span>
            <br>${spaces} Opciones avanzadas: <span>lease infinite</span>, <span>domain-name</span>
            <br>${spaces} Soporte para DHCPv6 (<span>ipv6 dhcp pool</span>)
            <br>${spaces} Monitoreo con <span>show ip dhcp binding</span>
            <br>${spaces} Configuración de DHCP relay con <span>ip helper-address</span>
        `
    },
    {
        title: "Configuración de VLANs",
        description: `
            Administración de redes virtuales mediante la creación y asignación de <span>VLANs</span> en switches. Configuración de <span>nombres</span> y <span>puertos de acceso</span> para segmentar la red de manera eficiente. Implementación de <span>trunking (802.1Q)</span> para la comunicación entre switches y enrutamiento inter-VLAN con un router o switch capa 3. Se recomienda el uso de <span>VLAN nativa</span> y la asignación segura de puertos para evitar ataques como <span>VLAN hopping</span>.    
            Administración de redes virtuales:
            <br><br>${spaces} Creación en switches: <span>vlan 10 name Ventas</span>
            <br>${spaces} Asignación de puertos: <span>switchport mode access</span>
            <br>${spaces} Configuración de trunk: <span>switchport trunk encapsulation dot1q</span>
            <br>${spaces} Optimización con <span>spanning-tree portfast</span>
            <br>${spaces} Agregación de enlaces: <span>channel-group 1 mode active</span>
            <br>${spaces} Seguridad de puertos: <span>switchport port-security</span>
            <br>${spaces} Monitoreo con <span>show vlan brief</span> y <span>show interfaces switchport</span>
        `
    }
]

export const TitlesNetworkIRight: TitleType[] = [
    {
        title: "",
        description: ""
    }
]