import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { useAppContext } from "../../contexts/context";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { SET_USER } from "../../reducer/reducer";

const Navbar = () => {
  const { user, dispatch } = useAppContext();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handelSignOut = async () => {
    try {
      await signOut(auth);
      dispatch({ type: SET_USER, payload: null });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav className="bg-gray-900 border-b border-gray-700">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-3xl font-bold text-white font-display">
          Game<span className="text-purple-500">Hub</span>
        </Link>

        <div className="flex items-center space-x-6">
          <ul className="hidden md:flex space-x-6 font-medium text-white">
            <li>
              <NavLink to="/" className="hover:text-purple-400">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/all-games" className="hover:text-purple-400">
                All Games
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="hover:text-purple-400">
                Categories
              </NavLink>
            </li>
          </ul>

          {user ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center text-sm bg-gray-800 rounded-full p-1"
              >
                {user && (
                  <img
                    className="w-8 h-8 rounded-full cursor-pointer"
                    src={user?.photoURL}
                    alt="user"
                  />
                )}
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-700 rounded-lg shadow-lg z-50">
                  <div className="px-4 py-3 text-white ">
                    <h1 className="font-bold">{user?.displayName}</h1>
                    <p className="text-wrap wrap-anywhere">{user?.email}</p>
                  </div>
                  <ul className="py-2">
                    <li>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-gray-200 hover:bg-gray-600 rounded-md"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handelSignOut}
                        className="block px-4 py-2 text-gray-200 hover:bg-gray-600 rounded-md"
                      >
                        Sign out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-2">
              <Link
                to="/auth/login"
                className="flex items-center gap-2 bg-purple-500 px-2 md:px-5 cursor-pointer py-2 rounded-md text-white"
              >
                <FaArrowRight /> Login
              </Link>
              <Link
                to="/auth/signup" 
                className="md:flex hidden items-center gap-2 bg-purple-500 px-2 md:px-5 cursor-pointer py-2 rounded-md text-white"
              >
                <FaArrowRight /> Sign Up
              </Link>
            </div>
          )}

          <button
            className="md:hidden text-white ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <ul className="flex flex-col p-4 space-y-2 font-medium text-white">
            <li>
              <NavLink
                to="/"
                className="block px-3 py-2 hover:bg-gray-700 rounded-md"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-games"
                className="block px-3 py-2 hover:bg-gray-700 rounded-md"
              >
                All Games
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="block px-3 py-2 hover:bg-gray-700 rounded-md"
              >
                Categories
              </NavLink>
            </li>
            <li>
              <Link
                to="/auth/signup" 
                className="md:hidden flex items-center gap-2 bg-purple-500 px-2 md:px-5 cursor-pointer py-2 rounded-md text-white"
              >
                <FaArrowRight /> Sign Up
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
