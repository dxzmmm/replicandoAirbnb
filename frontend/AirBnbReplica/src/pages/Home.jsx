import React from "react";
import Items from "../components/items";

const Home = () => {
  return (
    <div className="mx-auto grid max-w-full grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-8 p-8 lg:max-w-7xl">
      <Items />
      <Items />
      <Items />
      <Items />
      <Items />
      <Items />
      <Items />
      <Items />
      <Items />
      <Items />
    </div>
  );
};

export default Home;
