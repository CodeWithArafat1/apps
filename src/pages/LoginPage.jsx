import { useState } from "react";
import { FaArrowRight, FaGoogle, FaGithub } from "react-icons/fa";
import Navbar from "../components/shared/Navbar";
import { Link } from "react-router";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useAppContext } from "../contexts/context";
import { SET_USER } from "../reducer/reducer";

const googleProvider = new GoogleAuthProvider();

const LoginPage = () => {
  const { dispatch } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleGoogleLogin = async () => {
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
            Login to GameHub
          </h2>

          {/* Email / Password Login */}
          <form onSubmit={handleLogin} className="space-y-4">
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
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white font-semibold transition"
            >
              <FaArrowRight /> Login
            </button>
          </form>

          {/* OR divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-600" />
            <span className="px-2 text-gray-400">OR</span>
            <hr className="flex-grow border-gray-600" />
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-white font-semibold transition"
            >
              <FaGoogle /> Login with Google
            </button>
          </div>

          {/* Signup link */}
          <p className="text-gray-400 mt-4 text-center">
            Don't have an account?
            <Link to="/auth/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
