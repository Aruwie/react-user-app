import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import api from "../api/axios"

function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    setError("")

    try {
      await api.post("/register", {
        email,
        password,
      })

      alert("Register berhasil! Silakan login.")
      navigate("/login")
    } catch (err) {
      setError(err.response?.data?.error || "Register gagal")
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleRegister}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Register
        </h2>

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

        <button className="w-full bg-green-500 hover:bg-green-600 text-white p-2 rounded">
          Register
        </button>

        <p className="text-sm mt-3 text-center">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Register