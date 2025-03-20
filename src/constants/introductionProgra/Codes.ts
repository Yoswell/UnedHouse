export const Codes = [
/* 1 --------------------------------------------------*/
`#include <iostream>
using namespace std;
int main() {
    // Imprime "¡Hola, Mundo!" en la consola
    cout << "¡Hola, Mundo!" << endl;
    return 0;
}`,


/* 2 --------------------------------------------------*/
`#include <iostream>
using namespace std;
int main() {
    // Declaración de variables de diferentes tipos
    int numero = 10;
    float decimal = 5.6;
    char letra = 'A';
    
    // Imprime los valores de las variables
    cout << "Entero: " << numero << endl;
    cout << "Decimal: " << decimal << endl;
    cout << "Carácter: " << letra << endl;
    
    return 0;
}`,


/* 3 --------------------------------------------------*/
`#include <iostream>
using namespace std;
int main() {
    int edad = 20;
    
    // Condicional para verificar si la persona es mayor de edad
    if (edad >= 18) {
        cout << "Eres mayor de edad." << endl;
    } else {
        cout << "Eres menor de edad." << endl;
    }
    
    return 0;
}`,


/* 4 --------------------------------------------------*/
`#include <iostream>
using namespace std;
int main() {
    // Bucle for que itera 5 veces
    for (int i = 1; i <= 5; i++) {
        cout << "Iteración: " << i << endl;
    }
    
    return 0;
}`,

/* 5 --------------------------------------------------*/
`#include <iostream>
using namespace std;
// Función que suma dos números enteros
int sumar(int a, int b) {
    return a + b;
}
int main() {
    // Llamada a la función sumar y muestra el resultado
    int resultado = sumar(5, 3);
    cout << "La suma es: " << resultado << endl;
    return 0;
}`,

/* 6 --------------------------------------------------*/
`#include <iostream>
using namespace std;
int main() {
    // Declaración de un arreglo de enteros
    int numeros[3] = {10, 20, 30};
    
    // Imprime los valores del arreglo
    cout << "Primer número: " << numeros[0] << endl;
    cout << "Segundo número: " << numeros[1] << endl;
    cout << "Tercer número: " << numeros[2] << endl;
    
    return 0;
}`,

/* 7 --------------------------------------------------*/
`#include <iostream>
using namespace std;
int main() {
    int numero = 10;
    int* puntero = &numero;  // Puntero que almacena la dirección de memoria de 'numero'
    
    // Imprime el valor y la dirección de memoria de 'numero'
    cout << "Valor de numero: " << numero << endl;
    cout << "Dirección de memoria de numero: " << puntero << endl;
    cout << "Valor de numero a través del puntero: " << *puntero << endl;
    
    return 0;
}`,

/* 8 --------------------------------------------------*/
`#include <iostream>
using namespace std;
// Definición de una clase Persona
class Persona {
public:
    string nombre;
    int edad;
    
    // Método para saludar
    void saludar() {
        cout << "Hola, soy " << nombre << " y tengo " << edad << " años." << endl;
    }
};
int main() {
    // Creación de un objeto de la clase Persona
    Persona persona1;
    persona1.nombre = "Juan";
    persona1.edad = 30;
    
    // Llamada al método saludar
    persona1.saludar();
    
    return 0;
}`,

/* 9 --------------------------------------------------*/
`#include <iostream>
using namespace std;
// Definición de una clase Persona con constructor y destructor
class Persona {
public:
    string nombre;
    int edad;
    
    // Constructor
    Persona(string n, int e) {
        nombre = n;
        edad = e;
    }
    
    // Destructor
    ~Persona() {
        cout << "Objeto Persona destruido" << endl;
    }
    
    // Método para saludar
    void saludar() {
        cout << "Hola, soy " << nombre << " y tengo " << edad << " años." << endl;
    }
};
int main() {
    // Creación de un objeto de la clase Persona usando el constructor
    Persona persona1("Maria", 25);
    persona1.saludar();
    
    return 0;
}`,

/* 10 --------------------------------------------------*/
`#include <iostream>
using namespace std;
// Clase base Animal
class Animal {
public:
    // Método para hacer un sonido genérico
    void sonido() {
        cout << "El animal hace un sonido." << endl;
    }
};
// Clase derivada Perro que hereda de Animal
class Perro : public Animal {
public:
    // Sobrescritura del método sonido
    void sonido() {
        cout << "El perro ladra." << endl;
    }
};
int main() {
    // Creación de un objeto de la clase Perro
    Perro perro1;
    perro1.sonido();  // Llama al método sobrescrito
    
    return 0;
}`,

/* 11 --------------------------------------------------*/
`#include <iostream>
#include <fstream>
using namespace std;
int main() {
    // Escribir en un archivo
    ofstream archivo("ejemplo.txt");
    archivo << "Este es un texto en un archivo." << endl;
    archivo.close();
    
    // Leer desde un archivo
    ifstream archivoLeer("ejemplo.txt");
    string contenido;
    while (getline(archivoLeer, contenido)) {
        cout << contenido << endl;
    }
    archivoLeer.close();
    
    return 0;
}`,

/* 12 --------------------------------------------------*/
`#include <iostream>
using namespace std;
// Plantilla de función para sumar dos valores de cualquier tipo
template <typename T>
T sumar(T a, T b) {
    return a + b;
}
int main() {
    // Uso de la plantilla con enteros y decimales
    cout << "Suma de enteros: " << sumar(5, 3) << endl;
    cout << "Suma de decimales: " << sumar(5.5, 3.5) << endl;
    
    return 0;
}`,

/* 13 --------------------------------------------------*/
`#include <iostream>
using namespace std;
// Clase Vector con sobrecarga del operador +
class Vector {
public:
    int x, y;
    
    // Constructor
    Vector(int x, int y) : x(x), y(y) {}
    
    // Sobrecarga del operador +
    Vector operator+(const Vector& otro) {
        return Vector(x + otro.x, y + otro.y);
    }
};
int main() {
    // Creación de dos objetos Vector y suma de ellos
    Vector v1(1, 2);
    Vector v2(3, 4);
    Vector resultado = v1 + v2;
    
    // Imprime el resultado de la suma
    cout << "Resultado: (" << resultado.x << ", " << resultado.y << ")" << endl;
    return 0;
}`,

/* 14 --------------------------------------------------*/
`#include <iostream>
using namespace std;
int main() {
    try {
        int edad = -5;
        // Lanza una excepción si la edad es negativa
        if (edad < 0) {
            throw invalid_argument("La edad no puede ser negativa.");
        }
    } catch (const invalid_argument& e) {
        // Captura y maneja la excepción
        cout << "Error: " << e.what() << endl;
    }
    return 0;
}`,

/* 15 --------------------------------------------------*/
`#include <iostream>
#include <vector>
using namespace std;
int main() {
    // Creación de un vector de enteros
    vector<int> numeros = {1, 2, 3, 4, 5};
    
    // Recorre el vector e imprime cada elemento
    for (int num : numeros) {
        cout << num << " ";
    }
    return 0;
}`,

/* 16 --------------------------------------------------*/
`#include <iostream>
#include <thread>
using namespace std;
// Función que se ejecutará en un hilo
void tarea() {
    cout << "Hilo en ejecución." << endl;
}
int main() {
    // Creación de un hilo que ejecuta la función tarea
    thread hilo(tarea);
    hilo.join();  // Espera a que el hilo termine
    return 0;
}`,

/* 17 --------------------------------------------------*/
`#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;
int main() {
    // Creación de un vector de enteros
    vector<int> numeros = {5, 3, 4, 1, 2};
    
    // Ordena el vector usando una función lambda
    sort(numeros.begin(), numeros.end(), [](int a, int b) {
        return a < b;
    });
    
    // Imprime el vector ordenado
    for (int num : numeros) {
        cout << num << " ";
    }
    return 0;
}`,

]