import React from "react";
import Navbar from "../components/shared/Navbar";
import Hero from "../pages/Hero";
import TopRatedGame from "../components/TopRatedGame";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>

      <main>
        <Outlet/>
      </main>
    </>
  );
};

export default Root;
