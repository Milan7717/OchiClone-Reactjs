import React from "react";
import Navbar from "../components/Navbar";
import LandingPage from "../components/LandingPage";
import Marquee from "../components/Marquee";
import About from "../components/About";
import Eyes from "../components/Eyes";
import Features from "../components/Features";
import Endcard from "../components/Endcard";
import Footer from "../components/Footer";
import LocomotiveScroll from "locomotive-scroll";


const Home = () => {
  const locomotiveScroll=new LocomotiveScroll()
  return (
    <div className="w-full min-h-screen text-white bg-zinc-900">
      <Navbar />

      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Features />
    <Endcard />
    <Footer />
    </div>
  );
};

export default Home;
