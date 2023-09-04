import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { getTrending } from "@/lib/requests/movie";

export const revalidate = 600;

const validOptions = ["day", "week"];

export async function GET(request: NextRequest,{params}:{params:{category:"all"|"movie"|"tv",timeWindow:"day"|"week"}} ) {

    const category = params.category
    const timeWindow = params.timeWindow
    const {searchParams} = new URL(request.url) ;
    const page =  searchParams.get("page") || "1"
    if(!validOptions.includes(timeWindow)){
      return NextResponse.json({},{status:404,statusText:`Invalid trending type '${timeWindow}' !`})  //json({status:"500", "message":"An error encountered!"})
    }

    const res = await getTrending({category:category,timeWindow:timeWindow,page:page});

    // console.log("RES::",res);

    return NextResponse.json(res)
  }


