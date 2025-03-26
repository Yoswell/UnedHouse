import "@/css/Cards.css"
import { Codes as Codes1 } from "@/constants/logicComputer/Codes"
import { Codes as Codes2 } from "@/constants/introductionProgra/Codes"
import { Codes as Codes3 } from "@/constants/intermediateProgra/Codes"
import { Codes as Codes5 } from "@/constants/dataStructure/Codes"
import { Codes as Codes7 } from "@/constants/telematicaOne/Codes"
import { Content } from "./Content"
import { Download1, Download2, Download3, Download5 } from "@/constants/DownloadTools"
import { TitlesLogicLeft } from "@/constants/logicComputer/Titles"
import { TitlesIntroLeft } from "@/constants/introductionProgra/Titles"
import { TitlesInterLeft } from "@/constants/intermediateProgra/Titles"
import { TitlesStructureLeft } from "@/constants/dataStructure/Titles"
import { TitlesNetworkILeft } from "@/constants/telematicaOne/Titles"

const completePublished = "Publicado el"
const completeReading = "minuto(s) de lectura"

export function LogicCumputing() {
    return (
        <Content 
            titleCourse="Lógica para Computación"
            publishedDate={`${completePublished} 11 de Marzo, 2025`}
            readTime={`4 ${completeReading}`}
            tag1="Nivel básico"
            tag2="180 horas"
            tag3="Código: 03304"
            descriptionCourse={
                `
                Este es un curso <span>teórico</span> y <span>práctico</span> diseñado para ayudar a los estudiantes a adquirir el 
                <span>conocimiento</span> necesario de <span>lógica algorítmica</span>, esencial para comprender técnicas complejas de 
                resolución de problemas. Este conocimiento forma la base de su formación inicial en <span>programación</span> y el 
                desarrollo del <span>pensamiento lógico-matemático</span>, habilidades clave indispensables para el éxito en el desarrollo 
                de software moderno, la teoría computacional y la resolución de problemas del mundo real. Adelante, explora esta sección.
                `
            }
            downloadTools={Download1}
            codeContent={TitlesLogicLeft}
            codeExamples={Codes1}>
        </Content>
    )
}

export function IntroductionProgramming() {
    return (
        <Content 
            titleCourse="Introducción a la Programación"
            publishedDate={`${completePublished} 11 de Marzo, 2025`}
            readTime={`5 ${completeReading}`}
            tag1="Nivel básico"
            tag2="180 horas"
            tag3="Código: 00831"
            descriptionCourse={
                `
                El curso es <span>teórico y práctico</span>, requiriendo el desarrollo de hábitos de lectura y disciplina para el estudio 
                del contenido teórico y la realización de actividades planificadas. El objetivo es fomentar una actitud positiva entre los 
                estudiantes hacia la investigación y el diseño de programas, aplicando los fundamentos teóricos que lo respaldan. Este 
                curso tiene un valor de <span>4 créditos</span> y requiere un mínimo de 180 horas por semestre para la lectura, comprensión 
                y dominio del contenido, así como para la investigación, documentación y realización de tareas.
                `
            }
            downloadTools={Download2}
            codeContent={TitlesIntroLeft}
            codeExamples={Codes2}>
        </Content>
    )
}

export function IntermediateProgramming() {
    return (
        <Content 
            titleCourse="Programación Intermedia"
            publishedDate={`${completePublished} 16 de Marzo, 2025`}
            readTime={`5 ${completeReading}`}
            tag1="Nivel intermedio"
            tag2="180 horas"
            tag3="Código: 00824"
            descriptionCourse={
                `
                Este es un curso <span>teórico</span> y <span>práctico</span> diseñado para desarrollar aún más las habilidades de los 
                estudiantes como <span>programadores de computadoras</span> a un <span>nivel intermedio</span>. El curso se centra en el 
                paradigma de <span>Programación Orientada a Objetos (POO)</span> a través del estudio de <span>Java</span>, un lenguaje de 
                programación ampliamente utilizado. Los estudiantes mejorarán sus <span>habilidades para resolver problemas</span> y 
                obtendrán una comprensión más profunda de los <span>principios de desarrollo de software</span>, preparándolos para 
                desafíos computacionales del mundo real.
                `
            }
            downloadTools={Download3}
            codeContent={TitlesInterLeft}
            codeExamples={Codes3}>
        </Content>
    )
}

export function DataStructure() {
    return (
        <Content 
            titleCourse="Estructuras de Datos"
            publishedDate={`${completePublished} 21 de Marzo, 2025`}
            readTime={`5 ${completeReading}`}
            tag1="Nivel intermedio"
            tag2="180 horas"
            tag3="Código: 00825"
            descriptionCourse={
                `
                Este es un curso <span>teórico</span> y <span>práctico</span> diseñado para que los estudiantes dominen las 
                <span>estructuras de datos</span> fundamentales utilizando el lenguaje de programación <span>Java</span>. El curso cubre 
                conceptos clave como <span>arrays</span>, <span>listas enlazadas</span>, <span>pilas</span>, <span>colas</span>, 
                <span>árboles</span> y <span>grafos</span>, así como su implementación y aplicación en problemas reales. Los estudiantes 
                desarrollarán habilidades avanzadas en <span>manipulación de datos</span> y <span>optimización de algoritmos</span>, 
                preparándolos para enfrentar desafíos complejos en el desarrollo de software y la resolución de problemas computacionales. 
                Además, se enfatiza el uso de <span>buenas prácticas</span> y el pensamiento crítico para diseñar soluciones eficientes y 
                escalables.
                `
            }
            downloadTools={Download3}
            codeContent={TitlesStructureLeft}
            codeExamples={Codes5}>
        </Content>
    )
}

export function NetworkI() {
    return (
        <Content 
            titleCourse="Telematica y redes I"
            publishedDate={`${completePublished} 25 de Marzo, 2025`}
            readTime={`20 ${completeReading}`}
            tag1="Nivel basico"
            tag2="180 horas"
            tag3="Código: 00883"
            descriptionCourse={
                `
                Este es un curso <span>teórico</span> y <span>práctico</span> enfocado en el estudio del <span>transporte de datos</span> y la 
                <span>distribución de la información</span> a través de redes públicas y privadas. Forma parte del plan de estudios de la 
                carrera de <span>Ingeniería Informática</span> (código 00883) en la <span>Universidad Estatal a Distancia</span>, proporcionando 
                a los estudiantes conocimientos avanzados sobre <span>arquitecturas de red</span>, <span>protocolos de comunicación</span> y 
                <span>tecnologías emergentes</span>.  
                `
            }
            downloadTools={Download5}
            codeContent={TitlesNetworkILeft}
            codeExamples={Codes7}>
        </Content>
    )
}