import { FaGoogle, FaUser } from "react-icons/fa";
import { Link,  useNavigate } from "react-router";
import Navbar from "../components/shared/Navbar";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
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

const SignupPage = () => {
  const { dispatch, passwordError, emailError } = useAppContext();
  const navigate = useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault();
    const displayName = e.target.displayName.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const validator = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    dispatch({ type: SET_ERROR_PASSWORD, payload: null });
    dispatch({ type: SET_ERROR_EMAIL, payload: null });

    if (!email.endsWith(".com")) {
      dispatch({ type: SET_ERROR_EMAIL, payload: "Place Provide Valid Email" });
      return;
    }

    if (password.length < 6) {
      dispatch({
        type: SET_ERROR_PASSWORD,
        payload: "Password must be at least 6 characters long.",
      });
      return;
    }

    if (!validator.test(password)) {
      dispatch({
        type: SET_ERROR_PASSWORD,
        payload:
          "Password must contain at least one uppercase and one lowercase letter!",
      });
      return;
    }

    if ((password, email)) {
      try {
        const createUser = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        updateProfile(createUser.user, {
          displayName,
          photoURL,
        });
        toast.success("Account created successfully");
        navigate("/");
      } catch (err) {
        toast.error(err.message)
      }
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const createUser = await signInWithPopup(auth, googleProvider);
      console.log(createUser.user);
      dispatch({ type: SET_USER, payload: createUser.user });
      navigate("/");
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

          <form onSubmit={handleSignup} className="space-y-4">
     
            <div>
              <label className="block text-gray-200 mb-1">Full Name</label>
              <input
                type="text"
                name="displayName"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

          
            <div>
              <label className="block text-gray-200 mb-1">Photo URL</label>
              <input
                type="text"
                name="photoURL"
                placeholder="Enter your photo URL"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

       
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
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white font-semibold transition"
            >
              <FaUser /> Sign Up
            </button>
          </form>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-600" />
            <span className="px-2 text-gray-400">OR</span>
            <hr className="flex-grow border-gray-600" />
          </div>

          <div className="space-y-3">
            <button
              onClick={handleGoogleSignup}
              className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-white font-semibold transition"
            >
              <FaGoogle /> Sign up with Google
            </button>
          </div>

          <p className="text-gray-400 mt-4 text-center flex  gap-2">
            Already have an account?
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
