"use client";
import Image from "next/image";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { movieApi } from "@/lib/redux/slices/movieApi";
import { setTrendingTimeWindow } from "@/lib/redux/slices/movieSlice";
import { RootState, AppDispatch } from "@/lib/redux/store";
import { easeIn, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Play } from "lucide-react";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import MoviesGrid from "@/components/MoviesGrid";
import Filter from "./Filter";
import Pagination from "@/components/Pagination";
import { Button } from "../ui/button";

const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const DiscoverMovies = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const movieList = useSelector(
    (state: RootState) => state.movies.movieList
  );
  const [page, setPage] = useState<number>(1)
  const {
    data: movies,
    isLoading,
    isError,
  } = useAppSelector((state: RootState) =>
    movieApi.endpoints.discover.select({category:"movies",list:movieList,page:page})(state)
  );  
  

  useEffect(() => {
    dispatch(movieApi.endpoints.discover.initiate({category:"movies",list:movieList,page:page}));
  }, [dispatch,movieList,page]);



  return (
    <>
      <div className="w-full  flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between  items-center  ">
        <div className=" font-normal text-4xl text-accent dark:text-yellow-600">
          Movies
        </div>
        <Filter />
      </div>
      <Separator />

      <MoviesGrid isLoading={isLoading} movies={movies as IMoviesResult} />

      {/* <Button onClick={()=>setPage(o=>o+1)} disabled={isLoading} > {isLoading ? "Loading..." : "Load More"} </Button> */}

      {/* <Pagination
             current={movies?.page || 1}
             total_pages={movies?.total_pages ? (movies?.total_pages>500 ? movies?.total_pages/2 : movies?.total_pages)  : 1}
             total_results={movies?.total_results || 0}
             page={page}
             setPage={setPage}
      /> */}
    </>
  );
};

export default DiscoverMovies;
