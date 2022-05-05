import React from "react";
import Discounted from "../Discounted";
import Explore from "../Explore";
import Featured from "../Featured";
import Highlights from "../Highlights";
import Landing from "../Landing";

const Home = () => {
  return (
    <>
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
    </>
  );
};

export default Home;
