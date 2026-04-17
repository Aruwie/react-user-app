import { useState, useContext, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import api from "../api/axios"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const { login, token } = useContext(AuthContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      navigate("/")
    }
  }, [token, navigate])

  const handleLogin = async (e) => {
    e.preventDefault()
    setError("")

    try {
      const response = await api.post("/login", {
        email,
        password,
      })

      login(response.data.token)
      navigate("/")
    } catch (err) {
      setError(err.response?.data?.error || "Login gagal")
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        {error && (
          <p className="text-red-500 text-sm mb-2">{error}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">
          Login
        </button>

        <p className="text-sm mt-3 text-center">
          Belum punya akun?{" "}
          <Link to="/register" className="text-blue-500">
            Register
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login