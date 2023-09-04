import { Skeleton as SSkeleton } from "@/components/ui/skeleton";
import { Fragment } from "react";

const Skeleton = () => {

    const arr = [1,2,3]
    return (
        <div
        className=" col-gap-4 grid 
        gap-3  
      grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7"
        >
            {
                Array(20).fill(0).map((ar,i)=>(
                    <Fragment key={i} >
                        <CardSkeleton  />
                    </Fragment>
                ))
            }
        </div>
    );
};

export default Skeleton;


const CardSkeleton = () => {

    return (
        <div className="bg-white  w-[210px] h-[360px] dark:bg-accent rounded-lg shadow-lg flex flex-col">
            <SSkeleton className="w-full h-[300px] rounded-t rounded-b-none" />
            <SSkeleton className="mt-2 h-4 w-11/12 mx-auto" />
            <SSkeleton className="mt-1 h-4 w-11/12 mx-auto" />
        </div>
    )
}

