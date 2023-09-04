import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { getDiscover } from "@/lib/requests/movie";

export const revalidate = 600;


export async function GET(request: NextRequest,{params}:{params:{category:"movies"|"tv_shows",list:IMovieList | ITvSeriesList }} ) {

    const category = params.category
    const list = params.list
    const {searchParams} = new URL(request.url) ;
    const page =  searchParams.get("page") || "1"
    const res = await getDiscover({category,list,page:page});
    return NextResponse.json(res)
  }


