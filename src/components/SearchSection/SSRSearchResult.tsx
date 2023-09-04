import { store } from "@/lib/redux/store";
import MoviesGrid from "../MoviesGrid";
import { Separator } from "../ui/separator";
import Pagination from "@/components/Pagination";

//Server component
const SSRSearchResult = () => {
  const results = store.getState().movies.searchResult;
  const data = results?.results || [];

  return (
    <div className="h-full  w-full px-3  sm:px-4">
      {data.length > 0 && (
        <>
        <h3 className="px-4 py-2 mb-4">
          Showing {data.length} out of {results.total_results} results!
        </h3>
        <Separator className="mb-10 bg-accent" />
        <MoviesGrid isLoading={false} movies={results as ISearchResult} />
        </>
      )}

    


      {(results?.total_pages || 1) > 1 ? (
        <Pagination
          current={results?.page || 1}
          total_pages={results?.total_pages || 1}
          total_results={results.total_results || 0}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default SSRSearchResult;
