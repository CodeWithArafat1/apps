import React from "react";
import GameCard from "./GameCard";
import { useAppContext } from "../contexts/context";

const TopRatedGame = () => {
  const { gamesData } = useAppContext();

  const sortedGame = gamesData
    .sort((a, b) => b.ratings - a.ratings)
    .slice(0, 3);

  return (
    <div>
      <h2 className="text-4xl font-display font-bold text-center mb-12 text-white">
        Top Rated <span className="text-secondary">Games</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {sortedGame.map((game) => (
          <GameCard {...game} key={game.id} />
        ))}
      </div>
    </div>
  );
};

export default TopRatedGame;
