import React from "react";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { NavLink } from "react-router-dom";

function ErrorPage() {
  return (<Hero>
      <Banner title="404" subtitle="page not found.">
          <NavLink to='/' className="btn-primary">Back home</NavLink>
      </Banner>
  </Hero>)
}

export default ErrorPage;
