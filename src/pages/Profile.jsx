import { useAppContext } from "../contexts/context";
import { signOut, updateProfile } from "firebase/auth";
import { SET_USER } from "../reducer/reducer";
import { useNavigate } from "react-router";
import { auth } from "../firebase/firebase.config";

const Profile = () => {
  const { user, dispatch } = useAppContext();
  const navigate = useNavigate();

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    const name = e.target.name.value || "";
    const photo = e.target.photo.value || "";
    const updateProfiles = {
      displayName: name || user.displayName,
      photoURL: photo || user.photoURL,
    };

    try {
      await updateProfile(auth.currentUser, updateProfiles);
      const updateUserState = {
        ...user,
        displayName: auth.currentUser.displayName,
        photoURL: auth.currentUser.photoURL,
      };
      dispatch({ type: SET_USER, payload: updateUserState });
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    console.log("Password change form submitted");
  };

  const handelSignOut = async () => {
    try {
      await signOut(auth);
      dispatch({ type: SET_USER, payload: null });
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen   py-20">
      <div className="w-full bg-white max-w-lg  rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Profile Settings
        </h2>

        {/* --- প্রোফাইল ছবি এবং নাম --- */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={user?.photoURL} // একটি স্যাম্পল ছবি
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-blue-500 mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800">
            {user?.displayName}
          </h3>
          <p className="text-gray-600">{user?.email}</p>
        </div>

        {/* --- প্রোফাইল আপডেট ফর্ম --- */}
        <form onSubmit={handleProfileUpdate} className="space-y-4">
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="displayName"
            >
              Display Name
            </label>
            <input
              type="text"
              name="name"
              id="displayName"
              defaultValue={user?.displayName}
              placeholder="Your Full Name"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="photoURL"
            >
              Photo URL
            </label>
            <input
              type="url"
              name="photo"
              id="photoURL"
              placeholder="https://example.com/your-photo.jpg"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              defaultValue={user?.email}
              readOnly
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Save Profile Changes
          </button>
        </form>

        {/* --- পাসওয়ার্ড পরিবর্তনের বিভাগ --- */}
        <div className="mt-8 border-t pt-6 border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Change Password
          </h3>
          <form onSubmit={handlePasswordChange} className="space-y-4">
            <div>
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="currentPassword"
              >
                Current Password
              </label>
              <input
                type="password"
                id="currentPassword"
                placeholder="Enter your current password"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="newPassword"
              >
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                placeholder="Enter a new password"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full cursor-pointer bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Update Password
            </button>
            <button
              onClick={handelSignOut}
              type="submit"
              className="w-full cursor-pointer bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
            >
              Log Out
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
