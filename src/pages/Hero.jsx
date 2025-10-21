import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import slide1 from "../assets/kv1.jpg";
import slide2 from "../assets/kv2.jpg";
import slide3 from "../assets/kv4.jpg";
import TopRatedGame from "../components/TopRatedGame";
import { gsap } from "gsap";
import { Link } from "react-router";
import Newsletter from "../components/Newsletter";


const Hero = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const images = [slide1, slide2, slide3];


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
    <div className="relative w-full mx-auto h-screen   bg-slate-900">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="outline-none focus:outline-none relative game-card">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />

            <div
              className="
            absolute inset-0 flex items-center justify-center 
            text-white  font-bold
            bg-black/60 rounded-lg 
          "
            >
              <div className="text-center space-y-5">
                <h1 className="font-display text-xl md:text-5xl font-bold ">
                  Discover Your Next
                </h1>
                <h1 className="font-display text-xl md:text-5xl font-bold text-purple-500">
                  Indie Obsession
                </h1>

                <div className="mt-8 flex justify-center space-x-4">
                  <Link
                    to="/all-games"
                    className="px-8 py-3 text-sm  font-semibold text-white bg-primary rounded-md bg-purple-700 transition duration-300"
                  >
                    Explore Games
                  </Link>
                  <a
                    href="#"
                    className="px-8 py-3 text-sm   font-semibold text-white bg-gray-700 rounded-md hover:bg-gray-600 transition duration-300"
                  >
                    Join Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="container mx-auto my-12 game-card">
        <TopRatedGame />
      </div>

      <div className="game-card">
        <Newsletter />
      </div>
    </div>
  );
};

export default Hero;
