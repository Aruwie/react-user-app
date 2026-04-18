import { useEffect, useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import defaultAvatar from "../assets/default-avatar.png";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  const fetchUsers = async (page) => {
    try {
      const res = await api.get(`/users?page=${page}`);
      setUsers(res.data.data);
      setTotalPages(res.data.total_pages);
    } catch (err) {
      console.error("ERROR FETCH USERS:", err);
    }
  };

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-center">
        User List
      </h1>

      {/* USER GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            onClick={() => navigate(`/users/${user.id}`)}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg cursor-pointer text-center transition"
          >
            <img
              src={defaultAvatar}
              alt={user.first_name}
              className="w-20 h-20 rounded-full mx-auto mb-3"
            />

            <p className="font-semibold">
              {user.first_name} {user.last_name}
            </p>

            <p className="text-sm text-gray-500">
              {user.email}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center items-center gap-4">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span className="font-medium">
          {page} / {totalPages}
        </span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;