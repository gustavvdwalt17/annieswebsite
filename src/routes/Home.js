import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import LocationFirst from "../components/LocationFirst";
import LocationSecond from "../components/LocationSecond";
import ToDo from "../components/ToDo";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LocationFirst />
      <LocationSecond />

      <ToDo />

      <Footer />
    </>
  );
}

export default Home;
