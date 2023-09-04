import MovieDetails from "@/components/MovieDetails";
import SimilarMovies from "@/components/SimilarMovies";
import TvShowDetails from "@/components/TvShowDetails";
import { Separator } from "@/components/ui/separator";


const TvShowPage = ({params,searchParams}:{params:{tvShowId:string},searchParams:{[key: string]: string | string[] | undefined }}) => {

    const tvShowId = params.tvShowId;

    return (
        <div className="bg-secondary">
            <TvShowDetails tvShowId={tvShowId} />
            <Separator />
            <SimilarMovies category="tv"  id={tvShowId} />
        </div>
    );
};

export default TvShowPage;