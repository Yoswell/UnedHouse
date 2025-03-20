import { Docs } from "@/pages/Docs"
import "@/css/General.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Docs />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
