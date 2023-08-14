import { BrowserRouter, Route, Routes } from "react-router-dom"
import { YourHome } from "../page/YourHome"
import { SeeMoreHome } from "../page/SeeMoreHome"
import { Menu } from "./Menu"

export const MyRouter = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<YourHome />} />
                <Route path="/See/:id" element={<SeeMoreHome />} />
            </Routes>
        </BrowserRouter>
    )
}