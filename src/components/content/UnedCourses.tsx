import "@/css/Cards.css"
import { Codes as Codes1 } from "@/constants/logicComputer/Codes"
import { Codes as Codes2 } from "@/constants/introductionProgra/Codes"
import { Codes as Codes3 } from "@/constants/intermediateProgra/Codes"
import { Content } from "./Content"
import { Download1, Download2, Download3 } from "@/constants/DownloadTools"
import { TitlesLogicLeft } from "@/constants/logicComputer/Titles"
import { TitlesIntroLeft } from "@/constants/introductionProgra/Titles"
import { TitlesInterLeft } from "@/constants/intermediateProgra/Titles"

const completePublished = "Published on"
const completeReading = "minutes(s) read"

export function LogicCumputing() {
    return (
        <Content 
            titleCourse="Logic for Computing"
            publishedDate={`${completePublished} Mar 11, 2025`}
            readTime={`4 ${completeReading}`}
            tag1="Basic level"
            tag2="180 hours"
            tag3="Codigo: 03304"
            descriptionCourse={
                `
                This is a <span>theoretical</span> and <span>practical</span> course designed to help students acquire the necessary
                <span>knowledge</span> of <span>algorithmic logic</span>, which is essential for understanding complex problem-solving
                techniques. This knowledge forms the foundation of their initial training in <span>programming</span> and the development
                of <span>logical-mathematical thinking</span>, key skills that are indispensable for success in modern software
                development, computational theory, and real-world problem-solving scenarios Go ahead, browse into this section.
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
            titleCourse="Introduction to Programming"
            publishedDate={`${completePublished} Mar 11, 2025`}
            readTime={`5 ${completeReading}`}
            tag1="Basic level"
            tag2="180 hours"
            tag3="Codigo: 00831"
            descriptionCourse={
                `
                The course is <span>theoretical and practical</span>, requiring the development of reading habits and discipline for the
                study of theoretical content and the completion of planned activities. The goal is to foster a positive attitude among
                students toward research and program design, applying the theoretical foundations that support it.This course is worth <span>4 credits</span> and requires a minimum of 180 hours per semester for reading, understanding, and mastering the content, as well as for research, documentation, and completion of assignments.
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
            titleCourse="Intermediate Programming"
            publishedDate={`${completePublished} Mar 16, 2025`}
            readTime={`5 ${completeReading}`}
            tag1="Intermediate level"
            tag2="180 hours"
            tag3="Codigo: 00824"
            descriptionCourse={
                `
                This is a <span>theoretical</span> and <span>practical</span> course designed to further develop students' skills as 
                <span>computer programmers</span> at an <span>intermediate level</span>. The course focuses on the <span>Object-Oriented Programming (OOP)</span> 
                paradigm through the study of <span>Java</span>, a widely used programming language. Students will enhance their 
                <span>problem-solving abilities</span> and gain a deeper understanding of <span>software development principles</span>, 
                preparing them for real-world computational challenges. 
                `
            }
            downloadTools={Download3}
            codeContent={TitlesInterLeft}
            codeExamples={Codes3}>
        </Content>
    )
}