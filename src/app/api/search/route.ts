import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { getSearchResults } from "@/lib/requests/movie";

export const revalidate = 600;

export async function GET(request: NextRequest ) {
    const searchParams = request.nextUrl.searchParams 
    const query = searchParams.get('query') || null;
    const page = searchParams.get('page') || 1;
    const res = await getSearchResults({query, page});
    return NextResponse.json(res)
  }


