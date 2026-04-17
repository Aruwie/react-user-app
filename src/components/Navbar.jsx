import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

function Navbar() {
  const { token, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between items-center">
      <Link to="/" className="font-bold text-lg">
        My App
      </Link>

      <div className="flex items-center gap-4">
        {!token && (
          <>
            <Link
              to="/login"
              className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded"
            >
              Register
            </Link>
          </>
        )}

        {token && (
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar