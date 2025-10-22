import React from "react";
import { Link } from "react-router";
import { IoStar } from "react-icons/io5";

const GameCard = ({
  title,
  coverPhoto,
  developer,
  description,
  ratings,
  category,
  id,
}) => {
  return (
    <div
      className="group relative bg-gray-800/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl shadow-purple-500/10 border border-gray-700
                  transform hover:-translate-y-2 transition duration-300 ease-in-out"
    >
      <Link to={`/viewDetails/${id}`}>
        <img
          src={coverPhoto}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      <div className="p-6 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-purple-500 mix-blend-multiply filter blur-2xl opacity-20 group-hover:opacity-30 transition-all duration-300"
          style={{ zIndex: 0 }}
        ></div>
        <div
          className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-blue-500 mix-blend-multiply filter blur-2xl opacity-20 group-hover:opacity-30 transition-all duration-300"
          style={{ zIndex: 0 }}
        ></div>

        <div className="relative z-10">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-2xl font-bold font-display text-white leading-tight">
              {title}
            </h3>
            <span className="px-3 py-1 text-xs font-semibold text-purple-300 bg-purple-500/20 rounded-full whitespace-nowrap">
              {category}
            </span>
          </div>

          <p className="text-gray-400 text-sm mb-2">
            <span className="font-medium text-gray-300">Developer:</span>{" "}
            {developer}
          </p>
          <p className="text-gray-300 text-sm mb-4 line-clamp-3">
            {description}
          </p>

          <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-bold text-yellow-400 flex items-center gap-1">
              <IoStar /> {ratings}
            </span>
            <Link
              to={`/viewDetails/${id}`}
              className="px-5 py-2 text-sm font-semibold text-white bg-purple-600 rounded-md hover:bg-purple-500 transition duration-300 transform hover:scale-105"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
