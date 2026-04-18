import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axios";
import defaultAvatar from "../assets/default-avatar.png";

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const res = await api.get(`/users/${id}`);
      setUser(res.data.data);
    } catch (err) {
      console.error("ERROR FETCH USER:", err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">

        <img
          src={defaultAvatar}
          alt={user.first_name}
          className="w-32 h-32 rounded-full mx-auto mb-4 shadow"
        />

        <h2 className="text-2xl font-bold mb-2">
          {user.first_name} {user.last_name}
        </h2>

        <p className="text-gray-500 mb-6">{user.email}</p>

        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default UserDetail;