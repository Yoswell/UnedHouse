
import { TitleType } from "@/types/type"

export const TitlesInterLeft: TitleType[] = [
    {
        title: "Introduction to Java",
        description: "Java is a high-level, <span>object-oriented</span> programming language designed for platform independence through the <span>Java Virtual Machine (JVM)</span>. It is widely used for building enterprise applications, Android apps, and web services. Java's <span>write once, run anywhere</span> principle allows compiled code to run on any device with a JVM. Its strong memory management, robust standard library, and emphasis on security make it a popular choice for large-scale systems."
    },
    {
        title: "Variables and Data Types",
        description: "Java supports primitive data types like <span>int</span>, <span>double</span>, and <span>boolean</span>, as well as reference types like <span>String</span> and arrays. Variables must be declared with a specific type, which cannot change during execution. Java is <span>statically typed</span>, ensuring type safety at compile time. Choosing the right data type optimizes memory usage and prevents errors in operations."
    },
    {
        title: "Control Structures (Conditional)",
        description: "Conditional statements like <span>if</span>, <span>else</span>, and <span>switch</span> control the flow of execution. The <span>if</span> statement evaluates a boolean expression, while <span>switch</span> checks equality against multiple constants. Java 14+ introduces <span>switch expressions</span> with arrow syntax for cleaner code. These structures enable programs to make decisions dynamically based on inputs or conditions."
    },
    {
        title: "Loops (Bucles)",
        description: "Java provides <span>for</span>, <span>while</span>, and <span>do-while</span> loops. The <span>enhanced for loop</span> simplifies iteration over arrays and collections. Loops automate repetitive tasks, such as processing elements in a list. Proper loop control prevents infinite loops and ensures efficient execution."
    },
    {
        title: "Methods",
        description: "Methods in Java are reusable blocks of code that perform specific tasks. They can accept parameters, return values, and be overloaded (multiple methods with the same name but different parameters). Methods promote <span>code reusability</span> and modular design. The <span>main</span> method is the entry point of Java applications."
    },
    {
        title: "Arrays",
        description: "Arrays store multiple values of the same type in contiguous memory. They have a fixed size after initialization. Java supports single-dimensional and multi-dimensional arrays. Arrays are zero-indexed, and elements are accessed via their position. Useful for scenarios like storing student grades or pixel data."
    },
    {
        title: "Object References",
        description: "In Java, objects are accessed via <span>references</span> (memory addresses), not directly. Unlike C++, Java does not support pointers for memory manipulation. Assigning objects to variables copies references, not the actual object. This mechanism is crucial for understanding object interaction and memory management."
    },
    {
        title: "Classes and Objects",
        description: "Java is an <span>object-oriented</span> language where classes define blueprints for objects. A class encapsulates <span>fields</span> (data) and <span>methods</span> (behavior). Objects are instances created at runtime using the <span>new</span> keyword. Concepts like inheritance, polymorphism, and encapsulation form the pillars of Java OOP."
    },
    {
        title: "Constructors",
        description: "Constructors initialize objects when created. They have the same name as the class and no return type. Java provides a <span>default constructor</span> if none is defined. Overloaded constructors allow different initialization parameters. Constructors ensure objects start in a valid state."
    },
    {
        title: "Inheritance",
        description: "Inheritance allows a class (<span>subclass</span>) to inherit fields and methods from another class (<span>superclass</span>). This promotes code reuse and hierarchical modeling. Java uses the <span>extends</span> keyword for inheritance. Subclasses can override methods to provide specific implementations."
    },
    {
        title: "File Management",
        description: "Java handles files via classes like <span>File</span>, <span>FileReader</span>, and <span>FileWriter</span>. The <span>java.nio</span> package offers modern APIs for file operations (e.g., <span>Files</span> and <span>Paths</span>). Proper resource management with <span>try-with-resources</span> ensures files are closed automatically, preventing leaks."
    },
    {
        title: "Generics",
        description: "Generics enable type-safe classes, interfaces, and methods that work with any data type. They eliminate the need for casting and reduce runtime errors. Commonly used in collections like <span>ArrayList&lt;String&gt;</span>. Generics improve code flexibility and reusability while maintaining type checks at compile time."
    },
    {
        title: "Exception Handling",
        description: "Java uses <span>try</span>, <span>catch</span>, <span>finally</span>, and <span>throw</span> to manage exceptions. Checked exceptions must be declared or handled, while unchecked exceptions (e.g., <span>NullPointerException</span>) are optional. Custom exceptions can be created by extending the <span>Exception</span> class."
    },
    {
        title: "Collections Framework",
        description: "The Java Collections Framework includes interfaces like <span>List</span>, <span>Set</span>, and <span>Map</span>, with implementations such as <span>ArrayList</span>, <span>HashSet</span>, and <span>HashMap</span>. These data structures simplify storing and manipulating groups of objects. Iterators and enhanced loops facilitate traversal."
    },
    {
        title: "Multithreading",
        description: "Java supports concurrent programming via <span>Thread</span> and <span>Runnable</span>. The <span>ExecutorService</span> framework (Java 5+) simplifies thread management. Synchronization with <span>synchronized</span> blocks or methods prevents race conditions. Critical for tasks like parallel processing or handling UI events."
    },
    {
        title: "Lambda Expressions",
        description: "Lambda expressions (Java 8+) enable concise implementation of functional interfaces. They are used extensively with the <span>Streams API</span> for processing collections. Lambdas reduce boilerplate code and make operations like filtering or mapping more readable."
    },
    {
        title: "Interfaces",
        description: "Interfaces define contracts (method signatures) that classes must implement. Java 8+ allows <span>default</span> and <span>static</span> methods in interfaces. Used for abstraction and achieving polymorphism. A class can implement multiple interfaces, supporting flexible design."
    }
]

export const TitlesInterRight: TitleType[] = [
    {
        title: "External Resources",
        description: "Exploring external resources is essential for strengthening and expanding your C++ knowledge. There is a vast selection of materials available, including official documentation, specialized books, discussion forums, and online tutorials. Platforms like cplusplus.com, CppReference, and Stack Overflow can help you deepen your understanding of advanced concepts and troubleshoot specific issues."
    }
]