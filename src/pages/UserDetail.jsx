import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../api/axios";

export default function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserDetail = async () => {
    try {
      setLoading(true);

      const res = await axios.get(`/users/${id}`);
      setUser(res.data.data);

      setLoading(false);
    } catch (err) {
      console.log("Error fetching user detail:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="p-6">
        <p>Loading user detail...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="p-6">
        <p>User not found</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <button
        onClick={() => navigate("/")}
        className="mb-4 px-4 py-2 bg-gray-300 rounded"
      >
        ← Back
      </button>

      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <img
          src={user.avatar}
          alt={user.first_name}
          className="w-32 h-32 rounded-full mx-auto"
        />

        <h1 className="text-2xl font-bold mt-4">
          {user.first_name} {user.last_name}
        </h1>

        <p className="text-gray-600 mt-2">{user.email}</p>
      </div>
    </div>
  );
}