import "@/css/Docs.css"
import React, { useState, createContext, useEffect } from "react"
import { Panel, PanelR } from "@/components/panels/Panel"
import { CoursesType } from "@/types/type"
import { DataStructure, IntermediateProgramming, IntroductionProgramming, LogicCumputing, NetworkI } from "@/components/content/UnedCourses"
import { TitlesLogicLeft } from "@/constants/logicComputer/Titles"
import { TitlesIntroLeft } from "@/constants/introductionProgra/Titles"
import { TitlesInterLeft } from "@/constants/intermediateProgra/Titles"
import { TitlesNetworkILeft } from "@/constants/telematicaOne/Titles"
import { TitlesStructureLeft } from "@/constants/dataStructure/Titles"

import { Book1, SearchI } from "@/icons/Icons"
import { SearchDBLink } from "@/constants/SearchDB"

export const NavContext = createContext<{ navClicked: number; setNavClicked: React.Dispatch<React.SetStateAction<number>> } | null>(null);

export function Docs() {
    const [navClicked, setNavClicked] = useState(1)
    const [searchClicked, setSearchClicked] = useState(false)
    
    return (
        <NavContext.Provider value={{ navClicked, setNavClicked }}>
            { /* ------------------------------------- */ }
            { /* ------------------------------------- */ }
            <div className="container-main">
                <nav className="nav-bar">
                    <div className="max-row">
                        <div className="row1">
                            <div className="separate">
                                <h1>Unedhouse v1.0</h1>
                                <span className="version">Beta</span>
                            </div>
                        </div>
                        <div className="row3">
                            <div className="separate">
                                <a className="empty-anchor">Feedback</a>
                                <a className="empty-anchor">Orientaciones</a>
                                <a className="fill-anchor">Reportar Bugs</a>
                            </div>
                        </div>
                    </div>
                </nav>
                { /* ------------------------------------- */ }
                { /* ------------------------------------- */ }
                <section className="column-3">
                    <div className="empty-block"></div>
                    <Panel />
                    <div className="scroll-main">
                        <input className="search-input" placeholder="Buscar"></input>
                        {navClicked == 1 && (
                            <><LogicCumputing />
                            <title>UnedHouse - Lógica para Computación</title></>
                        )}
                        {navClicked == 2 && (
                            <><IntroductionProgramming />
                            <title>UnedHouse - Introducción a la Programación</title></>
                        )}
                        {navClicked == 3 && (
                            <><IntermediateProgramming />
                            <title>UnedHouse - Programación Intermedia</title></>
                        )}
                        {navClicked == 5 && (
                            <><DataStructure />
                            <title>UnedHouse - Estructuras de Datos</title></>
                        )}
                        {navClicked == 7 && (
                            <><NetworkI />
                            <title>UnedHouse - Telematica y redes I</title></>
                        )}
                    </div>
                    {navClicked == 1 && (
                        <PanelR array={TitlesLogicLeft}></PanelR>
                    )}
                    {navClicked == 2 && (
                        <PanelR array={TitlesIntroLeft}></PanelR>
                    )}
                    {navClicked == 3 && (
                        <PanelR array={TitlesInterLeft}></PanelR>
                    )}
                    {navClicked == 5 && (
                        <PanelR array={TitlesStructureLeft}></PanelR>
                    )}
                    {navClicked == 7 && (
                        <PanelR array={TitlesNetworkILeft}></PanelR>
                    )}
                </section>
            </div>
            { /* ------------------------------------- */ }
            { /* ------------------------------------- */ }
            <SearchModal search={searchClicked} setSearch={setSearchClicked} />
        </NavContext.Provider>
    )
}

interface SearchModalProps {
    search: boolean
    setSearch: (value: boolean) => void
}

function SearchModal({ search, setSearch }: SearchModalProps) {
    const [valueCurrentSearch, setValueCurrentSearch] = useState("")
    const [arrayLinksOriginal, setArrayLinksOriginal] = useState<CoursesType[]>([])
    const [arrayLinks, setArrayLinks] = useState<CoursesType[]>([])

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setSearch(false)
            if (event.ctrlKey && event.key.toLowerCase() === "k") setSearch(true)
        };

        document.addEventListener("keydown", handleKeyDown)
        setArrayLinksOriginal(SearchDBLink)

        return () => document.removeEventListener("keydown", handleKeyDown)
    }, []);

    useEffect(() => {
        if (valueCurrentSearch.length > 0) {
            setArrayLinks(
                arrayLinksOriginal.filter((item) =>
                    item.linkName.toLowerCase().includes(valueCurrentSearch.toLowerCase())
                )
            )
        } else setArrayLinks([])
    }, [valueCurrentSearch]);

    function escapeRegExp(text: string) {
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    }
    
    const highlightText = (text: string, search: string) => {
        if (!search) return text
        const regex = new RegExp(`(${escapeRegExp(search)})`, "gi")
        const parts = text.split(regex)

        return parts.map((part, index) =>
            part.toLowerCase() === search.toLowerCase() ? (
                <span key={index} className="highlight">{part}</span>
            ) : (
                part
            )
        )
    }

    return (
        <div className={`modal-search ${search ? "modal-open" : "modal-close"}`}>
            <div className="container">
                <div className="search-bar">
                    <SearchI />
                    <input
                        type="text"
                        placeholder="Search..."
                        onChange={(e) => setValueCurrentSearch(e.target.value)}>
                    </input>
                </div>
                <div className={`content-search-result ${valueCurrentSearch.length > 0 && arrayLinks.length > 0 ? "content-search-result-open" : ""}`}>
                    <ul className="ul-links-search">
                        {arrayLinks.map((item, index) => (
                            <li key={index}>
                                <Book1 />
                                <div className="row">
                                    <a className="result" href={item.link} target="_blank">
                                        {highlightText(item.linkName, valueCurrentSearch)}
                                    </a>
                                    <span>External source, you are leaving this page</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}