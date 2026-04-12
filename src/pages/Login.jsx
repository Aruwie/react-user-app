import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import api from "../api/axios"
import { AuthContext } from "../context/AuthContext"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const response = await api.post(
        "/login",
        {
          email,
          password,
        },
        {
          headers: {
            "x-api-key": "reqres_f58b948a359041178cbb63c69c37ad94",
          },
        }
      )

      // 🔥 simpan token ke context
      login(response.data.token)

      // 🔥 redirect ke home
      navigate("/")

      console.log("SUCCESS:", response.data)
    } catch (error) {
      console.log("ERROR:", error.response?.data)
    }
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl mb-4">Login Page</h1>

      <form onSubmit={handleLogin} className="flex flex-col gap-3 max-w-sm">
        <input
          type="email"
          placeholder="Email"
          className="border p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="bg-blue-500 text-white p-2">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login