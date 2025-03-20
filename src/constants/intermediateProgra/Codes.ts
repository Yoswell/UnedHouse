export const Codes = [
/* 1 --------------------------------------------------*/
`public class HelloWorld {
    public static void main(String[] args) {
        // Imprime "¡Hola, Mundo!" en la consola
        System.out.println("¡Hola, Mundo!");
    }
}`,

/* 2 --------------------------------------------------*/
`public class Variables {
    public static void main(String[] args) {
        // Declaración de variables de diferentes tipos
        int entero = 10;
        double decimal = 5.6;
        char letra = 'A';
        boolean esVerdadero = true;
        
        // Imprime los valores de las variables
        System.out.println("Entero: " + entero);
        System.out.println("Decimal: " + decimal);
        System.out.println("Carácter: " + letra);
        System.out.println("Booleano: " + esVerdadero);
    }
}`,

/* 3 --------------------------------------------------*/
`public class Condicional {
    public static void main(String[] args) {
        int edad = 20;
        
        // Condicional para verificar si la persona es mayor de edad
        if (edad >= 18) {
            System.out.println("Eres mayor de edad.");
        } else {
            System.out.println("Eres menor de edad.");
        }
    }
}`,

/* 4 --------------------------------------------------*/
`public class Bucles {
    public static void main(String[] args) {
        // Bucle for que itera 5 veces
        for (int i = 1; i <= 5; i++) {
            System.out.println("Iteración: " + i);
        }
        
        // Bucle while que se ejecuta mientras el contador sea menor que 3
        int contador = 0;
        while (contador < 3) {
            System.out.println("Contador: " + contador);
            contador++;
        }
    }
}`,

/* 5 --------------------------------------------------*/
`public class Metodos {
    // Método estático para sumar dos números enteros
    static int sumar(int a, int b) {
        return a + b;
    }
    
    public static void main(String[] args) {
        // Llamada al método sumar y muestra el resultado
        int resultado = sumar(5, 3);
        System.out.println("La suma es: " + resultado);
    }
}`,

/* 6 --------------------------------------------------*/
`public class Arreglos {
    public static void main(String[] args) {
        // Declaración de un arreglo de enteros
        int[] numeros = {10, 20, 30};
        System.out.println("Primer número: " + numeros[0]);
        
        // Iterar sobre el arreglo usando for-each
        for (int num : numeros) {
            System.out.println(num);
        }
    }
}`,

/* 7 --------------------------------------------------*/
`public class Referencias {
    public static void main(String[] args) {
        // Declaración de dos variables String
        String str1 = "Hola";
        String str2 = str1; // str2 apunta al mismo objeto que str1
        
        // Modificación de str1
        str1 = "Mundo";
        System.out.println("str1: " + str1); // Mundo
        System.out.println("str2: " + str2); // Hola (no cambia porque es inmutable)
    }
}`,

/* 8 --------------------------------------------------*/
`class Persona {
    String nombre;
    int edad;
    
    // Método para saludar
    void saludar() {
        System.out.println("Hola, soy " + nombre);
    }
}
public class Clases {
    public static void main(String[] args) {
        // Creación de un objeto de la clase Persona
        Persona persona1 = new Persona();
        persona1.nombre = "Juan";
        persona1.saludar(); // Llama al método saludar
    }
}`,

/* 9 --------------------------------------------------*/
`class Coche {
    String marca;
    
    // Constructor de la clase Coche
    Coche(String marca) {
        this.marca = marca;
    }
}
public class Constructores {
    public static void main(String[] args) {
        // Creación de un objeto de la clase Coche usando el constructor
        Coche coche1 = new Coche("Toyota");
        System.out.println("Marca: " + coche1.marca);
    }
}`,

/* 10 --------------------------------------------------*/
`class Animal {
    // Método para hacer un sonido genérico
    void hacerSonido() {
        System.out.println("Sonido genérico");
    }
}
class Perro extends Animal {
    // Sobrescritura del método hacerSonido
    @Override
    void hacerSonido() {
        System.out.println("Guau guau");
    }
}
public class Herencia {
    public static void main(String[] args) {
        // Creación de un objeto de la clase Perro
        Perro perro1 = new Perro();
        perro1.hacerSonido(); // Llama al método sobrescrito
    }
}`,

/* 11 --------------------------------------------------*/
`import java.io.File;
import java.io.FileWriter;
public class Archivos {
    public static void main(String[] args) {
        try {
            // Escribir en un archivo
            FileWriter escritor = new FileWriter("archivo.txt");
            escritor.write("Texto de ejemplo");
            escritor.close();
        } catch (Exception e) {
            // Manejo de excepciones
            System.out.println("Error: " + e.getMessage());
        }
    }
}`,

/* 12 --------------------------------------------------*/
`import java.util.ArrayList;
public class Genericos {
    public static void main(String[] args) {
        // Creación de una lista genérica de tipo String
        ArrayList<String> nombres = new ArrayList<>();
        nombres.add("Ana");
        nombres.add("Luis");
        System.out.println("Lista: " + nombres);
    }
}`,

/* 13 --------------------------------------------------*/
`public class Excepciones {
    public static void main(String[] args) {
        try {
            // Intento de división por cero
            int resultado = 10 / 0;
        } catch (ArithmeticException e) {
            // Captura de excepción
            System.out.println("Error: División por cero");
        } finally {
            // Bloque finally que siempre se ejecuta
            System.out.println("Bloque finally ejecutado");
        }
    }
}`,

/* 14 --------------------------------------------------*/
`import java.util.HashMap;
public class Colecciones {
    public static void main(String[] args) {
        // Creación de un HashMap para almacenar pares clave-valor
        HashMap<String, Integer> edades = new HashMap<>();
        edades.put("Ana", 25);
        edades.put("Luis", 30);
        System.out.println("Edad de Ana: " + edades.get("Ana"));
    }
}`,

/* 15 --------------------------------------------------*/
`public class Hilos implements Runnable {
    // Método run que se ejecuta en el hilo
    public void run() {
        System.out.println("Hilo en ejecución");
    }
    
    public static void main(String[] args) {
        // Creación y ejecución de un hilo
        Thread hilo = new Thread(new Hilos());
        hilo.start();
    }
}`,

/* 16 --------------------------------------------------*/
`import java.util.List;
import java.util.Arrays;
public class Lambdas {
    public static void main(String[] args) {
        // Creación de una lista de nombres
        List<String> nombres = Arrays.asList("Ana", "Luis", "Carlos");
        
        // Iteración sobre la lista usando una expresión lambda
        nombres.forEach(nombre -> System.out.println(nombre));
    }
}`,

/* 17 --------------------------------------------------*/
`interface Figura {
    // Método abstracto para calcular el área
    double calcularArea();
}
class Circulo implements Figura {
    double radio;
    
    // Constructor de la clase Circulo
    Circulo(double radio) {
        this.radio = radio;
    }
    
    // Implementación del método calcularArea
    @Override
    public double calcularArea() {
        return Math.PI * radio * radio;
    }
}
public class Interfaces {
    public static void main(String[] args) {
        // Creación de un objeto de la clase Circulo
        Figura figura = new Circulo(3);
        System.out.println("Área: " + figura.calcularArea());
    }
}`
]