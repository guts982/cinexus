"use client"
import { motion, easeIn } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Play } from "lucide-react";
import Skeleton from "./Skeleton";


type Props = {
    isLoading:boolean,
    movies:IMovieResult | ITvShowsResult | ISearchResult
}

const MoviesGrid = ({isLoading,movies,}:Props) => {
    const router = useRouter()


    const handleClick = (movieId: number | undefined, title:string|undefined) => {
      if(movieId){
        if (title) {
          router.push(`/movie/${movieId}`)
        }else{
          router.push(`/tv-show/${movieId}`)
        }
      }
       
      };
    
     if(isLoading) return <Skeleton />


     const containerVariant = {
          hidden: {
              // x: "-100vw", //move out of the site
          },
          visible: {
              // x: 0, // bring it back to nrmal
              transition: {
                  delay: 0,
                  when: "beforeChildren", //use this instead of delay
                  staggerChildren: 0.1, //apply stagger on the parent tag
              },
          },
      };

      const listVariant = {
          hidden: {
              x: -10, //move out of the site
              // y:-10,
              opacity: 0,
          },
          visible: {
              x: 0, // bring it back to nrmal
              // y:0,
              opacity: 1,
          },
      };

    return (
        <motion.div
          layoutId="trending-data"
          variants={containerVariant}
                animate="visible"
                initial="hidden"
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
                  variants={listVariant}
                  layoutId={`movie-${res.id}`}
                  className=" mx-auto flex w-fit flex-col items-center max-w-[240px]
                justify-start rounded-md   shadow-md  dark:bg-accent sm:mb-2 lg:mb-5 
             "
                >
                  <div
                    className=" relative rounded rounded-t-md border-b-2  border-accent 
       cursor-pointer group
       "
      //  @ts-ignore
                    onClick={() => handleClick(res.id,res?.title)}
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
                      //  @ts-ignore 
                      alt={res?.title || res?.name || "Search Result Image"}
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
                        items-start justify-start p-2   text-md 
                        "
                  >
                    <motion.div
                      className=" title text-left w-full  cursor-pointer opacity-80"
    
                      whileHover={{
                        y: -.5,
                        opacity: 1,
                        transition: { type: easeIn, duration: 0.4 },
                      }}
                      // @ts-ignore
                      onClick={() => handleClick(res.id,res?.title)}
                    >
                      {/* @ts-ignore */}
                      {res?.title || res?.name  || "No Title!"}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
        </motion.div>
      );
};

export default MoviesGrid;