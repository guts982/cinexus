import { NextRequest, NextResponse } from "next/server";
import { store } from "@/lib/redux/store";
import {
  setSearchData,
  setSearchResult,
} from "@/lib/redux/slices/movieSlice";
import { getSearchResults } from "@/lib/requests/movie";
import SSRSearchResult from "@/components/SearchSection/SSRSearchResult";
import SearchBox from "@/components/SearchSection/SearchBox";

const SearchPage = async (req: NextRequest) => {
  //@ts-ignore
  const query = req?.searchParams?.query || null;
  //@ts-ignore
  const page = req?.searchParams?.page || 1;
  const results: ISearchResult = await getSearchResults({ query, page });

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
