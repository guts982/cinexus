"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import {
  setTrendingCategory,
  setTrendingTimeWindow,
} from "@/lib/redux/slices/movieSlice";


type ITrendingCategory = "all" | "movie" | "tv";
type ITrendingTimeWindow = "day" | "week";

const Filter = () => {
  const trendingTimeWindow = useSelector(
    (state: RootState) => state.movies.trendingTimeWindow
  );
  const trendingCategory = useSelector(
    (state: RootState) => state.movies.trendingCategory
  );
  const [activeTimeWindow, setActiveTimeWindow] =
    useState<ITrendingTimeWindow>(trendingTimeWindow);
  const [activeCategory, setActiveCategory] =
    useState<ITrendingCategory>(trendingCategory);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTrendingCategory(activeCategory));
  }, [dispatch, activeCategory]);
  useEffect(() => {
    dispatch(setTrendingTimeWindow(activeTimeWindow));
  }, [dispatch, activeTimeWindow]);

  return (
    <>
      <div className=" flex justify-center items-center   text-[.7rem] sm:text-[.8rem] ">
        <motion.button
          whileHover={{ scaleX: 1.05 }}
          whileTap={{ scaleX: 0.85 }}
          onClick={(e) => setActiveCategory("all")}
          className={` relative rounded-l-lg  border border-r-0 px-2 py-1   ${
            activeCategory == "all" && "text-white"
          } `}
        >
          {activeCategory == "all" && (
            <motion.div
              transition={{ duration: 0.3 }}
              layoutId="active-trend-category"
              className="absolute left-0 top-0 h-full  w-full rounded-l-lg bg-accent px-2 py-1 dark:bg-accent"
            />
          )}
          <span className="relative">All</span>
        </motion.button>

        <motion.button
          onClick={(e) => setActiveCategory("movie")}
          whileHover={{ scaleX: 1.05 }}
          whileTap={{ scaleX: 0.85 }}
          className={` relative    border  px-2 py-1     ${
            activeCategory == "movie" && "text-white"
          }  `}
        >
          {activeCategory == "movie" && (
            <motion.div
              transition={{ duration: 0.3 }}
              layoutId="active-trend-category"
              className="absolute left-0 top-0 h-full  w-full  bg-accent px-2 py-1 dark:bg-accent"
            />
          )}
          <span className="relative">Movie</span>
        </motion.button>

        <motion.button
          onClick={(e) => setActiveCategory("tv")}
          whileHover={{ scaleX: 1.05 }}
          whileTap={{ scaleX: 0.85 }}
          className={` relative rounded-r-lg   border border-l-0 px-2 py-1     ${
            activeCategory == "tv" && "text-white"
          }  `}
        >
          {activeCategory == "tv" && (
            <motion.div
              transition={{ duration: 0.3 }}
              layoutId="active-trend-category"
              className="absolute left-0 top-0 h-full  w-full rounded-r-lg bg-accent px-2 py-1 dark:bg-accent"
            />
          )}
          <span className="relative">TV</span>
        </motion.button>
      </div>

      <div className=" flex justify-center items-center  text-[.7rem] sm:text-[.8rem]  ">
        <motion.button
          whileHover={{ scaleX: 1.05 }}
          whileTap={{ scaleX: 0.85 }}
          onClick={(e) => setActiveTimeWindow("day")}
          className={` relative rounded-l-lg  border border-r-0 px-2 py-1   ${
            activeTimeWindow == "day" && "text-white"
          } `}
        >
          {activeTimeWindow == "day" && (
            <motion.div
              transition={{ duration: 0.3 }}
              layoutId="active-trend-duration"
              className="absolute left-0 top-0 h-full  w-full rounded-l-lg bg-accent px-2 py-1 dark:bg-accent"
            />
          )}
          <span className="relative">Day</span>
        </motion.button>

        <motion.button
          onClick={(e) => setActiveTimeWindow("week")}
          whileHover={{ scaleX: 1.05 }}
          whileTap={{ scaleX: 0.85 }}
          className={` relative rounded-r-lg   border border-l-0 px-2 py-1     ${
            activeTimeWindow == "week" && "text-white"
          }  `}
        >
          {activeTimeWindow == "week" && (
            <motion.div
              transition={{ duration: 0.3 }}
              layoutId="active-trend-duration"
              className="absolute left-0 top-0 h-full  w-full rounded-r-lg bg-accent px-2 py-1 dark:bg-accent"
            />
          )}
          <span className="relative">Week</span>
        </motion.button>
      </div>
    </>
  );
};

export default Filter;

// const ButtonPill = ({activeTrend,trend, setActiveTrend}:{activeTrend:ITrendingCategory | ITrendingTimeWindow, trend:ITrendingCategory | ITrendingTimeWindow, setActiveTrend:(trend:ITrendingCategory | ITrendingTimeWindow)=>void}) => {

//   return (
//     <motion.button
//     onClick={(e) => setActiveTrend(trend)}
//     whileHover={{ scaleX: 1.05 }}
//     whileTap={{ scaleX: 0.85 }}
//     className={` relative rounded-r-lg   border border-l-0 px-2 py-1     ${activeTrend==trend&&"text-white"}  `}
//   >
//     {activeTrend == trend && (
//       <motion.div
//         transition={{ duration: 0.3 }}
//         layoutId="active-trend"
//         className="absolute left-0 top-0 h-full  w-full rounded-r-lg bg-accent px-2 py-1 dark:bg-accent"
//       />
//     )}
//     <span className="relative">{trend}</span>
//   </motion.button>
//   )
// }
