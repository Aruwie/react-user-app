import { useEffect, useState } from "react"
import api from "../api/axios"

function Home() {
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const fetchUsers = async (pageNumber) => {
    try {
      const response = await api.get(`/users?page=${pageNumber}`, {
        headers: {
          "x-api-key": "reqres_f58b948a359041178cbb63c69c37ad94",
        },
      })

      setUsers(response.data.data)
      setTotalPages(response.data.total_pages)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUsers(page)
  }, [page])

  return (
    <div className="p-10">
      <h1 className="text-2xl mb-4">User List</h1>

      {/* USER LIST */}
      <div className="grid grid-cols-2 gap-4">
        {users.map((user) => (
          <div key={user.id} className="border p-4">
            <img src={user.avatar} alt="" className="w-16 h-16" />
            <p>{user.first_name} {user.last_name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="bg-gray-300 px-4 py-2"
        >
          Prev
        </button>

        <span>Page {page}</span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className="bg-gray-300 px-4 py-2"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Home