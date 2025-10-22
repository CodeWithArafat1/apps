import { useAppContext } from "../contexts/context";
import { signOut, updateProfile, sendPasswordResetEmail } from "firebase/auth";
import { SET_USER } from "../reducer/reducer";
import { useNavigate } from "react-router";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";

const UpdateProfile = () => {
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
      dispatch({
        type: SET_USER,
        payload: { ...user, displayName: auth.currentUser.displayName, photoURL: auth.currentUser.photoURL },
      });
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const handlePasswordReset = async () => {
    try {
      await sendPasswordResetEmail(auth, user.email);
      toast.success('Check Your Email')
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch({ type: SET_USER, payload: null });
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 py-20">
      <div className="w-full max-w-md bg-gray-800 rounded-xl p-8 text-white">
        <h2 className="text-3xl font-bold text-center mb-6 text-purple-400">Profile Settings</h2>

        <div className="flex flex-col items-center mb-6">
          <img
            src={user?.photoURL || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-purple-500 mb-4 shadow-[0_0_20px_rgba(168,85,247,0.5)]"
          />
          <h3 className="text-xl font-semibold">{user?.displayName}</h3>
          <p className="text-gray-300">{user?.email}</p>
        </div>

        <form onSubmit={handleProfileUpdate} className="space-y-4">
          <div>
            <label className="block text-gray-300 text-sm mb-1" htmlFor="displayName">Display Name</label>
            <input
              type="text"
              name="name"
              id="displayName"
              defaultValue={user?.displayName}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-1" htmlFor="photoURL">Photo URL</label>
            <input
              type="url"
              name="photo"
              id="photoURL"
               placeholder="https://via.placeholder.com/profile.png"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-gray-300 text-sm mb-1" htmlFor="email">Email</label>
            <input
              type="url"
              name="email"
              id="email"
              value={user?.email}
              readOnly
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded-lg shadow-[0_0_20px_rgba(168,85,247,0.5)]"
          >
            Save Changes
          </button>
        </form>

        <div className="mt-6 flex flex-col space-y-3">
          <button
            onClick={handlePasswordReset}
            className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.5)]"
          >
            Forgot Password
          </button>

          <button
            onClick={handleSignOut}
            className="w-full bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-[0_0_20px_rgba(239,68,68,0.5)]"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
