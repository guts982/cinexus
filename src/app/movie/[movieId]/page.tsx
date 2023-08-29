import MovieDetails from "@/components/MovieDetails";
import SimilarMovies from "@/components/SimilarMovies";
import { Separator } from "@/components/ui/separator";


const MoviePage = ({params,searchParams}:{params:{movieId:string},searchParams:{[key: string]: string | string[] | undefined }}) => {

    const movieId = params.movieId;

    return (
        <div className="bg-secondary">
            <MovieDetails movieId={movieId} />
            <Separator />
            <SimilarMovies  movieId={movieId} />
        </div>
    );
};

export default MoviePage;