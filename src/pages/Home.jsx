import { useEffect, useState } from "react"
import api from "../api/axios"
import defaultAvatar from "../assets/default-avatar.png"

const Home = () => {
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)

  const fetchUsers = async (pageNumber) => {
    try {
      const response = await api.get(`/users?page=${pageNumber}`, {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      })

      setUsers(response.data.data)
    } catch (error) {
      console.log("ERROR:", error.response?.data)
    }
  }

  useEffect(() => {
    fetchUsers(page)
  }, [page])

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">User List</h1>

      <div className="grid grid-cols-2 gap-4">
        {users.map((user) => (
          <div key={user.id} className="border p-4 rounded shadow">
            
            <img
              src={defaultAvatar}
              alt="default avatar"
              className="w-20 h-20 rounded-full mb-2"
            />

            <p className="font-semibold">
              {user.first_name} {user.last_name}
            </p>
            <p className="text-sm text-gray-500">{user.email}</p>

          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-4 flex gap-2">
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