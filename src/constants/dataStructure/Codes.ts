export const Codes = [
/*--------------------------------------------------*/
`public class ArraysExample {
    public static void main(String[] args) {
        // Declarar arrays de diferentes tipos
        int[] intArray = new int[5]; // Array de enteros
        String[] stringArray = {"Apple", "Banana", "Cherry"}; // Array de cadenas
        char[] charArray = new char[10]; // Array de caracteres
        Object[] objectArray = new Object[3]; // Array de objetos
        
        // Acceder y modificar elementos del array
        intArray[0] = 10;
        stringArray[1] = "Blueberry";
        charArray[2] = 'A';
        objectArray[0] = new Object();
        
        // Imprimir elementos del array
        System.out.println("intArray[0]: " + intArray[0]);
        System.out.println("stringArray[1]: " + stringArray[1]);
        System.out.println("charArray[2]: " + charArray[2]);
    }
}`,
/*--------------------------------------------------*/
`import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;

public class CollectionsExample {
    public static void main(String[] args) {
        // Ejemplo de ArrayList
        List<String> arrayList = new ArrayList<>();
        arrayList.add("Java");
        arrayList.add("Python");
        System.out.println("ArrayList: " + arrayList);
        
        // Ejemplo de HashSet
        HashSet<Integer> hashSet = new HashSet<>();
        hashSet.add(10);
        hashSet.add(20);
        hashSet.add(20);
        System.out.println("HashSet: " + hashSet) -> HashSet: 10, 20
        
        // Ejemplo de HashMap
        HashMap<String, Integer> hashMap = new HashMap<>();
        hashMap.put("Alice", 25);
        hashMap.put("Bob", 30);
        System.out.println("HashMap: " + hashMap.get("Bob")) -> HashMap: 30
    }
}`,
/*--------------------------------------------------*/
`import java.util.Stack;
import java.util.Queue;
import java.util.LinkedList;

public class StackQueueExample {
    public static void main(String[] args) {
        // Ejemplo de Stack
        Stack<String> stack = new Stack<>();
        stack.push("First");
        stack.push("Second");
        System.out.println("Stack: " + stack.pop());
        
        // Ejemplo de Queue
        Queue<String> queue = new LinkedList<>();
        queue.add("First");
        queue.add("Second");
        System.out.println("Queue: " + queue.poll());
    }
}`,
/*--------------------------------------------------*/
`public class StackUsingArray {
    private int[] stack; // Array para almacenar los elementos
    private int top; // Índice del elemento en la parte superior de la pila

    // Constructor para inicializar la pila
    public SimpleStack(int size) {
        stack = new int[size];
        top = -1; // La pila está vacía al inicio
    }

    // Método para agregar un elemento a la pila (push)
    public void push(int value) {
        if (top < stack.length - 1) { // Verificar si hay espacio en la pila
            stack[++top] = value; // Incrementar top y agregar el valor
        } else {
            System.out.println("La pila está llena. No se puede agregar: " + value);
        }
    }

    // Método para eliminar un elemento de la pila (pop)
    public int pop() {
        if (top >= 0) { // Verificar si la pila no está vacía
            return stack[top--]; // Devolver el valor y decrementar top
        } else {
            System.out.println("La pila está vacía. No se puede eliminar.");
            return -1; // Valor de retorno por defecto si la pila está vacía
        }
    }

    // Método para ver el elemento en la parte superior de la pila (peek)
    public int peek() {
        if (top >= 0) {
            return stack[top];
        } else {
            System.out.println("La pila está vacía.");
            return -1;
        }
    }
}`,
/*--------------------------------------------------*/
`private void btnAgregarPilaActionPerformed(java.awt.event.ActionEvent evt) {                                             
    // Obtener el valor del TextField
    int valor = Integer.parseInt(txtValorPila.getText().trim());

    // Crear una instancia de la pila (si no existe)
    StackUsingArray pila = new StackUsingArray(10); // Tamaño de la pila: 10

    // Agregar el valor a la pila usando el método push
    pila.push(valor);

    // Mostrar un mensaje de éxito
    System.out.println("Valor agregado a la pila: " + valor);
}

private void btnEliminarPilaActionPerformed(java.awt.event.ActionEvent evt) {                                             
    // Crear una instancia de la pila (si no existe)
    StackUsingArray pila = new StackUsingArray(10); // Tamaño de la pila: 10

    // Eliminar el valor de la pila usando el método pop
    int valorEliminado = pila.pop();

    // Mostrar el valor eliminado
    if (valorEliminado != -1) {
        System.out.println("Valor eliminado de la pila: " + valorEliminado);
    }
}`,
/*--------------------------------------------------*/
`public class QueueUsingArray {
    private int[] queue; // Array para almacenar los elementos
    private int front; // Índice del elemento al frente de la cola
    private int rear; // Índice del elemento al final de la cola

    // Constructor para inicializar la cola
    public SimpleQueue(int size) {
        queue = new int[size];
        front = 0;
        rear = -1;
    }

    // Método para agregar un elemento a la cola (enqueue)
    public void enqueue(int value) {
        if (rear < queue.length - 1) { // Verificar si hay espacio en la cola
            queue[++rear] = value; // Incrementar rear y agregar el valor
        } else {
            System.out.println("La cola está llena. No se puede agregar: " + value);
        }
    }

    // Método para eliminar un elemento de la cola (dequeue)
    public int dequeue() {
        if (front <= rear) { // Verificar si la cola no está vacía
            return queue[front++]; // Devolver el valor y mover front
        } else {
            System.out.println("La cola está vacía. No se puede eliminar.");
            return -1; // Valor de retorno por defecto si la cola está vacía
        }
    }

    // Método para ver el elemento al frente de la cola (peek)
    public int peek() {
        if (front <= rear) {
            return queue[front];
        } else {
            System.out.println("La cola está vacía.");
            return -1;
        }
    }
}`,
/*--------------------------------------------------*/
`private void btnAgregarColaActionPerformed(java.awt.event.ActionEvent evt) {                                             
    // Obtener el valor del TextField
    int valor = Integer.parseInt(txtValorCola.getText().trim());

    // Crear una instancia de la cola (si no existe)
    QueueUsingArray cola = new QueueUsingArray(10); // Tamaño de la cola: 10

    // Agregar el valor a la cola usando el método enqueue
    cola.enqueue(valor);

    // Mostrar un mensaje de éxito
    System.out.println("Valor agregado a la cola: " + valor);
}

private void btnEliminarColaActionPerformed(java.awt.event.ActionEvent evt) {                                             
    // Crear una instancia de la cola (si no existe)
    QueueUsingArray cola = new QueueUsingArray(10); // Tamaño de la cola: 10

    // Eliminar el valor de la cola usando el método dequeue
    int valorEliminado = cola.dequeue();

    // Mostrar el valor eliminado
    if (valorEliminado != -1) {
        System.out.println("Valor eliminado de la cola: " + valorEliminado);
    }
}`,
/*--------------------------------------------------*/
`class Node {
    int data;
    Node left, right;
    public Node(int item) {
        data = item;
        left = right = null;
    }
}
    
public class BinaryTree {
    Node root;
    // Constructor
    BinaryTree() {
        root = null;
    }
    
    // Ejemplo de creación de un árbol binario
    public static void main(String[] args) {
        BinaryTree tree = new BinaryTree();

        tree.root = new Node(1);
        tree.root.left = new Node(2);
        tree.root.right = new Node(3);
        tree.root.left.left = new Node(4);
        tree.root.left.right = new Node(5);
        
        System.out.println("Árbol binario creado con raíz: " + tree.root.data);
    }
}`,
/*--------------------------------------------------*/
`public class TreeTraversals {
    public static void main(String[] args) {
        BinaryTree tree = new BinaryTree();

        tree.root = new Node(1);
        tree.root.left = new Node(2);
        tree.root.right = new Node(3);
        tree.root.left.left = new Node(4);
        tree.root.left.right = new Node(5);

        System.out.println("Recorrido In-Order:");
        new TreeTraversals().inOrder(tree.root);

        System.out.println("Recorrido Pre-Order:");
        new TreeTraversals().preOrder(tree.root);

        System.out.println("Recorrido Post-Order:");
        new TreeTraversals().postOrder(tree.root);
    }
}`,
/*--------------------------------------------------*/
`// Recorrido In-Order
public void inOrder(Node node) {
    if (node == null) return;
    inOrder(node.left);
    System.out.print(node.data + " ");
    inOrder(node.right);
}`,
/*--------------------------------------------------*/
`// Recorrido Pre-Order
public void preOrder(Node node) {
    if (node == null) return;
    System.out.print(node.data + " ");
    preOrder(node.left);
    preOrder(node.right);
}`,
/*--------------------------------------------------*/
`// Recorrido Post-Order
public void postOrder(Node node) {
    if (node == null) return;
    postOrder(node.left);
    postOrder(node.right);
    System.out.print(node.data + " ");
}`,
]