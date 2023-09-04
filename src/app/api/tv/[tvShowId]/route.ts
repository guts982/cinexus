import { NextRequest, NextResponse } from "next/server";
import { getMovieDetails } from "@/lib/requests/movie";

// export const revalidate = 600;


export async function GET(request: NextRequest,{params}:{params:{tvShowId:string}} ) {

    const movieId = params.tvShowId
    // console.log("Movie Detail API: mid:",movieId);

    const res = await getMovieDetails({movieId:movieId,type:"tv_show"});
    return NextResponse.json(res)
  }


