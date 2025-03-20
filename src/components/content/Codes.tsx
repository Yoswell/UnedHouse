import { useEffect } from "react"
import { CopyI } from "@/icons/Icons"
import hljs from 'highlight.js'
// import 'highlight.js/styles/nnfx-dark.min.css' -> dark mode
import 'highlight.js/styles/dark.min.css'

interface ContentProps {
    key: number
    title: string
    description: string
    indexCode: number
    codeString: string[]
}

export function Code({key, title, description, indexCode, codeString}: ContentProps) {
    useEffect(() => {
        hljs.highlightAll()
    }, [])

    return (
        <div className="container" key={key} id={title.split(" ").join("-")}>
            <h5 className="float-number">{indexCode}</h5>
            <div className="title-devide">
                <h1>{title}</h1>
                <p dangerouslySetInnerHTML={{ __html: description }} />
            </div>
            <article className="terminal-card">
                <button><CopyI /></button>
                <pre>
                    <code className="cpp">
                        {codeString[indexCode]}
                    </code>
                </pre>
            </article>
        </div>
    )
}