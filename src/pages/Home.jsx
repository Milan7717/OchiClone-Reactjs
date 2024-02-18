import React from "react";
import Navbar from "../components/Navbar";
import LandingPage from "../components/LandingPage";
import Marquee from "../components/Marquee";
import About from "../components/About";
import Eyes from "../components/Eyes";
import Features from "../components/Features";
import Endcard from "../components/Endcard";

const Home = () => {
  return (
    <div className="w-full min-h-screen text-white bg-zinc-900">
      <Navbar />

      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Features />
    <Endcard />
    </div>
  );
};

export default Home;
