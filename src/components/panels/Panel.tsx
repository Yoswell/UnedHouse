import { NavContext } from "@/pages/Docs"
import { useContext, useState } from "react"

const menuSections = [
    { 
        title: "Diploma Courses",
        items: [
            "Logic for Computing",
            "Introduction to Programming",
            "Intermediate Programming",
            "Advanced Programming",
            "Data Structure",
            "Database",
            "Telematics and Networks I",
            "Operating Systems",
        ]
    },
    { 
        title: "High School Courses", 
        items: [
            "Web Programming",
            "Compilers",
            "Database II",
            "Technical Support",
            "Telematics and Networks II",
        ]
    },
    { 
        title: "Practice Exercises", 
        items: [
            "Programming", 
            "Databases", 
            "Cybersecurity"
        ]
    },
    { 
        title: "Tutors contact", 
        items: [
            "Contact emails",
        ]
    },
    { 
        title: "Tools that you need", 
        items: [
            "Programming",
            "Design",
            "Record Screen",
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
                        <div>
                            {section.items.map((item, itemIndex) => {
                                const id = sectionIndex * 10 + itemIndex + 1;
                                return (
                                    <li 
                                        key={id} 
                                        className={navClicked === id ? "active" : ""} 
                                        onClick={() => setNavClicked(id)}>
                                        {item}
                                    </li>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    )
}

interface PanelRightProps<T> {
    array: T[]
    arrayLinks: T[]
}

export function PanelR<T extends {title: string, description: string}>({array, arrayLinks}: PanelRightProps<T>) {
    const [goSection, setGoSection] = useState("")

    return (
        <aside className="menu-bar menu-bar-right">
            <div className="scroll-aside">
                <div className="container">
                    <h3>Sections</h3>
                    <div>
                        {Array.from({ length: array.length - 1 }).map((_, index) => (
                            <li key={index}>
                                <a onClick={() => setGoSection(array[index].title.split(" ").join("-"))} href={`#${goSection}`}>{array[index].title}</a>
                            </li>
                        ))}
                    </div>
                </div>
                <div className="container">
                    <h3>Sections</h3>
                    <div>
                        {arrayLinks.map((data, index) => (
                            <li key={index}>{data.title}</li>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    )
}