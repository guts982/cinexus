"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import {
    setMovieList,
} from "@/lib/redux/slices/movieSlice";



const Filter = () => {
  const movieList = useSelector(
    (state: RootState) => state.movies.movieList
  );

  const [activeMovieList, setActiveMovieList] =
    useState<IMovieList>(movieList);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMovieList(activeMovieList));
  }, [dispatch, activeMovieList]);


  return (
    
      <div className=" flex justify-center items-center  text-[.7rem] sm:text-[.8rem] ">
        <motion.button
          whileHover={{ scaleX: 1.05 }}
          whileTap={{ scaleX: 0.85 }}
          onClick={(e) => setActiveMovieList("now_playing")}
          className={` relative rounded-l-lg  border border-r-0 px-2 py-1   ${
            activeMovieList == "now_playing" && "text-white"
          } `}
        >
          {activeMovieList == "now_playing" && (
            <motion.div
              transition={{ duration: 0.3 }}
              layoutId="active-trend-duration"
              className="absolute left-0 top-0 h-full  w-full rounded-l-lg bg-accent px-2 py-1 dark:bg-accent"
            />
          )}
          <span className="relative whitespace-nowrap">Now Playing</span>
        </motion.button>

        <motion.button
          onClick={(e) => setActiveMovieList("popular")}
          whileHover={{ scaleX: 1.05 }}
          whileTap={{ scaleX: 0.85 }}
          className={` relative    border  px-2 py-1     ${
            activeMovieList == "popular" && "text-white"
          }  `}
        >
          {activeMovieList == "popular" && (
            <motion.div
              transition={{ duration: 0.3 }}
              layoutId="active-trend-duration"
              className="absolute left-0 top-0 h-full  w-full  bg-accent px-2 py-1 dark:bg-accent"
            />
          )}
          <span className="relative  whitespace-nowrap">Popular</span>
        </motion.button>

        <motion.button
          onClick={(e) => setActiveMovieList("top_rated")}
          whileHover={{ scaleX: 1.05 }}
          whileTap={{ scaleX: 0.85 }}
          className={` relative    border  px-2 py-1     ${
            activeMovieList == "top_rated" && "text-white"
          }  `}
        >
          {activeMovieList == "top_rated" && (
            <motion.div
              transition={{ duration: 0.3 }}
              layoutId="active-trend-duration"
              className="absolute left-0 top-0 h-full  w-full  bg-accent px-2 py-1 dark:bg-accent"
            />
          )}
          <span className="relative  whitespace-nowrap">Top Rated</span>
        </motion.button>

        <motion.button
          onClick={(e) => setActiveMovieList("upcoming")}
          whileHover={{ scaleX: 1.05 }}
          whileTap={{ scaleX: 0.85 }}
          className={` relative rounded-r-lg   border  px-2 py-1     ${
            activeMovieList == "upcoming" && "text-white"
          }  `}
        >
          {activeMovieList == "upcoming" && (
            <motion.div
              transition={{ duration: 0.3 }}
              layoutId="active-trend-duration"
              className="absolute left-0 top-0 h-full  w-full rounded-r-lg bg-accent px-2 py-1 dark:bg-accent"
            />
          )}
          <span className="relative  whitespace-nowrap">Upcoming</span>
        </motion.button>
      </div>
  
  );
};

export default Filter;
