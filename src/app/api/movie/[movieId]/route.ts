import { NextRequest, NextResponse } from "next/server";
import { getMovieDetails } from "@/lib/requests/movie";

// export const revalidate = 600;


export async function GET(request: NextRequest,{params}:{params:{movieId:string}} ) {

    const movieId = params.movieId
    // console.log("Movie Detail API: mid:",movieId);

    const res = await getMovieDetails({movieId:movieId,type:"movie"});
    return NextResponse.json(res)
  }


