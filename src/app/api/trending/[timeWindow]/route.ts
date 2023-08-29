import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { getTrending } from "@/lib/requests/movie";

export const revalidate = 600;

const validOptions = ["day", "week"];

export async function GET(request: NextRequest,{params}:{params:{timeWindow:string}} ) {

    const timeWindow = params.timeWindow
    if(!validOptions.includes(timeWindow)){
      return NextResponse.json({},{status:404,statusText:`Invalid trending type '${timeWindow}' !`})  //json({status:"500", "message":"An error encountered!"})
    }
    const res = await getTrending({timeWindow:timeWindow});
    console.log("***************************************trending res:",res);
    return NextResponse.json(res)
  }


