import { NextRequest, NextResponse } from "next/server";
import { getSimilarMovies } from "@/lib/requests/movie";


export async function GET(request: NextRequest,{params}:{params:{tvShowId:string}} ) {

    const movieId = params.tvShowId

    const res = await getSimilarMovies({movieId:movieId,type:"tv_show"});
    return NextResponse.json(res)
  }


