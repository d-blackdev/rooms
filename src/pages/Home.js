import React from "react";
import { NavLink } from "react-router-dom";
import Banner from "../Components/Banner";
import Hero from "../Components/Hero";
import Services from '../Components/Services'
import FeaturedRooms from "../Components/FeaturedRooms";

function Home() {
  return (
    <>
    <Hero hero="defaultHero">
      <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
        <NavLink to="/rooms" className="btn-primary">
          our rooms
        </NavLink>
      </Banner>
      </Hero>
      <Services />
      <FeaturedRooms/>
      </>
  );
}

export default Home;
