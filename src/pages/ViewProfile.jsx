import React from "react";
import { useAppContext } from "../contexts/context";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { SET_USER } from "../reducer/reducer";
import { Link, useNavigate } from "react-router";
import { FiLogOut, FiEdit, FiUser, FiMail } from "react-icons/fi";

const ViewProfile = () => {
  const { user, dispatch } = useAppContext();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch({ type: SET_USER, payload: null });
      navigate("/auth/login");
    } catch (err) {
      console.log(err);
    }
  };

  if (!user) {
    return (
      <div className="bg-gray-900 min-h-screen flex items-center justify-center text-white">
        Loading user data...
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center py-20 px-4">
      <div className="w-full max-w-md bg-gray-800 rounded-xl p-8 text-white shadow-[0_0_30px_rgba(147,51,234,0.3)] border border-purple-500/20">
        <h2 className="text-3xl font-bold text-center mb-8 text-purple-400">
          My Profile
        </h2>

        <div className="flex flex-col items-center mb-6">
          {user && (
            <img
              src={user?.photoURL || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-purple-500 shadow-[0_0_20px_rgba(147,51,234,0.5)] mb-4"
            />
          )}
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <FiUser className="text-purple-400" />{" "}
            {user.displayName || "No Name"}
          </h3>
          <p className="text-gray-300 flex items-center gap-2">
            <FiMail className="text-purple-400" /> {user.email}
          </p>
        </div>

        <div className="space-y-4 mt-6">
          <Link
            to="/update-profile"
            className="w-full flex items-center justify-center gap-2 bg-purple-600 text-white font-bold py-2 px-4 rounded-lg shadow-[0_0_15px_rgba(147,51,234,0.5)]"
          >
            <FiEdit /> Update Profile
          </Link>

          <button
            onClick={handleSignOut}
            className="w-full flex items-center justify-center gap-2 bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-[0_0_15px_rgba(239,68,68,0.5)]"
          >
            <FiLogOut /> Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
