export const Codes = [
/* 1 --------------------------------------------------*/
`Algoritmo HolaMundo  
    // Muestra un mensaje en pantalla
    Escribir "¡Hola, Mundo!"  
FinAlgoritmo`,

/* 2 --------------------------------------------------*/
`Algoritmo EjemploCondicional  
    // Declarar una variable para almacenar la edad
    Definir edad Como Entero  
    Escribir "Ingresa tu edad:"  
    Leer edad  
    
    // Verificar si la edad es mayor o igual a 18
    Si edad >= 18 Entonces  
        Escribir "Eres adulto."  
    Sino  
        Escribir "Eres menor de edad."  
    FinSi  
FinAlgoritmo`,

/* 3 --------------------------------------------------*/
`Algoritmo EjemploArreglo  
    // Definir un arreglo para almacenar 5 notas
    Definir notas Como Real[5]  
    
    // Llenar el arreglo con valores ingresados por el usuario
    Para i = 0 Hasta 4 Hacer  
        Escribir "Ingresa la nota ", i+1, ":"  
        Leer notas[i]  
    FinPara  
    
    // Mostrar las notas ingresadas
    Escribir "Las notas ingresadas son:"  
    Para i = 0 Hasta 4 Hacer  
        Escribir notas[i]  
    FinPara  
FinAlgoritmo`,

/* 4 --------------------------------------------------*/
`Funcion Sumar(a, b) -> resultado  
    // Función que suma dos números y devuelve el resultado
    Definir resultado Como Entero  
    resultado = a + b  
FinFuncion  

Algoritmo UsoFuncion  
    // Declarar variables
    Definir x, y, suma Como Entero  
    Escribir "Ingresa dos números:"  
    Leer x, y  
    
    // Llamar a la función Sumar
    suma = Sumar(x, y)  
    
    // Mostrar el resultado
    Escribir "La suma es: ", suma  
FinAlgoritmo`,

/* 5 --------------------------------------------------*/
`Algoritmo EjemploTipoDeDato  
    // Declarar variables de diferentes tipos de datos
    Definir nombre Como Cadena  
    Definir nota Como Real  
    Definir aprobado Como Booleano  
    
    // Asignar valores a las variables
    nombre = "Alex"  
    nota = 85.5  
    aprobado = nota >= 60  
    
    // Mostrar los valores almacenados
    Escribir "Nombre: ", nombre  
    Escribir "Resultado: ", aprobado  
FinAlgoritmo`,

/* 6 --------------------------------------------------*/
`Algoritmo EjemploEntradaSalida  
    // Leer y mostrar una ciudad ingresada por el usuario
    Definir ciudad Como Cadena  
    Escribir "Ingresa tu ciudad:"  
    Leer ciudad  
    Escribir "Vives en: ", ciudad  
FinAlgoritmo`,

/* 7 --------------------------------------------------*/
`Algoritmo EjemploError  
    // Leer un número y evitar división por cero
    Definir numero Como Entero  
    Escribir "Ingresa un número:"  
    Leer numero  
    
    Si numero <> 0 Entonces  
        Escribir "100 dividido entre ", numero, " es ", 100/numero  
    Sino  
        Escribir "Error: División por cero."  
    FinSi  
FinAlgoritmo`,

/* 8 --------------------------------------------------*/
`Funcion CalcularArea(largo, ancho) -> area  
    // Calcula el área de un rectángulo
    Definir area Como Real  
    area = largo * ancho  
FinFuncion`,

/* 9 --------------------------------------------------*/
`Algoritmo MenuSimple
    Escribir ═══════════════════════════════════
    Escribir ║         MENÚ PRINCIPAL
    Escribir ═══════════════════════════════════
    Escribir ║ 1. Opción
    Escribir ║ 2. Opción
    Escribir ║ 3. Opción
    Escribir ║ 4. Salir
    Escribir ═══════════════════════════════════

    Escribir ********************************
    Escribir *         MENÚ PRINCIPAL       *
    Escribir ********************************
    Escribir * 1. Opción                    *
    Escribir * 2. Opción                    *
    Escribir * 3. Opción                    *
    Escribir * 4. Salir                     *
    Escribir ********************************

    Escribir [------------------------------]
    Escribir [         MENÚ PRINCIPAL       ]
    Escribir [------------------------------]
    Escribir [ 1 ] Opción                   ]
    Escribir [ 2 ] Opción                   ]
    Escribir [ 3 ] Opción                   ]
    Escribir [ 4 ] Salir                    ]
    Escribir [------------------------------]

    Escribir ╭─────────────────────────────────╮
    Escribir │         MENÚ PRINCIPAL
    Escribir ├─────────────────────────────────┤
    Escribir │ 1 → Opción 
    Escribir │ 2 → Opción 
    Escribir │ 3 → Opción 
    Escribir │ 4 → Salir
    Escribir ╰─────────────────────────────────╯
FinAlgoritmo
`,

/* 10 --------------------------------------------------*/
`Funcion Factorial(n) -> resultado  
    // Función recursiva para calcular el factorial de un número
    Si n == 0 Entonces  
        resultado = 1  
    Sino  
        resultado = n * Factorial(n - 1)  
    FinSi  
FinFuncion  

Algoritmo EjemploRecursividad  
    // Llamar a la función Factorial y mostrar el resultado
    Definir num Como Entero  
    Escribir "Ingrese un número:"  
    Leer num  
    Escribir "El factorial de ", num, " es: ", Factorial(num)  
FinAlgoritmo`,

/* 11 --------------------------------------------------*/
`Algoritmo OrdenamientoBurbuja  
    // Implementación del algoritmo de ordenamiento burbuja
    Definir arreglo Como Entero[5]  
    Definir temp Como Entero  
    arreglo = [5, 3, 8, 1, 2]  
    Para i = 0 Hasta 4 Hacer  
        Para j = 0 Hasta 3 Hacer  
            Si arreglo[j] > arreglo[j+1] Entonces  
                temp = arreglo[j]  
                arreglo[j] = arreglo[j+1]  
                arreglo[j+1] = temp  
            FinSi  
        FinPara  
    FinPara  
    
    // Mostrar el arreglo ordenado
    Escribir "Arreglo ordenado: ", arreglo  
FinAlgoritmo`,

/* 12 --------------------------------------------------*/
`Algoritmo EjemploMatriz  
    // Definir e imprimir una matriz de 3x3 con valores generados
    Definir matriz Como Entero[3][3]  
    Para fila = 0 Hasta 2 Hacer  
        Para col = 0 Hasta 2 Hacer  
            matriz[fila][col] = fila + col  
        FinPara  
    FinPara  
    Para fila = 0 Hasta 2 Hacer  
        Escribir matriz[fila][0], " | ", matriz[fila][1], " | ", matriz[fila][2]  
    FinPara  
FinAlgoritmo`,

/* 13 --------------------------------------------------*/
`Algoritmo SimulacionArchivos  
Definir datos Como Cadena[10]  // Arreglo para almacenar datos simulados.
Definir contador Como Entero  
contador = 0  

// Guardar datos en el arreglo.
datos[contador] = "Usuario: Ana, Edad: 25"  
contador = contador + 1  

// Leer y mostrar los datos almacenados.
Escribir "Datos almacenados:"  
Para i = 0 Hasta contador-1 Hacer  
    Escribir datos[i]  
FinPara  
FinAlgoritmo`,

/* 14 --------------------------------------------------*/
`Algoritmo ManipulacionCadenas  
Definir cadena1, cadena2, resultado Como Cadena  
cadena1 = "Hola"  
cadena2 = "Mundo"  

// Concatenar dos cadenas.
resultado = Concatenar(cadena1, " ", cadena2)  
Escribir "Concatenación: ", resultado  

// Obtener la longitud de la cadena resultante.
Escribir "Longitud: ", Longitud(resultado)  

// Extraer una subcadena desde la posición 6 hasta la 10.
Escribir "Subcadena: ", Subcadena(resultado, 6, 10)  
FinAlgoritmo`,

/* 15 --------------------------------------------------*/
`Procedimiento ImprimirTablaMultiplicar(numero)  
Para i = 1 Hasta 10 Hacer  
    Escribir numero, " x ", i, " = ", numero * i  
FinPara  
FinProcedimiento  

// Algoritmo que llama al procedimiento para imprimir la tabla del 5.
Algoritmo LlamarProcedimiento  
ImprimirTablaMultiplicar(5)  
FinAlgoritmo`,

/* 16 --------------------------------------------------*/
`Algoritmo EstructuraEstudiante  
Definir estudiantes Como Cadena[10][3]  // Matriz: Nombre, Edad, Nota  

// Asignación de datos a la primera fila de la matriz.
estudiantes[0][0] = "Juan"  
estudiantes[0][1] = "18"  
estudiantes[0][2] = "85"  

// Mostrar los datos del primer estudiante.
Escribir "Estudiante: ", estudiantes[0][0], " | Nota: ", estudiantes[0][2]  
FinAlgoritmo`,

/* 17 --------------------------------------------------*/
`Funcion EsPrimo(n) -> resultado  
Definir resultado Como Booleano  
resultado = Verdadero  

// Verificación de divisibilidad desde 2 hasta n/2.
Para i = 2 Hasta n/2 Hacer  
    Si n % i == 0 Entonces  
        resultado = Falso  // Si es divisible, no es primo.
        Terminar  
    FinSi  
FinPara  
FinFuncion`,

/* 18 --------------------------------------------------*/
`Funcion CalcularPromedio(arreglo, tamano) -> promedio  
Definir suma Como Real  
suma = 0  

// Sumar todos los elementos del arreglo.
Para i = 0 Hasta tamano-1 Hacer  
    suma = suma + arreglo[i]  
FinPara  

// Calcular el promedio.
promedio = suma / tamano  
FinFuncion  

// Módulo principal: Algoritmo que usa la función de promedio.
Algoritmo Main  
Definir notas Como Real[5]  
// ... (llenar arreglo con datos)  
Escribir "Promedio: ", CalcularPromedio(notas, 5)  
FinAlgoritmo`,

/* 19 --------------------------------------------------*/
`Algoritmo SistemaBiblioteca  
Definir libros Como Cadena[100][3]  // Matriz para almacenar: Título, Autor, Disponible  
Definir opcion Como Entero  

// Bucle para mantener el menú en ejecución.
Repetir  
    // Menú principal.
    Escribir "1. Agregar libro"  
    Escribir "2. Buscar libro"  
    Escribir "3. Salir"  
    Leer opcion  

    // Manejo de opciones con estructura "Segun".
    Segun opcion Hacer  
        1:  
            Escribir "Ingrese título:"  
            Leer libros[0][0]  // Agregar libro (simplificado).  
        2:  
            Escribir "Buscar por título:"  
            Leer libros[0][0]  // Buscar libro (simplificado).  
    FinSegun  
Hasta Que opcion = 3  // Salir cuando el usuario elija la opción 3.  
FinAlgoritmo`,
]