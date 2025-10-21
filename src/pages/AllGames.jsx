import { useEffect } from "react";
import { IoGameController } from "react-icons/io5";
import { gsap } from "gsap";
import GameCard from "../components/GameCard";
import { useAppContext } from "../contexts/context";

const AllGames = () => {
  const { gamesData } = useAppContext();

  useEffect(() => {
    gsap.set(".game-card", { opacity: 0, y: 50 });

    gsap.to(".game-card", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="dark:bg-gray-900 py-10">
      <div className="container mx-auto px-4">
        <div className="text-3xl font-bold text-center mb-8 text-white flex items-center justify-center gap-2">
          <IoGameController className="text-blue-400 text-4xl" />
          <h1>All Games</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {gamesData.map((game) => (
            <div key={game.id} className="game-card">
              <GameCard {...game} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllGames;
