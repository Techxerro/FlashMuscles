import React from "react";
import Herosection from "../Home/Herosection";

import Staminasection from "../Stamina/Staminasection";
import SupportingAthletes from "../Supporting/SupportingAthletes";
import Choosesection from "../choose/Choosesection";
import VideoPlayer from "../Videosection/Videosection";
import Product from "../product/Product";
import Testimonial from "../Testimonials/Testimonial";

function Home() {
  return (
    <>
      <Herosection />
      <Staminasection />
      <SupportingAthletes />
      <Choosesection />
      <VideoPlayer />
      <Product />
      <Testimonial />
    </>
  );
}

export default Home;
