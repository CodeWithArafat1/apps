import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";
import Navbar from "../components/shared/Navbar";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    if (!email) return toast.warn("Please enter your email.");
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent!");
      setEmail("");
    } catch (err) {
      console.log(err);
      toast.error("Error sending reset email. Try again.");
    }
  };

  return (
    <div className="">
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-900 py-20 px-4">
        <div className="w-full max-w-md bg-gray-800 rounded-xl p-8 text-white shadow-[0_0_30px_rgba(147,51,234,0.3)] border border-purple-500/20">
          <h2 className="text-3xl font-bold text-center mb-8 text-purple-400">
            Reset Password
          </h2>

          <form onSubmit={handleReset} className="space-y-4">
            <div>
              <label
                className="block text-gray-300 text-sm mb-1"
                htmlFor="email"
              >
                Enter your email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded-lg shadow-[0_0_20px_rgba(168,85,247,0.5)]"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
