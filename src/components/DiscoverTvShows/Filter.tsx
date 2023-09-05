"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import {
    setTvSeriesList,
} from "@/lib/redux/slices/movieSlice";



const Filter = () => {
  const tvSeriesList = useSelector(
    (state: RootState) => state.movies.tvSeriesList
  );

  const [activeTvSeriesList, setActiveTvSeriesList] =
    useState<ITvSeriesList>(tvSeriesList);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTvSeriesList(activeTvSeriesList));
  }, [dispatch, activeTvSeriesList]);


  return (
    <>
  

      <div className=" flex justify-center items-center  text-[.7rem] sm:text-[.8rem] ">
        <motion.button
          whileHover={{ scaleX: 1.05 }}
          whileTap={{ scaleX: 0.85 }}
          onClick={(e) => setActiveTvSeriesList("on_the_air")}
          className={` relative rounded-l-lg  border border-r-0 px-2 py-1   ${
            activeTvSeriesList == "on_the_air" && "text-white"
          } `}
        >
          {activeTvSeriesList == "on_the_air" && (
            <motion.div
              transition={{ duration: 0.3 }}
              layoutId="active-trend-duration"
              className="absolute left-0 top-0 h-full  w-full rounded-l-lg bg-accent px-2 py-1 dark:bg-accent"
            />
          )}
          <span className="relative">On The Air</span>
        </motion.button>

        <motion.button
          onClick={(e) => setActiveTvSeriesList("popular")}
          whileHover={{ scaleX: 1.05 }}
          whileTap={{ scaleX: 0.85 }}
          className={` relative    border  px-2 py-1     ${
            activeTvSeriesList == "popular" && "text-white"
          }  `}
        >
          {activeTvSeriesList == "popular" && (
            <motion.div
              transition={{ duration: 0.3 }}
              layoutId="active-trend-duration"
              className="absolute left-0 top-0 h-full  w-full  bg-accent px-2 py-1 dark:bg-accent"
            />
          )}
          <span className="relative">Popular</span>
        </motion.button>

        <motion.button
          onClick={(e) => setActiveTvSeriesList("top_rated")}
          whileHover={{ scaleX: 1.05 }}
          whileTap={{ scaleX: 0.85 }}
          className={` relative    border  px-2 py-1     ${
            activeTvSeriesList == "top_rated" && "text-white"
          }  `}
        >
          {activeTvSeriesList == "top_rated" && (
            <motion.div
              transition={{ duration: 0.3 }}
              layoutId="active-trend-duration"
              className="absolute left-0 top-0 h-full  w-full  bg-accent px-2 py-1 dark:bg-accent"
            />
          )}
          <span className="relative">Top Rated</span>
        </motion.button>

        <motion.button
          onClick={(e) => setActiveTvSeriesList("airing_today")}
          whileHover={{ scaleX: 1.05 }}
          whileTap={{ scaleX: 0.85 }}
          className={` relative rounded-r-lg   border  px-2 py-1     ${
            activeTvSeriesList == "airing_today" && "text-white"
          }  `}
        >
          {activeTvSeriesList == "airing_today" && (
            <motion.div
              transition={{ duration: 0.3 }}
              layoutId="active-trend-duration"
              className="absolute left-0 top-0 h-full  w-full rounded-r-lg bg-accent px-2 py-1 dark:bg-accent"
            />
          )}
          <span className="relative">Airing Today</span>
        </motion.button>
      </div>
    </>
  );
};

export default Filter;
