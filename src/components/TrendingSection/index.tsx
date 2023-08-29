import React from "react";
import Filter from "./Filter";
import TrendingMovies from "./TrendingMovies";

const TrendingSection = () => {
  return (
    <div className=" w-full ">
      <div className="w-full flex justify-between items-center mb-3 ">
        <div className="font-normal text-4xl text-accent dark:text-yellow-600">
          Trending
        </div>
        <Filter />
      </div>

        <TrendingMovies />

    </div>
  );
};

export default TrendingSection;
