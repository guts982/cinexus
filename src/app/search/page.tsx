import { NextRequest, NextResponse } from "next/server";
import { store } from "@/lib/redux/store";
import {
  setSearchData,
  setSearchResult,
} from "@/lib/redux/slices/movieSlice";
import { getSearchResults } from "@/lib/requests/movie";
import SSRSearchResult from "@/components/SearchSection/SSRSearchResult";
import SearchBox from "@/components/SearchSection/SearchBox";

type SearchPageSearchParams = {
  page?: string;
  query?: string;
}

type Props = {
  params: {},
  // searchParams: {[key: string]: string | string[] | undefined}
  searchParams:SearchPageSearchParams
}

const SearchPage = async (props:Props) => {
  
  // const query =   req?.searchParams?.query || null;
  // const page = req?.searchParams?.page || 1;

  const searchParams = props.searchParams;
  const page = searchParams.page;
  const query = searchParams.query;


  const results: ISearchResult = await getSearchResults({ query , page  });

  store.dispatch(setSearchResult(results));

  return (
    <div className="py-10 p-2 w-full font-bebas tracking-wide">
      <SearchBox />
      <h2 className="text-center my-2">
        Search Results {query && `for '${query}'`}{" "}
      </h2>
      <SSRSearchResult />
    </div>
  );
};

export default SearchPage;
