"use client";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormEvent, useState } from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "@/lib/redux/store";
import { useRouter } from "next/navigation";
import { MoveRight } from 'lucide-react';

const HeroBanner = () => {

    const router = useRouter();
    const [query, setQuery] = useState("");
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
      router.push(`/search?query=${query}`)
    }
    


    



  return (
    <div className={` heroWrapper  flex justify-center items-center  `}>
      <div className={` imageWrapper `}>
        <Image
          priority
          src={"/images/cinema1.jpg"}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="hero image example"
        />
      </div>

      <div
        className={`w-full md:w-9/12 xl:w-1/2 heroContent text-white flex rounded-xl border-yellow-600 border  p-5 pb-10 bg-slate-800/60`}
      >
        <h1 className=" text-3xl font-bold border-b-2 border-yellow-300 px-10 py-4">
          {process.env.NEXT_PUBLIC_APP_NAME?.toUpperCase()}
        </h1>
        <p className="mt-2 text-xl ">
          Explore all your favourite movies and tv shows!
        </p>
        <form onSubmit={handleSubmit} className="w-full mt-4 flex  max-w-3xl items-center space-x-2">
          <Input type="text" placeholder="Search movies, tv shows, anime ..." 
           value={query}
           onChange={e=>setQuery(e.target.value)}
          className="bg-transparent focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 font-bold text-lg text-white border-yellow-200 placeholder:text-white placeholder:font-light" />
          <Button  type="submit" className="bg-accent text-accent-foreground hover:bg-black">Search <MoveRight className="ml-2 pt-1" /></Button>
        </form>
       
        <p className="w-full text-sm font-light  max-w-3xl mt-3 text-yellow-100 text-center ">
          Looking for a movies to watch? or a serie to watch?{" "}
          {process.env.NEXT_PUBLIC_APP_NAME} has what you need. Here at{" "}
          {process.env.NEXT_PUBLIC_APP_NAME} you can watch free movies online
          and stream your favorite tv series with just one click, all is free,
          with no account required. Try {process.env.NEXT_PUBLIC_APP_NAME} now!
        </p>

      </div>
    </div>
  );
};

export default HeroBanner;
