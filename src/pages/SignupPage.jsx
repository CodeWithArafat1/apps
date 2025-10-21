import { useState } from "react";
import { FaGoogle, FaUser } from "react-icons/fa";
import { Link } from "react-router";
import Navbar from "../components/shared/Navbar";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { SET_USER } from "../reducer/reducer";
import { useAppContext } from "../contexts/context";

const googleProvider = new GoogleAuthProvider();

const SignupPage = () => {
  const { dispatch } = useAppContext();
  const [fullName, setFullName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Full Name:", fullName);
    console.log("Photo URL:", photoUrl);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleGoogleSignup = async () => {
    try {
      const createUser = await signInWithPopup(auth, googleProvider);
      console.log(createUser.user);
      dispatch({ type: SET_USER, payload: createUser.user });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-[80vh] bg-gray-900 flex items-center justify-center px-4">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Create an Account
          </h2>

          {/* Signup Form */}
          <form onSubmit={handleSignup} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-gray-200 mb-1">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="block text-gray-200 mb-1">Photo URL</label>
              <input
                type="text"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
                placeholder="Enter your photo URL"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-200 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-200 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white font-semibold transition"
            >
              <FaUser /> Sign Up
            </button>
          </form>

          {/* OR divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-600" />
            <span className="px-2 text-gray-400">OR</span>
            <hr className="flex-grow border-gray-600" />
          </div>

          {/* Social Signup */}
          <div className="space-y-3">
            <button
              onClick={handleGoogleSignup}
              className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-white font-semibold transition"
            >
              <FaGoogle /> Sign up with Google
            </button>
          </div>

          {/* Login link */}
          <p className="text-gray-400 mt-4 text-center">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
