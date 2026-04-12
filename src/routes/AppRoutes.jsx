import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "../pages/Login"
import Register from "../pages/Register"
import Home from "../pages/Home"
import UserDetail from "../pages/UserDetail"

function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes