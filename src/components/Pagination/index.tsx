"use client";
import { motion } from "framer-motion";
import {
  ChevronFirst,
  ChevronLeft,
  ChevronRight,
  ChevronLast,
} from "lucide-react";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

interface IPagination {
  current: number;
  total_pages: number;
  total_results: number;
  page?: number | null;
  setPage?:(p:number)=>void | null;
}

const Pagination = ({ current, total_pages, total_results, page, setPage }: IPagination) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  let pages = [];
  for (let i = 1; i <= total_pages; i++) {
    pages.push(i);
  }

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleBtnClick = (p: number) => {
    if(page && setPage){
        console.log("setti9ng Page",p);
        setPage(p)
    }else{
        router.push(pathname + "?" + createQueryString("page", p.toString()));
    }
  };

  return (
    <div className="mx-auto my-4 mt-8 flex w-full flex-wrap items-center justify-center gap-2">
      <PaginationBtn
        title="first"
        disabled={current == 1 || total_pages <= 1}
        classes="  "
        clickFn={() => handleBtnClick(1)}
      >
        <ChevronFirst />
      </PaginationBtn>
      <PaginationBtn
        title="previous"
        disabled={current == 1 || total_pages <= 1}
        classes="  "
        clickFn={() => handleBtnClick(current - 1)}
      >
        <ChevronLeft className="" />
      </PaginationBtn>

      {pages.map((p) => (
        <PaginationBtn
          key={p}
          active={p == current}
          classes={` py-0 `}
          clickFn={() => handleBtnClick(p)}
        >
          {p}
        </PaginationBtn>
      ))}

      <PaginationBtn
        title="next"
        disabled={total_pages == 1 || current >= total_pages}
        classes="  "
        clickFn={() => handleBtnClick(current + 1)}
      >
        <ChevronRight />
      </PaginationBtn>
      <PaginationBtn
        title="last"
        disabled={total_pages == 1 || current >= total_pages}
        classes="  "
        clickFn={() => handleBtnClick(total_pages)}
      >
        <ChevronLast />
      </PaginationBtn>
    </div>
  );
};

export default Pagination;

const PaginationBtn = ({
  title,
  children,
  classes,
  clickFn,
  active = false,
  disabled = false,
}: {
  title?: string;
  children: React.ReactNode;
  classes?: string;
  clickFn: () => void;
  active?: boolean;
  disabled?: boolean;
}) => {

  return (
    <motion.button
      type="button"
      onClick={clickFn}
      disabled={disabled || active}
      title={title || ""}
      className={` 
      px-2 py-1  rounded-sm ${active && "border-2 border-accent"} ${!disabled && "hover:bg-accent hover:text-accent-foreground"}
      `}
      initial={false}
      animate={{}}
      whileHover={{ scale:1, opacity:.9 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.button>
  );
};
