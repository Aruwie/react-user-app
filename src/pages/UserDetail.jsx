import { useLocation, useNavigate } from "react-router-dom"
import defaultAvatar from "../assets/default-avatar.png"

function UserDetail() {
  const { state: user } = useLocation()
  const navigate = useNavigate()

  if (!user) {
    return (
      <div className="p-5">
        <p>User tidak ditemukan</p>
        <button
          onClick={() => navigate("/")}
          className="mt-3 border px-3 py-1 rounded"
        >
          Kembali
        </button>
      </div>
    )
  }

  return (
    <div className="p-5">
      <button
        onClick={() => navigate("/")}
        className="mb-4 border px-3 py-1 rounded"
      >
        ← Kembali
      </button>

      <div className="border p-5 rounded w-fit">
        <img
          src={user.avatar || defaultAvatar}
          onError={(e) => (e.target.src = defaultAvatar)}
          alt="avatar"
          className="w-32 h-32 rounded-full mb-3"
        />

        <h2 className="text-xl font-bold">
          {user.first_name} {user.last_name}
        </h2>

        <p className="text-gray-500">{user.email}</p>
      </div>
    </div>
  )
}

export default UserDetail