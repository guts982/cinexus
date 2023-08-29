"use client";

import {  motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";
import { useTheme } from "next-themes";


export default function ToggleTheme( props:any ) {
  const { theme, setTheme } = useTheme();

  const [isOn, setIsOn] = useState(theme === "light" ? true : false);
  const [hasMounted, setHasMounted] = useState(false);



  const spring = {
    type: "spring",
    stiffness: 140,
    damping: 20,
  };
  const toggleSwitch = () => setIsOn((old) => !old);
  useEffect(()=>{
    if (isOn) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  },[setTheme,isOn])
  useEffect(() => {setHasMounted(true)},[]);
  // this line is the key to avoid the error.
  if (!hasMounted) return null;

//   dark:border-0 dark:bg-accent
  return (
    <motion.div {...props}
    whileHover={{scale:1.1,  transition:{type:"tween",duration:".1"} }}
    whileTap={{ x:!isOn?"10%":"-10%" }}
      onClick={toggleSwitch}
      className={`
       flex  items-center
      h-[22px] w-[34px] rounded-[50px] 
      p-[2px] 
      
      hover:cursor-pointer 
      bg-background/50  border border-accent 
      bg-clip-padding backdrop-blur-sm  
      ${
        !isOn && "place-content-end"
      }`}
    >
      <motion.div
        className="flex h-[16px] w-[16px] items-center justify-center rounded-full bg-zinc-900 dark:bg-zinc-100"
        layout
        transition={{type:"easeIn"}}
      >
        <motion.div whileTap={{ rotate: 360 }} transition={{type:"easeIn",duration:.3}}>
          {isOn ? (
            <RiSunFill className=" h-[12px] w-[12px] text-zinc-100" />
          ) : (
            <RiMoonClearFill className="h-[12px] w-[12px] text-zinc-900" />
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
