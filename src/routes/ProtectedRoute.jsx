import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

function ProtectedRoute({ children }) {
  const context = useContext(AuthContext)

  if (!context) {
    return <p>Error: AuthContext tidak ditemukan</p>
  }

  const { token } = context

  if (!token) {
    return <Navigate to="/login" />
  }

  return children
}

export default ProtectedRoute