"use client";
import { motion } from "framer-motion";
import { Play, ThumbsUp, ThumbsDown, Plus, Video } from "lucide-react";
import { movieApi } from "@/lib/redux/slices/movieApi";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/lib/redux/store";
import { useEffect } from "react";
import Image from "next/image";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";
import { formatNumberWithAbbreviations } from "@/lib/utils";
import Skeleton from "./Skeleton";

const MotioPlay = motion(Play);

const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const MovieDetails = ({ movieId }: { movieId: string }) => {
  const {
    data: movie,
    isLoading,
    isError,
  } = useAppSelector((state: RootState) =>
    movieApi.endpoints.movie.select(movieId)(state)
  );
  const dispatch: AppDispatch = useAppDispatch();

  useEffect(() => {
    dispatch(movieApi.endpoints.movie.initiate(movieId));
  }, [dispatch, movieId]);

  if (isLoading) return <Skeleton />;

  if (!movie) return null;

  return (
    <div className="h-full w-full ">
      <div className="relative  w-full ">
        <div className="relative  h-[80vh] w-[100vw] ">
          <Image
            className=" rounded-t-md "
            fill
            loading="lazy"
            placeholder="blur"
            blurDataURL="/images/placeholder-portrait.jpg"
            alt={movie.title || "Search Result Image"}
            src={
              movie.poster_path
                ? `${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${process.env.NEXT_PUBLIC_ORIGINAL}${movie.backdrop_path}`
                : "/images/placeholder-portrait.jpg"
            }
          />
        </div>
        <div className="h-[80vh] w-[100vw] absolute top-0 bg-black/30">
          <h2 className="w-full text-white font-semibold bg-black/30 p-2">
            Home / Movie / {movie.title}
          </h2>
          <motion.div className="w-full   h-full  flex justify-center items-center cursor-pointer">
            <MotioPlay
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.2 }}
              className="   bg-indigo-700 font-light text-md text-white rounded-full p-4 h-24 w-24 "
            />
          </motion.div>
        </div>
      </div>

      <div className="mx-auto p-10  shadow-md relative -top-10 rounded-3xl w-[90vw]  bg-primary-foreground  flex justify-center gap-5 sm:gap-0 sm:justify-start items-start flex-col sm:flex-row  ">
        <div className="w-full sm:w-fit flex flex-col justify-center items-center gap-2">
          <Image
            className=" rounded-md"
            width={200}
            height={280}
            sizes="(max-width:768px) 200px, (max-width:1200px) 210px, 240px"
            loading="lazy"
            placeholder="blur"
            blurDataURL="/images/placeholder-portrait.jpg"
            alt={movie.title || "Search Result Image"}
            src={
              movie.poster_path
                ? `${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${process.env.NEXT_PUBLIC_W500}${movie.poster_path}`
                : "/images/placeholder-portrait.jpg"
            }
          />
          <div>
            {" "}
            <span className="text-xl font-semibold text-accent">
              {movie.vote_average}
            </span>{" "}
            / {movie.vote_count} voted
          </div>
          <div className=" h-fit w-full px-2">
            {" "}
            <Progress
              className="h-2 bg-slate-400 text-green-500"
              value={(Number(movie.vote_average) / 10) * 100}
            />{" "}
          </div>
          <div className="px-2 flex justify-between gap-2 w-full items-center">
            <Button className="rounded-md w-1/2 h-10 bg-blue-400 text-white">
              <ThumbsUp className="mr-2 w-5 h-5" />
              Like
            </Button>
            <Button className="rounded-md w-1/2 h-10 bg-slate-800 text-white">
              <ThumbsDown className="mr-2 w-5 h-5" />
              Dislike
            </Button>
          </div>
        </div>
        <div className=" px-2 2xl:px-10 h-full flex-grow  flex gap-4 flex-col items-start justify-start">
          <div className="w-full flex justify-between items-center">
          <Button className="bg-blue-400 text-white rounded-full dark:hover:bg-accent dark:hover:text-accent-foreground">
              <Play className="h-5 w-5 mr-2" />
              Watch now
            </Button>
            <Button className="bg-slate-300 dark:bg-slate-700 text-black hover:text-white dark:text-white rounded-full dark:hover:bg-accent dark:hover:text-accent-foreground">
              <Plus className="h-5 w-5 mr-2" />
              Add to Favourite
            </Button>
          </div>
          <div className="text-xl 2xl:text-2xl font-semibold">
            {movie.title}
          </div>
          <div className="flex gap-2 justify-start items-center">
            <Button
              className="border-2 border-slate-500 p-2 py-0 hover:border-0"
              variant={"outline"}
            >
              <Video className="mr-2 w-5 h-5" />
              Trailer
            </Button>
            <span className="text-accent font-semibold">
              IMDB: {movie.vote_average}
            </span>
          </div>
          <div className="text-sm 2xl:text-lg">{movie.overview}</div>
          <div className="text-sm 2xl:text-lg w-full flex flex-col sm:flex-row justify-between items-start">
            <div className="flex flex-col">
              <div className="flex gap-2">
                <span className="font-semibold">Released:</span>
                <span>{movie.release_date}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold">Genre:</span>
                <span>
                  {movie?.genres?.length ? movie.genres.map(
                    (g, i) =>
                      g.name + `${movie.genres.length != i + 1 ? ", " : ""}`
                  ) : "N/A"}
                </span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold">Budget:</span>
                <span>
                  {movie?.budget
                    ? formatNumberWithAbbreviations(movie.budget)
                    : "N/A"}
                </span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold">Collection:</span>
                <span>
                  {movie?.revenue
                    ? formatNumberWithAbbreviations(movie.revenue)
                    : "N/A"}
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex gap-2">
                <span className="font-semibold">Duration:</span>
                <span>{movie.release_date}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold">Country:</span>
                <span>
                  {movie?.production_countries?.length ? movie.production_countries.map(
                    (p, i) =>
                      p.name +
                      `${
                        movie.production_countries.length != i + 1 ? ", " : ""
                      }`
                  ) : "N/A"}
                </span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold">Production:</span>
                <span>
                  {movie?.production_companies?.length ? movie.production_companies.map(
                    (p, i) =>
                      p.name +
                      `${
                        movie.production_companies.length != i + 1 ? ", " : ""
                      }`
                  ) : "N/A"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
