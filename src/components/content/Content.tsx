import { FC } from "react"
import { DownloadToolsType, TitleType } from "@/types/type"
import { Code } from "@/components/content/Codes"

interface contentProps {
    titleCourse: string
    publishedDate: string
    readTime: string
    tag1: string
    tag2: string
    tag3: string
    descriptionCourse: string
    downloadTools: DownloadToolsType[]
    codeContent: TitleType[]
    codeExamples: string[]
}

export const Content : FC<contentProps> = ({titleCourse, publishedDate, readTime, tag1, tag2, tag3, descriptionCourse, downloadTools, codeContent, codeExamples}) => {
    return (
        <div className="container-content">
            <section className="banner-top">
                <h1>{titleCourse}</h1>
                <h6 className="published-date-time-cont">
                    <span>{publishedDate}</span>
                    <span>{readTime}</span>
                </h6>
                <div className="cont-tags">
                    <span>{tag1}</span>
                    <span>{tag2}</span>
                    <span>{tag3}</span>
                </div>
                <p dangerouslySetInnerHTML={{ __html: descriptionCourse }} />
                <ul className="ul-links">
                    {downloadTools.map((data, index) => (
                        <li key={index}>
                            <a href={data.link} target="_blank">Download {data.title}</a>
                        </li>
                    ))}
                </ul>
            </section>

            {codeContent.map((data, index) => (
                <Code 
                    key={index}
                    title={data.title}
                    description={data.description}
                    indexCode={index}
                    codeString={codeExamples}>
                </Code>
            ))}
        </div>    
    )
}