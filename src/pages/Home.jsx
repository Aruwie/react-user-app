import { useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const navigate = useNavigate();

  const fetchUsers = async (pageNumber = 1) => {
    try {
      const res = await axios.get(`/users?page=${pageNumber}`);
      setUsers(res.data.data);
      setPage(res.data.page);
      setTotalPages(res.data.total_pages);
    } catch (err) {
      console.log("Error fetching users:", err);
    }
  };

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  const handleNext = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User List</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            onClick={() => navigate(`/user/${user.id}`)}
            className="cursor-pointer bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition"
          >
            <img
              src={user.avatar}
              alt={user.first_name}
              className="w-20 h-20 rounded-full mx-auto"
            />

            <h2 className="text-center mt-3 font-semibold">
              {user.first_name} {user.last_name}
            </h2>

            <p className="text-center text-gray-500 text-sm">
              Click to view detail
            </p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span className="py-2">
          Page {page} of {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}