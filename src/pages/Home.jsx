import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

import defaultAvatar from "../assets/default-avatar.png"

function Home() {
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)

  const navigate = useNavigate()

  const fetchUsers = async (pageNumber) => {
    try {
      const response = await axios.get(
        `https://reqres.in/api/users?page=${pageNumber}`
      )
      setUsers(response.data.data)
    } catch (error) {
      console.error("ERROR FETCH USERS:", error)
    }
  }

  useEffect(() => {
    fetchUsers(page)
  }, [page])

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">User List</h1>

      <div className="grid grid-cols-2 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="border p-4 rounded cursor-pointer hover:bg-gray-100"
            onClick={() => navigate(`/users/${user.id}`)}
          >
            <img
              src={defaultAvatar}
              alt="avatar"
              className="w-20 h-20 rounded-full mb-2"
            />

            <p className="font-semibold">
              {user.first_name} {user.last_name}
            </p>

            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 flex gap-2">
        <button
          onClick={() => setPage(1)}
          className="border px-3 py-1 rounded"
        >
          Page 1
        </button>

        <button
          onClick={() => setPage(2)}
          className="border px-3 py-1 rounded"
        >
          Page 2
        </button>
      </div>
    </div>
  )
}

export default Home