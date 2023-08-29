
import Links from "./Links";
import Link from "next/link";
import "./style.scss";

const Navbar = () => {
 
  return (
    <nav
      className="  z-10 w-full py-2 flex justify-center items-center shadow-light dark:shadow-none
          dark:border-b border-muted "
    >
      <div className=" max-w-screen-xl px-2 lg:px-4  2xl:px-0 w-full flex justify-between items-center ">
        <Link href="/" className="transition-all hover:opacity-80 hover:scale-105  font-bold">{process.env.NEXT_PUBLIC_APP_NAME}</Link>

        <Links />
      </div>
    </nav>
  );
};

export default Navbar;
