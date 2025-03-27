import { FC } from "react"

interface StepsProps {
    key: number
    title: string
    description: string
    urlImgIndex: number
    urlImages: string[]
}

export const Steps : FC<StepsProps> = ({key, title, description, urlImgIndex, urlImages}) => {
    return (
        <article className="container" key={key}>
            <div className="title-devide">
                <h1>{title}</h1>
                <p dangerouslySetInnerHTML={{ __html: description }} />
            </div>
            <div className="cont-step-img">
                <img src={urlImages[urlImgIndex]} decoding="async" loading="lazy" alt="Image that show a especific step" />
            </div>
        </article>
    )
}