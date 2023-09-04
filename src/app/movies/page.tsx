import HeroBanner from "@/components/layout/HeroBanner";
import React from "react";
import DiscoverMovies from "@/components/DiscoverMovies";

const MoviesPage = () => {
  return (
    <>
   
      <section className=" h-full w-full p-4 sm:p-6 xl:p-10 2xl:p-14  flex flex-col justify-center items-center gap-5 ">
        
     

        <DiscoverMovies />
      </section>
    </>
  );
};

export default MoviesPage;
