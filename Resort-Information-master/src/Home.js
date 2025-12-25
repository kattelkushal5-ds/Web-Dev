import React from "react";
import Hero from "./Components/Hero";
import Banner from "./Components/Banner";
import { Link } from "react-router-dom";
import Services from "./Components/Services";
import FeaturedRoom from "./Components/FeaturedRoom";

export default function Home() {
  return (
    <React.Fragment>
      <Hero>
        <Banner title="luxurious room" subtitle="deluxe rooms starting at $299">
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRoom />
    </React.Fragment>
  );
}
