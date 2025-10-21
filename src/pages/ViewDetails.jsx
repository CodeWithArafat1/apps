
import { IoIosArrowBack } from "react-icons/io";
import { useAppContext } from "../contexts/context";
import { Link, useParams } from "react-router";
import { IoStar } from "react-icons/io5";
import Newsletter from "../components/Newsletter";
import Navbar from "../components/shared/Navbar";

const ViewDetails = () => {
  const { gamesData } = useAppContext();
  const { id } = useParams();
  console.log(id);
  const game = gamesData.find((games) => games.id === id);

  console.log(game);

  if (!game)
    return <p className="text-white text-center mt-10">No game selected</p>;

  return (
   <div className="">
    <title>View details</title>
    <Navbar/>
     <section className="dark:bg-gray-900  py-12 px-6 lg:px-20">
      <Link to='/all-games' className="flex items-center gap-2 text-blue-500 mb-6 hover:underline">
        <IoIosArrowBack /> Back
      </Link>

      <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl overflow-hidden shadow-lg p-6 md:p-10">
        <div className="flex flex-col md:flex-row gap-6">

          <img
            src={game.coverPhoto}
            alt={game.title}
            className="w-full md:w-1/3 rounded-lg object-cover"
          />

          <div className="flex-1 text-white">
            <h1 className="text-3xl font-bold mb-2">{game.title}</h1>
            <p className="text-gray-300 mb-4">{game.category}</p>
            <p className="text-gray-300 mb-4">{game.description}</p>

            <p className="mb-2">
              <span className="font-semibold">Developer:</span> {game.developer}
            </p>
            <p className="mb-4 flex items-center gap-2">
              <span className="font-semibold">Ratings:</span><IoStar /> 
              {game.ratings}
            </p>

            <a
              href={game.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-400 text-white px-6 py-2 rounded-md font-semibold"
            >
              Download
            </a>
          </div>
        </div>
      </div>

   
    </section>
    <Newsletter/>
   </div>
  );
};

export default ViewDetails;
