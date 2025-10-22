import { FaArrowRight, FaGoogle } from "react-icons/fa";
import Navbar from "../components/shared/Navbar";
import { Link, useLocation, useNavigate } from "react-router";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useAppContext } from "../contexts/context";
import {
  SET_ERROR_EMAIL,
  SET_ERROR_PASSWORD,
  SET_USER,
} from "../reducer/reducer";
import { toast } from "react-toastify";

const googleProvider = new GoogleAuthProvider();

const LoginPage = () => {
  const { dispatch, passwordError, emailError } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    dispatch({ type: SET_ERROR_EMAIL, payload: null });
    dispatch({ type: SET_ERROR_PASSWORD, payload: null });

    if (!email.endsWith(".com")) {
      dispatch({ type: SET_ERROR_EMAIL, payload: "Place Provide Valid Email" });
      return;
    }
    try {
      const signInUser = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch({ type: SET_USER, payload: signInUser.user });
      toast.success("Login successfully");
      navigate(location.state || "/");
    } catch (err) {
      toast.error(err.message)
      dispatch({ type: SET_ERROR_PASSWORD, payload: "Invalid credential" });
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const createUser = await signInWithPopup(auth, googleProvider);
      dispatch({ type: SET_USER, payload: createUser.user });
      toast.success("Login successfully");
      navigate(location.state || "/");
    } catch (err) {
     toast.error(err.message)
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

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-200 mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              {emailError && <p className="text-red-500 pt-2">{emailError}</p>}
            </div>
            <div>
              <label className="block text-gray-200 mb-1">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              {passwordError && (
                <p className="text-red-500 pt-2">{passwordError}</p>
              )}
              <div className="text-right mt-2">
                <Link
                  to="/auth/forgot-password"
                  className="text-blue-400 hover:underline text-sm"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white font-semibold transition"
            >
              <FaArrowRight /> Login
            </button>
          </form>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-600" />
            <span className="px-2 text-gray-400">OR</span>
            <hr className="flex-grow border-gray-600" />
          </div>

          <div className="space-y-3">
            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-white font-semibold transition"
            >
              <FaGoogle /> Login with Google
            </button>
          </div>

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
