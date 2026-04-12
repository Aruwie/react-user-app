import { useState } from "react"
import api from "../api/axios"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const response = await api.post("/login", {
        email,
        password,
      })

      console.log("SUCCESS:", response.data)
    } catch (error) {
      console.log("ERROR:", error.response?.data)
    }
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl mb-4">Login</h1>

      <form onSubmit={handleLogin} className="flex flex-col gap-2 max-w-sm">
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

        <button className="bg-blue-500 text-white p-2">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login