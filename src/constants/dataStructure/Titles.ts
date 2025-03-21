import { TitleType } from "@/types/type";

export const TitlesStructureLeft: TitleType[] = [
    {
        title: "Arrays en Java",
        description: "Un <span>array</span> es un bloque de memoria contiguo y de tamaño fijo que almacena elementos del mismo tipo. Java admite arrays <span>unidimensionales</span> y <span>multidimensionales</span>. Los arrays proporcionan un tiempo de acceso <span>O(1)</span> para leer y escribir elementos usando índices. Sin embargo, su tamaño fijo puede ser una limitación al trabajar con datos dinámicos. Los arrays se declaran usando la sintaxis <span>int[] arr = new int[size]</span>."
    },
    {
        title: "Listas y Colecciones en Java",
        description: "El <span>Collections Framework</span> de Java proporciona estructuras de datos dinámicas como <span>ArrayList</span>, <span>LinkedList</span> y <span>Vector</span>. A diferencia de los arrays, estas estructuras pueden crecer o reducirse dinámicamente. Forman parte del paquete <span>java.util</span> e implementan interfaces como <span>List</span>, <span>Set</span> y <span>Map</span>. Las listas son ideales para escenarios donde el número de elementos es desconocido o cambia con frecuencia."
    },
    {
        title: "Pilas y Colas en Java",
        description: "Una <span>pila</span> es una estructura <span>LIFO</span> (Last In, First Out), mientras que una <span>cola</span> es una estructura <span>FIFO</span> (First In, First Out). En Java, las pilas se pueden implementar usando arrays o la clase <span>Stack</span>, y las colas se pueden implementar usando la interfaz <span>Queue</span>. Estas estructuras son ampliamente utilizadas en algoritmos como <span>DFS</span> (Depth-First Search) y <span>BFS</span> (Breadth-First Search)."
    },
    {
        title: "Pilas en Java",
        description: "Una <span>pila</span> es una estructura de datos <span>LIFO</span> (Last In, First Out) donde los elementos se agregan y eliminan desde la parte superior. En Java, las pilas se pueden implementar usando la clase <span>Stack</span> del paquete <span>java.util</span>. Las operaciones comunes incluyen <span>push</span> (para agregar un elemento), <span>pop</span> (para eliminar el elemento superior) y <span>peek</span> (para ver el elemento superior sin eliminarlo). Las pilas son ampliamente utilizadas en algoritmos como <span>DFS</span> (Depth-First Search) y para gestionar llamadas de funciones en recursión."
    },
    {
        title: "Uso de Pilas en Interfaz Gráfica",
        description: "Para utilizar una <span>pila</span> en una interfaz gráfica, puedes asociar los métodos de la pila (como <span>push</span>, <span>pop</span> y <span>peek</span>) a eventos de botones. Por ejemplo, al hacer clic en un botón <span>Agreagr</span>, puedes tomar el valor de un <span>TextField</span> y agregarlo a la pila usando el método <span>push</span>. De manera similar, un botón <span>Eliminar</span> puede llamar al método <span>pop</span> para quitar el elemento superior de la pila. Esto permite interactuar con la pila de manera dinámica y visual."
    },
    {
        title: "Colas en Java",
        description: "Una <span>cola</span> es una estructura de datos <span>FIFO</span> (First In, First Out) donde los elementos se agregan al final y se eliminan desde el frente. En Java, las colas se pueden implementar usando la interfaz <span>Queue</span>, con implementaciones comunes como <span>LinkedList</span>. Las operaciones clave incluyen <span>add</span> (para insertar un elemento), <span>poll</span> (para eliminar y devolver el elemento del frente) y <span>peek</span> (para ver el elemento del frente sin eliminarlo). Las colas son esenciales en escenarios como la planificación de tareas y algoritmos <span>BFS</span> (Breadth-First Search)."
    },
    {
        title: "Uso de Colas en Interfaz Gráfica",
        description: "Para utilizar una <span>cola</span> en una interfaz gráfica, puedes vincular los métodos de la cola (como <span>enqueue</span>, <span>dequeue</span> y <span>peek</span>) a eventos de botones. Por ejemplo, al hacer clic en un botón <span>Agregar</span>, puedes tomar el valor de un <span>TextField</span> y agregarlo a la cola usando el método <span>enqueue</span>. Un botón <span>Eliminar</span> puede llamar al método <span>dequeue</span> para quitar el elemento del frente de la cola. Esto permite interactuar con la cola de manera dinámica y visual."
    },
    {
        title: "Árboles Binarios en Java",
        description: "Un <span>árbol binario</span> es una estructura de datos jerárquica donde cada nodo tiene como máximo dos hijos: un <span>hijo izquierdo</span> y un <span>hijo derecho</span>. Los árboles binarios se utilizan en aplicaciones como <span>búsqueda</span>, <span>ordenamiento</span> y <span>representación de datos jerárquicos</span>. Se pueden implementar usando arrays o estructuras basadas en nodos."
    },
    {
        title: "Recorridos de Árboles",
        description: "Los recorridos de árboles son métodos para visitar todos los nodos de un árbol binario. Los principales recorridos son <span>in-order</span> (izquierda, raíz, derecha), <span>pre-order</span> (raíz, izquierda, derecha) y <span>post-order</span> (izquierda, derecha, raíz). Cada recorrido tiene casos de uso específicos, como imprimir nodos en orden ascendente (in-order) o crear una copia del árbol (pre-order)."
    },
    {
        title: "Recorrido In-Order",
        description: "El <span>recorrido in-order</span> visita los nodos en el orden: subárbol izquierdo, raíz, subárbol derecho. Se utiliza comúnmente para imprimir los nodos de un árbol binario de búsqueda en orden ascendente. Este recorrido se implementa de forma recursiva o iterativa usando una pila."
    },
    {
        title: "Recorrido Pre-Order",
        description: "El <span>recorrido pre-order</span> visita los nodos en el orden: raíz, subárbol izquierdo, subárbol derecho. Es útil para crear una copia del árbol o serializar su estructura. Este recorrido a menudo se implementa de forma recursiva."
    },
    {
        title: "Recorrido Post-Order",
        description: "El <span>recorrido post-order</span> visita los nodos en el orden: subárbol izquierdo, subárbol derecho, raíz. Se utiliza para eliminar un árbol o evaluar expresiones en árboles de expresiones. Este recorrido también se implementa de forma recursiva."
    }
]

export const TitlesStructureRight: TitleType[] = [
    {
        title: "Recursos Externos",
        description: "Para profundizar en tu comprensión de las estructuras de datos en Java, explora recursos como <span>GeeksforGeeks</span>, <span>LeetCode</span> y la documentación oficial de Java. Libros como *Data Structures and Algorithms in Java* de Robert Lafore ofrecen explicaciones y ejemplos completos."
    }
]