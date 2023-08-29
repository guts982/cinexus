"use client"
import { motion, easeIn } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Play } from "lucide-react";
import Skeleton from "./Skeleton";


type Props = {
    isLoading:boolean,
    movies:IMovieResult
}

const MoviesGrid = ({isLoading,movies,}:Props) => {
    const router = useRouter()

    const handleClick = (movieId: number | undefined) => {
        if (movieId) {
          router.push(`/movie/${movieId}`)
        }
      };
    
     if(isLoading) return <Skeleton />

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
            : movies?.results?.map((res) => (
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
      );
};

export default MoviesGrid;