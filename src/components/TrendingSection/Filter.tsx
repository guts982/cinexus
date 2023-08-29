"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { setTrendingTimeWindow } from "@/lib/redux/slices/movieSlice";

const MotionButton = motion(Button);

const Filter = () => {
  const trendingTimeWindow = useSelector(
    (state: RootState) => state.movies.trendingTimeWindow
  );
  const [activeTrend, setActiveTrend] = useState<"day" | "week">(
    trendingTimeWindow
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTrendingTimeWindow(activeTrend));
  }, [activeTrend]);

  return (
    <div className=" flex justify-center items-center mb-5 ">
      <motion.button
        whileHover={{ scaleX: 1.05 }}
        whileTap={{ scaleX: 0.85 }}
        onClick={(e) => setActiveTrend("day")}
        className={` relative rounded-l-lg  border border-r-0 px-2 py-1   ${activeTrend=="day"&&"text-white"} `}
      >
        {activeTrend == "day" && (
          <motion.div
            transition={{ duration: 0.3 }}
            layoutId="active-trend"
            className="absolute left-0 top-0 h-full  w-full rounded-l-lg bg-accent px-2 py-1 dark:bg-accent"
          />
        )}
        <span className="relative">Day</span>
      </motion.button>

      <motion.button
        onClick={(e) => setActiveTrend("week")}
        whileHover={{ scaleX: 1.05 }}
        whileTap={{ scaleX: 0.85 }}
        className={` relative rounded-r-lg   border border-l-0 px-2 py-1     ${activeTrend=="week"&&"text-white"}  `}
      >
        {activeTrend == "week" && (
          <motion.div
            transition={{ duration: 0.3 }}
            layoutId="active-trend"
            className="absolute left-0 top-0 h-full  w-full rounded-r-lg bg-accent px-2 py-1 dark:bg-accent"
          />
        )}
        <span className="relative">Week</span>
      </motion.button>
    </div>
  );
};

export default Filter;
