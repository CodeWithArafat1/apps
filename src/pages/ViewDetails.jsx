import { IoIosArrowBack } from "react-icons/io";
import { useAppContext } from "../contexts/context";
import { Link, useParams } from "react-router";
import {
  IoStar,
  IoGameController,
  IoCloudDownloadOutline,
} from "react-icons/io5";
import Newsletter from "../components/Newsletter";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const ViewDetails = () => {
  const { gamesData } = useAppContext();
  const { id } = useParams();

  const game = gamesData.find((games) => games.id === id);

  if (!game)
    return <p className="text-white text-center mt-10">No game selected</p>;

  return (
    <div className="dark:bg-gray-900 min-h-screen">
      <title>View Details | {game.title}</title>
      <Navbar />

      <section className="relative dark:bg-gray-900 py-12 px-6 lg:px-20 overflow-hidden">
        <Link
          to="/all-games"
          className="flex items-center gap-2 text-purple-300 mb-6 hover:text-white transition-colors duration-300 font-medium"
        >
          <IoIosArrowBack /> Back to All Games
        </Link>

        <div
          aria-hidden="true"
          className="absolute top-1/4 left-1/2 -z-10 -translate-x-1/2 blur-3xl w-[72rem] aspect-[1155/678]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20"
          ></div>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/10 border border-white/10">
          <div className="flex flex-col md:flex-row">
            <img
              src={game.coverPhoto}
              alt={game.title}
              className="w-full h-64 md:h-auto md:w-2/5 object-cover"
            />

            <div className="flex-1 text-white p-6 md:p-10">
              <span className="inline-block bg-purple-500/20 text-purple-300 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                {game.category}
              </span>

              <h1 className="text-5xl font-bold mb-4 font-display">
                {game.title}
              </h1>

              <p className="text-gray-200 mb-6 text-base leading-relaxed">
                {game.description}
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-gray-200">
                  <IoGameController className="text-purple-400 text-xl" />
                  <div>
                    <span className="font-semibold">Developer:</span>{" "}
                    {game.developer}
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-200">
                  <IoStar className="text-yellow-400 text-xl" />
                  <div>
                    <span className="font-semibold">Rating:</span>{" "}
                    {game.ratings} / 5
                  </div>
                </div>
              </div>

              <hr className="border-gray-600 mb-8" />

              <a
                href={game.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-purple-500/30 transform hover:scale-105"
              >
                <IoCloudDownloadOutline className="text-xl" />
                Download Now
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default ViewDetails;
