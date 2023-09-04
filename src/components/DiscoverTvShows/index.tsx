"use client";
import Image from "next/image";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { movieApi } from "@/lib/redux/slices/movieApi";
import { setTrendingTimeWindow } from "@/lib/redux/slices/movieSlice";
import { RootState, AppDispatch } from "@/lib/redux/store";
import { easeIn, motion } from "framer-motion";
import { useEffect } from "react";
import { Play } from "lucide-react";
import { useRouter } from "next/navigation";
import MoviesGrid from "../MoviesGrid";
import { Separator } from "@/components/ui/separator";
import Filter from "./Filter";

const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const DiscoverTvShows = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const tvSeriesList = useSelector(
    (state: RootState) => state.movies.tvSeriesList
  );
  const {
    data: tv_shows,
    isLoading,
    isError,
  } = useAppSelector((state: RootState) =>
    movieApi.endpoints.discover.select({
      category: "tv_shows",
      list: tvSeriesList,
    })(state)
  );

  useEffect(() => {
    dispatch(
      movieApi.endpoints.discover.initiate({
        category: "tv_shows",
        list: tvSeriesList,
      })
    );
  }, [dispatch, tvSeriesList]);

  return (
    <>
      <div className="w-full   flex justify-between flex-col sm:flex-row gap-2 sm:gap-0 items-center  ">
        <div className=" font-normal text-4xl text-accent dark:text-yellow-600">
          TV Shows
        </div>
        <Filter />
      </div>

      <Separator />
      <MoviesGrid isLoading={isLoading} movies={tv_shows as ITvShowsResult} />
    </>
  );
};

export default DiscoverTvShows;
