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
import MoviesGrid from "@/components/MoviesGrid";
import Filter from "./Filter";
import Pagination from "@/components/Pagination";

const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const TrendingMovies = () => {
  
  const trendingTimeWindow = useSelector(
    (state: RootState) => state.movies.trendingTimeWindow
  );
  const trendingCategory = useSelector(
    (state: RootState) => state.movies.trendingCategory
  );
  const dispatch: AppDispatch = useAppDispatch();

  const [page, setPage] = useState<number>(1)
 

  const {
    data: trendingResult,
    isLoading,
    isError,
  } = useAppSelector((state: RootState) =>
    movieApi.endpoints.trending.select({category:trendingCategory, timeWindow:trendingTimeWindow, page:page})(state)
  );

// console.log("result::",trendingResult);

  useEffect(() => {
    dispatch(movieApi.endpoints.trending.initiate({category:trendingCategory, timeWindow:trendingTimeWindow, page:page}));
  }, [dispatch,trendingCategory, trendingTimeWindow, page]);

  return (
    <>
       <div className="w-full flex justify-between items-center flex-col sm:flex-row gap-2 sm:gap-0 mb-5 ">
        <div className="font-normal text-4xl text-accent dark:text-yellow-600">
          Trending
        </div>
        <Filter/>
      </div>

      <MoviesGrid 
      isLoading={isLoading}
      movies={trendingResult as IMovieResult}
      />

      {/* <Pagination
             current={trendingResult?.page || 1}
             total_pages={trendingResult?.total_pages ? (trendingResult?.total_pages>500 ? trendingResult?.total_pages/2 : trendingResult?.total_pages)  : 1}
             total_results={trendingResult?.total_results || 0}
             page={page}
             setPage={setPage}
      /> */}

    </>
  )

  /*
  return (
    <motion.div
      layoutId="trending-data"
      className="
        col-gap-4 grid 
          gap-3  
        grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7"
    >
      {isLoading
        ? "Loading..."
        : trendingResult?.results?.map((res) => (
            <motion.div
              key={res.id}
              layoutId={`movie-${res.id}`}
              className=" mx-auto flex w-fit flex-col items-center max-w-[240px]
            justify-start rounded-md   shadow-md  dark:bg-accent sm:mb-2 lg:mb-5 
         "
            >
              <div
                className=" relative rounded rounded-t-md border-b-2  border-accent 
   cursor-pointer group
   "
                onClick={() => handleClick(res.id)}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="group-hover:flex hidden absolute h-full w-full bg-black/50  justify-center items-center"
                >
                  <Play className=" bg-indigo-700 font-light text-md text-white rounded-full p-4 h-16 w-16 " />
                </motion.div>

                <Image
                  className=" rounded-t-md"
                  width={240}
                  height={300}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="/images/placeholder-portrait.jpg"
                  alt={res.title || "Search Result Image"}
                  src={
                    res.poster_path
                      ? `${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${process.env.NEXT_PUBLIC_W500}${res.poster_path}`
                      : "/images/placeholder-portrait.jpg"
                  }
                ></Image>
                <div
                  className="absolute bottom-0 w-full bg-black/50 px-3 py-2  font-sulphur  font-light
      text-sm text-yellow-400 "
                >
                  {res.vote_average} average vote from {res.vote_count} voters
                </div>
              </div>
              <div
                className=" bottom-0 flex  flex-wrap h-full w-full
                    items-start justify-start p-2 font-semibold  text-md 
                    "
              >
                <motion.div
                  className=" title text-left w-full  cursor-pointer opacity-60"

                  whileHover={{
                    y: -.5,
                    opacity: 1,
                    transition: { type: easeIn, duration: 0.4 },
                  }}
                  onClick={() => handleClick(res.id)}
                >
                  {res.title || "No Title!"}
                </motion.div>
              </div>
            </motion.div>
          ))}
    </motion.div>
  ); */
};

export default TrendingMovies;
