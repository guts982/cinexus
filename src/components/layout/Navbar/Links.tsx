"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { MoveLeft } from 'lucide-react';
import ToggleMenu from "./ToggleMenu";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { setMobNavOpen as setMNavOpen } from "@/lib/redux/slices/globalSlice";
import {  useEffect, useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

import { ModeToggle } from "@/components/ui/ModeToggle";

const MotionLink = motion(Link);

const links = [
  {
    name: "Home",
    path: "/",
    auth: "neutral", //required, not-required, neutral
  },
  {
    name: "Movies",
    path: "/movies",
    auth: "neutral",
  },
  {
    name: "TV Shows",
    path: "/tv-shows",
    auth: "neutral",
  },
  {
    name: "Search",
    path: "/search",
    auth: "neutral",
  },
  {
    name: "About",
    path: "/about",
    auth: "neutral",
  },

];

const Links = () => {
  const linkRef = useRef<HTMLInputElement | null>(null);
  const mNavOpen = useSelector((state: RootState) => state.global.mobNavOpen);
  const [mobNavOpen, setMobNavOpen] = useState(mNavOpen);
  const dispatch = useDispatch();
  const [pageY, setPageY] = useState(0);

  //controls navbar visiblity on scroll
  const updatePageYHandler = useDebouncedCallback(() => {
    
    if ( pageY > 20) {
      if (linkRef.current && linkRef.current.parentElement?.parentElement) {
        // linkRef.current.parentElement?.parentElement.classList.remove('slide-up-anim');
        linkRef.current.parentElement?.parentElement.classList.add(
          "bg-white","dark:bg-slate-700", "shadow-md",
        );
      }
    }else{
      if (linkRef.current && linkRef.current.parentElement?.parentElement) {
        // linkRef.current.parentElement?.parentElement.classList.remove('slide-up-anim');
        linkRef.current.parentElement?.parentElement.classList.remove(
          "bg-white","dark:bg-slate-700", "shadow-md",
        );
      }
    }


    if (window.scrollY - pageY < 0 && window.scrollY >= 1) {
      if (linkRef.current && linkRef.current.parentElement?.parentElement) {
        // linkRef.current.parentElement?.parentElement.classList.remove('slide-up-anim');
        linkRef.current.parentElement?.parentElement.classList.add(
          "fixed",
          "top-0",
          "slide-down-anim"
        );
      }
    } else {
      if (linkRef.current && linkRef.current.parentElement?.parentElement) {
        linkRef.current.parentElement?.parentElement.classList.remove(
          "fixed",
          "top-0",
          "slide-down-anim"
        );
        // linkRef.current.parentElement?.parentElement.classList.add('slide-up-anim');
      }
    }
    setPageY(window.scrollY);
  });

  useEffect(() => {
    dispatch(setMNavOpen(mobNavOpen));
  }, [dispatch, mobNavOpen]);

  useEffect(() => {
    window.addEventListener("scroll", updatePageYHandler);
    return () => window.removeEventListener("scroll", updatePageYHandler);
  }, [updatePageYHandler]);

  return (
    <>
      <div
        ref={linkRef}
        className={` sm:flex-grow text-md  text-secondary-foreground 
       flex justify-center items-center gap-2 `}
      >
        <WebLinks />

        <ModeToggle />

        <ToggleMenu
          isOpen={mobNavOpen}
          toggle={() => setMobNavOpen((o) => !o)}
        />
      </div>
      <AnimatePresence mode="wait">
        {mobNavOpen && <MobileLinks closeFn={() => setMobNavOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

const WebLinks = () => {
  const pathname = usePathname();
  return (
    <div className="hidden w-full sm:flex items-center justify-center flex-wrap gap-2 xl:gap-4 ">
      {links.map((link) => {
        return (
          <AuthPass auth={link.auth} key={link.name}>
            <MotionLink
              key={link.name}
              className={`relative ${
                pathname == link.path ? "font-semibold" : "font-normal"
              } `}
              href={link.path}
            >
              {pathname == link.path && (
                <motion.div
                  layoutId="active-nav-web)"
                  className={`absolute   w-full h-full border-b-2 border-accent dark:border-accent-foreground 
                          `}
                />
              )}
              <motion.div
                className={`relative  `}
                whileHover={{ y: -1, opacity: 0.7 }}
                whileTap={{ y: 1 }}
              >
                {link.name}
              </motion.div>
            </MotionLink>
          </AuthPass>
        );
      })}
    </div>
  );
};

const MobileLinks = ({closeFn}:{closeFn:()=>void}) => {
  const pathname = usePathname();

  return (
    <motion.div
      key="mobile-nav"
      initial={{ x: "-100%" }}
      animate={{ x: "0" }}
      exit={{ x: "-100%" }}
      transition={{ type: "tween" }}
      className=" sm:hidden fixed h-full min-h-screen shadow-light  dark:border-r border-accent-foreground
         top-0 left-0 bg-accent w-[75%]  z-[99]
        font-light p-4"
      style={{
        backdropFilter: "blur(5px)",
      }}
    >
      <motion.div className="border border-yellow-500 relative w-full h-full flex flex-col items-center justify-center ">
        <MotionLink
          whileHover={{ scale: 1.1 }}
          whileTap={{ y: 5, transition: { duration: 0.2, type: "ease" } }}
          className="text-accent-foreground font-bold mb-10 "
          href="/"
        >
          {process.env.NEXT_PUBLIC_APP_NAME?.toUpperCase()}
        </MotionLink>

        {links.map((link) => {
          return (
            <AuthPass auth={link.auth} key={link.name}>
              <MotionLink
                className={`relative ${
                  pathname == link.path ? "font-normal" : "font-light"
                } `}
                href={link.path}
              >
                {pathname == link.path && (
                  <motion.div
                    layoutId="active-nav-web"
                    className={`absolute left-[-35%] top-[-40%] w-1/2 h-full border-b-2 border-accent-foreground 
                          `}
                  />
                )}
                <motion.div
                  className={`relative text-accent-foreground `}
                  whileHover={{ x: 2, opacity: 0.7 }}
                  whileTap={{ y: 1 }}
                >
                  {link.name}
                </motion.div>
              </MotionLink>
            </AuthPass>
          );
        })}

        <motion.button
          className="mt-10"
          onClick={closeFn}
          initial={{}}
          animate={{}}
          exit={{}}
          whileHover={{ scaleX: 2.4, scaleY: 1.2, x: "-60%" }}
          whileTap={{ y: 5, opacity: 0.4 }}
        >
          <MoveLeft className="text-accent-foreground font-bold text-2xl w-full" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

const AuthPass = ({
  auth,
  children,
}: {
  auth: string;
  children: React.ReactNode;
}) => {
  if (auth === "required") {
    return null; // <SignedIn>{children}</SignedIn>;
  } else if (auth === "not-required") {
    return null; // <SignedOut>{children}</SignedOut>;
  } else {
    //neutral
    return <>{children}</>;
  }
};

export default Links;
