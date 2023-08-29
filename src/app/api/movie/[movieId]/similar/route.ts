import { NextRequest, NextResponse } from "next/server";
import { getSimilarMovies } from "@/lib/requests/movie";


export async function GET(request: NextRequest,{params}:{params:{movieId:string}} ) {

    const movieId = params.movieId

    const res = await getSimilarMovies({movieId:movieId});
    console.log("***************************************trending res:",res);
    return NextResponse.json(res)
  }


