"use client"

import Image from "next/image";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { movieApi } from "@/lib/redux/slices/movieApi";
import { RootState, AppDispatch } from "@/lib/redux/store";
import {  motion } from "framer-motion";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import MoviesGrid from "@/components/MoviesGrid";

const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


const SimilarMovies = ({category,id}:{category:"movie"|"tv",id:string}) => {

  
    const dispatch: AppDispatch = useAppDispatch();
  
    const {
      data: similarResult,
      isLoading,
      isError,
    } = useAppSelector((state: RootState) =>
      movieApi.endpoints.similar.select({category:category ,id:id})(state)
    );
  

  
    useEffect(() => {
      dispatch(movieApi.endpoints.similar.initiate({category:category ,id:id}));
    }, [dispatch,category,  id]);
  

    return (
        <div className='w-[90vw] p-10 mx-auto'>
            <h2 className='text-2xl mb-8 '>You may also like</h2>

            <div className="w-full ">
            <MoviesGrid 
            isLoading={isLoading}
            movies={similarResult as IMovieResult}
            />
            </div>
            

        </div>
    );
};

export default SimilarMovies;