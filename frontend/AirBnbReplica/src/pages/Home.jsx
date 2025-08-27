import React from "react";
import Items from "../components/items";

const Home = () => {
  return (
    <div className="mx-10 grid max-w-7xl grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-x-3 gap-y-15 py-10 lg:mx-30">
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
