import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import UserDetail from "../pages/UserDetail"
import Navbar from "../components/Navbar"
import ProtectedRoute from "./ProtectedRoute"

function AppRoutes() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/users/:id"
          element={
            <ProtectedRoute>
              <UserDetail />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default AppRoutes