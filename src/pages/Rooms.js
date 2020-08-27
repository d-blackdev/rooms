import React from "react";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { NavLink } from "react-router-dom";
import RoomsContainer from '../Components/RoomsContainer'
function Rooms() {
  return (
    <>
     <Hero hero="roomsHero">
      <Banner title="our rooms">
        <NavLink to="/" className="btn-primary">
          back home
        </NavLink>
      </Banner>
      </Hero>
      <RoomsContainer/>
    </>
  );
}

export default Rooms;
