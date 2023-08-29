
import { Skeleton as SSkeleton } from "@/components/ui/skeleton";


const Skeleton = () => {
    return (
        <div className="h-full w-full ">
          <div
            className="relative  w-full "
            style={
              {
                // backgroundImage: `url("${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${process.env.NEXT_PUBLIC_ORIGINAL}${movie.backdrop_path}")`,
                // backgroundSize: "cover",
                // backgroundRepeat: "no-repeat",
                // backgroundPosition: "center",
              }
            }
          >
            <SSkeleton className="relative  h-[80vh] w-[100vw] ">
              <SSkeleton
                className=" rounded-t-md h-full w-full"
             
              />
            </SSkeleton>
            <div className="h-[80vh] w-[100vw] absolute top-0 bg-black/30">
              <SSkeleton className="w-full text-white font-semibold bg-black/30 p-2">
                Home / Movie / ...
              </SSkeleton>
              <div className="w-full   h-full  flex justify-center items-center cursor-pointer">
                <SSkeleton className="    font-light text-md text-white rounded-full p-4 h-24 w-24 "
                />
              </div>
            </div>
          </div>
    
          <div className="mx-auto p-10  shadow-md relative -top-10 rounded-3xl w-[90vw]  bg-primary-foreground  flex justify-center gap-5 sm:gap-0 sm:justify-start items-start flex-col sm:flex-row  ">
            <div className="w-full sm:w-fit flex flex-col justify-center items-center gap-2">
              <SSkeleton className=" rounded-md w-[200px] h-[300px]"

              />
              <div>
                <SSkeleton className="text-xl font-semibold text-accent" />
                
              </div>
              <div className=" h-fit w-full px-2">
                
                <SSkeleton className="h-2"
                />
              </div>
              <div className="px-2 flex justify-between gap-2 w-full items-center">
                <SSkeleton className="rounded-md w-1/2 h-5  " />
                  
                <SSkeleton className="rounded-md w-1/2 h-5 " />
                
              </div>
            </div>
            <div className=" px-2 2xl:px-10 h-full flex-grow  flex gap-4 flex-col items-start justify-start">
                <div className="w-full flex justify-between items-center">
                  <SSkeleton className="h-12 w-24 rounded-full" />
                  <SSkeleton className="h-12 w-24   rounded-full" />
                </div>
                <SSkeleton className="h-12 w-36  rounded-xl font-semibold" />
                <div className="flex gap-2 justify-start items-center">
                  <SSkeleton className=" rounded-lg h-12 w-36" />
                <SSkeleton className="rounded-xl h-4 w-24" />
                </div>
                <SSkeleton className="h-20 w-full " />
                <div className="text-sm 2xl:text-lg w-full flex flex-col sm:flex-row justify-between items-start">
                  <div className="flex flex-col gap-2">
                    <SSkeleton className="flex gap-2 w-96 h-4 rounded-xl" />
                    <SSkeleton className="flex gap-2 w-96 h-4 rounded-xl" />
                    <SSkeleton className="flex gap-2 w-96 h-4 rounded-xl" />
                    <SSkeleton className="flex gap-2 w-96 h-4 rounded-xl" />
                  </div>
    
                  <div className="flex flex-col gap-2">
                    <SSkeleton className="flex gap-2 w-96 h-4 rounded-xl" />
                    <SSkeleton className="flex gap-2 w-96 h-4 rounded-xl" />
                    <SSkeleton className="flex gap-2 w-96 h-4 rounded-xl" />
                    <SSkeleton className="flex gap-2 w-96 h-4 rounded-xl" />
                  </div>
    
                </div>
            </div>
          </div>
        </div>
      );
};

export default Skeleton;

