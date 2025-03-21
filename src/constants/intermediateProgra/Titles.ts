import { TitleType } from "@/types/type"

export const TitlesInterLeft: TitleType[] = [
    {
        title: "Introducción a Java",
        description: "Java es un lenguaje de programación de alto nivel y <span>orientado a objetos</span> diseñado para la independencia de plataforma a través de la <span>Máquina Virtual de Java (JVM)</span>. Es ampliamente utilizado para construir aplicaciones empresariales, aplicaciones Android y servicios web. El principio de <span>escribe una vez, ejecuta en cualquier lugar</span> de Java permite que el código compilado se ejecute en cualquier dispositivo con una JVM. Su fuerte gestión de memoria, su robusta biblioteca estándar y su énfasis en la seguridad lo convierten en una opción popular para sistemas a gran escala."
    },
    {
        title: "Variables y Tipos de Datos",
        description: "Java admite tipos de datos primitivos como <span>int</span>, <span>double</span> y <span>boolean</span>, así como tipos de referencia como <span>String</span> y arreglos. Las variables deben declararse con un tipo específico, que no puede cambiar durante la ejecución. Java es <span>estáticamente tipado</span>, lo que garantiza la seguridad de tipos en tiempo de compilación. Elegir el tipo de dato correcto optimiza el uso de memoria y previene errores en las operaciones."
    },
    {
        title: "Estructuras de Control (Condicionales)",
        description: "Las declaraciones condicionales como <span>if</span>, <span>else</span> y <span>switch</span> controlan el flujo de ejecución. La declaración <span>if</span> evalúa una expresión booleana, mientras que <span>switch</span> verifica la igualdad con múltiples constantes. Java 14+ introduce <span>expresiones switch</span> con sintaxis de flecha para un código más limpio. Estas estructuras permiten que los programas tomen decisiones dinámicamente basadas en entradas o condiciones."
    },
    {
        title: "Bucles",
        description: "Java proporciona bucles <span>for</span>, <span>while</span> y <span>do-while</span>. El <span>bucle for mejorado</span> simplifica la iteración sobre arreglos y colecciones. Los bucles automatizan tareas repetitivas, como procesar elementos en una lista. Un control adecuado de los bucles previene bucles infinitos y garantiza una ejecución eficiente."
    },
    {
        title: "Métodos",
        description: "Los métodos en Java son bloques de código reutilizables que realizan tareas específicas. Pueden aceptar parámetros, devolver valores y ser sobrecargados (múltiples métodos con el mismo nombre pero diferentes parámetros). Los métodos promueven la <span>reutilización de código</span> y el diseño modular. El método <span>main</span> es el punto de entrada de las aplicaciones Java."
    },
    {
        title: "Arreglos",
        description: "Los arreglos almacenan múltiples valores del mismo tipo en memoria contigua. Tienen un tamaño fijo después de la inicialización. Java admite arreglos unidimensionales y multidimensionales. Los arreglos están indexados desde cero, y los elementos se acceden mediante su posición. Útiles para escenarios como almacenar calificaciones de estudiantes o datos de píxeles."
    },
    {
        title: "Referencias a Objetos",
        description: "En Java, los objetos se acceden a través de <span>referencias</span> (direcciones de memoria), no directamente. A diferencia de C++, Java no admite punteros para la manipulación de memoria. Asignar objetos a variables copia referencias, no el objeto real. Este mecanismo es crucial para comprender la interacción de objetos y la gestión de memoria."
    },
    {
        title: "Clases y Objetos",
        description: "Java es un lenguaje <span>orientado a objetos</span> donde las clases definen planos para objetos. Una clase encapsula <span>campos</span> (datos) y <span>métodos</span> (comportamiento). Los objetos son instancias creadas en tiempo de ejecución usando la palabra clave <span>new</span>. Conceptos como herencia, polimorfismo y encapsulación forman los pilares de la POO en Java."
    },
    {
        title: "Constructores",
        description: "Los constructores inicializan los objetos cuando se crean. Tienen el mismo nombre que la clase y no tienen tipo de retorno. Java proporciona un <span>constructor predeterminado</span> si no se define ninguno. Los constructores sobrecargados permiten diferentes parámetros de inicialización. Los constructores garantizan que los objetos comiencen en un estado válido."
    },
    {
        title: "Herencia",
        description: "La herencia permite que una clase (<span>subclase</span>) herede campos y métodos de otra clase (<span>superclase</span>). Esto promueve la reutilización de código y el modelado jerárquico. Java usa la palabra clave <span>extends</span> para la herencia. Las subclases pueden sobrescribir métodos para proporcionar implementaciones específicas."
    },
    {
        title: "Manejo de Archivos",
        description: "Java maneja archivos a través de clases como <span>File</span>, <span>FileReader</span> y <span>FileWriter</span>. El paquete <span>java.nio</span> ofrece API modernas para operaciones de archivos (por ejemplo, <span>Files</span> y <span>Paths</span>). La gestión adecuada de recursos con <span>try-with-resources</span> garantiza que los archivos se cierren automáticamente, evitando fugas."
    },
    {
        title: "Genéricos",
        description: "Los genéricos permiten clases, interfaces y métodos seguros en cuanto a tipos que funcionan con cualquier tipo de dato. Eliminan la necesidad de conversiones y reducen errores en tiempo de ejecución. Se usan comúnmente en colecciones como <span>ArrayList&lt;String&gt;</span>. Los genéricos mejoran la flexibilidad y reutilización del código mientras mantienen verificaciones de tipo en tiempo de compilación."
    },
    {
        title: "Manejo de Excepciones",
        description: "Java usa <span>try</span>, <span>catch</span>, <span>finally</span> y <span>throw</span> para gestionar excepciones. Las excepciones verificadas deben declararse o manejarse, mientras que las excepciones no verificadas (por ejemplo, <span>NullPointerException</span>) son opcionales. Se pueden crear excepciones personalizadas extendiendo la clase <span>Exception</span>."
    },
    {
        title: "Marco de Colecciones",
        description: "El Marco de Colecciones de Java incluye interfaces como <span>List</span>, <span>Set</span> y <span>Map</span>, con implementaciones como <span>ArrayList</span>, <span>HashSet</span> y <span>HashMap</span>. Estas estructuras de datos simplifican el almacenamiento y la manipulación de grupos de objetos. Los iteradores y los bucles mejorados facilitan el recorrido."
    },
    {
        title: "Multihilo",
        description: "Java admite programación concurrente a través de <span>Thread</span> y <span>Runnable</span>. El marco <span>ExecutorService</span> (Java 5+) simplifica la gestión de hilos. La sincronización con bloques o métodos <span>synchronized</span> previene condiciones de carrera. Es crucial para tareas como procesamiento paralelo o manejo de eventos de interfaz de usuario."
    },
    {
        title: "Expresiones Lambda",
        description: "Las expresiones lambda (Java 8+) permiten una implementación concisa de interfaces funcionales. Se usan extensivamente con la <span>API de Streams</span> para procesar colecciones. Las lambdas reducen el código repetitivo y hacen que operaciones como filtrado o mapeo sean más legibles."
    },
    {
        title: "Interfaces",
        description: "Las interfaces definen contratos (firmas de métodos) que las clases deben implementar. Java 8+ permite métodos <span>default</span> y <span>static</span> en interfaces. Se utilizan para la abstracción y para lograr polimorfismo. Una clase puede implementar múltiples interfaces, lo que permite un diseño flexible."
    }
]

export const TitlesInterRight: TitleType[] = [
    {
        title: "Recursos Externos",
        description: "Explorar recursos externos es esencial para fortalecer y ampliar tu conocimiento de Java. Existe una amplia selección de materiales disponibles, incluyendo documentación oficial, libros especializados, foros de discusión y tutoriales en línea. Plataformas como Oracle Docs, JavaTpoint y Stack Overflow pueden ayudarte a profundizar en conceptos avanzados y solucionar problemas específicos."
    }
]