import { FC } from "react"
import { NavContext } from "@/pages/Docs"
import { useContext, useState } from "react"
import { TitleType } from "@/types/type"

const menuSections = [
    { 
        title: "Cursos de Diplomado",
        items: [
            "🤪 Lógica para Computación",
            "😛 Introducción a la Programación",
            "😬 Programación Intermedia",
            "👀 Programación Avanzada",
            "😦 Estructuras de Datos",
            "😨 Bases de Datos",
            "🌐 Telemática y Redes I",
            "🧠 Sistemas Operativos",
        ]
    },
    { 
        title: "Cursos de Bachillerato", 
        items: [
            "😡 Programación Web",
            "😈 Compiladores",
            "🐌 Bases de Datos II",
            "🐙 Soporte Técnico",
            "🗺 Telemática y Redes II",
        ]
    },
    { 
        title: "Ejercicios Prácticos", 
        items: [
            "🚀 Programación", 
            "⏳ Bases de Datos", 
            "🔥 Ciberseguridad"
        ]
    },
    { 
        title: "Contacto de Tutores", 
        items: [
            "🧩 Correos de contacto",
        ]
    },
    { 
        title: "Herramientas que necesitas", 
        items: [
            "🚀 Programación",
            "🎭 Diseño",
            "🎮 Grabación de Pantalla",
        ]
    }
]

export function Panel() {
    const navContext = useContext(NavContext)
    if (!navContext) return null
    const { navClicked, setNavClicked } = navContext

    return (
        <aside className="menu-bar menu-bar-left">
            <div className="scroll-aside">
                {menuSections.map((section, sectionIndex) => (
                    <div className="container" key={sectionIndex}>
                        <h3>{section.title}</h3>
                        <div className="separate">
                            {section.items.map((item, itemIndex) => {
                                const id = sectionIndex * 10 + itemIndex + 1;
                                return (
                                    <li 
                                        key={id} 
                                        className={navClicked === id ? "active" : ""} 
                                        onClick={() => setNavClicked(id)}>
                                        {item}
                                    </li>
                                )
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    )
}

interface PanelRProps {
    array: TitleType[]
}

export const PanelR: FC<PanelRProps> = ({ array }) => {
    const [goSection, setGoSection] = useState("")

    return (
        <aside className="menu-bar menu-bar-right">
            <div className="scroll-aside">
                <div className="container">
                    <h3>Secciones</h3>
                    <div>
                        {Array.from({ length: array.length - 2 }).map((_, index) => (
                            <li key={index}>
                                <a onClick={() => setGoSection(array[index].title.split(" ").join("-"))} href={`#${goSection}`}>{array[index].title}</a>
                            </li>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    )
}