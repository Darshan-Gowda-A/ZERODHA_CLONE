import React from "react";
import Hero from "./Hero";
import Awards from "./Award";
import Stats from "./Stats";
import Education from "./Education";
import OpenAccount from "../OpenAccount";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Pricings from "./Pricings";

function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricings />
      <Education />
      <OpenAccount />
    </>
  );
}

export default HomePage;
