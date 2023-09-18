import React from "react";
import Hero from "../Components/Hero/Hero";
import Review from "../Components/Review/Review";
import Faq from "../Components/Faq/Faq";
import Content from "../Components/Content/Content";
import { heroOne, heroThree, heroTwo } from "../data/Content";

const Home = () => {
  return (
    <>
      <Hero />
      <Review />
      <Content {...heroOne} />
      <Content {...heroTwo} />
      <Content {...heroThree} />
      <Faq />
    </>
  );
};

export default Home;
