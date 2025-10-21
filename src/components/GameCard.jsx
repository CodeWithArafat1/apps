import React from "react";
import { Link } from "react-router";

const GameCard = ({title,coverPhoto,developer,description,ratings,category, id}) => {
  return (
    <>
      <section className="container mx-auto ">
        <div className="bg-light-bg rounded-lg overflow-hidden  shadow-2xl shadow-primary/10 transform hover:-translate-y-2 transition duration-300 ease-in-out">
          <Link to="/">
            <img src={coverPhoto} alt="" className=""/>
          </Link>
          <div className="p-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-2xl font-bold font-display text-white">
                {title}
              </h3>
              <span className="px-3 py-1 text-xs font-semibold text-secondary bg-secondary/20 rounded-full">
                {category}
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Developer: {developer}
            </p>
            <p className="text-gray-300 text-sm mb-4 line-clamp-2">
             {description}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-secondary">★ {ratings}</span>
              <Link
                to={`/viewDetails/${id}`}
                className="px-4 py-2 text-sm font-medium text-dark-bg bg-secondary rounded-md bg-cyan-300 transition duration-300"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GameCard;
