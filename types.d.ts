interface RootLayoutProps {
  children: React.ReactNode;
}


interface ITvShow {
  id:number,
  adult:boolean,
  episode_run_time:number[],
  in_production:boolean,
  last_air_date:string,
  next_epiisode_to_air:ITvShow|null,
  number_of_episodes:number,
  number_of_seasons:24,
  name:string,
  origin_country:string[],
  original_language:string,
  original_name:string,
  overview:string,
  popularity:number,
  poster_path:string,
  vote_average:number,
  vote_count:number,
  backdrop_path:string,
  first_air_date:string,
  genre_ids:number[],
  genres: [{id:number,name:string}],
  production_companies:[
    {
      id:number,logo_path:string,name:string,origin_country:string
    }
  ],
  production_countries:[
    {
      iso_3166_1:string,name:string
    }
  ],
  seasons:[
    {
      air_date:string | null,
      episode_count: number,
      id: number,
      name: string,
      overview: string,
      poster_path: string | null,
      season_number: number,
      vote_average: number
    }
  ],
  spoken_languages:[
    {
      english_name:string,
      iso_639_1:string,
      name:string
    }
  ],
  status:string,
  tagline:string,
  type:string,
}

interface IMovie {
  adult?: boolean;
  backdrop_path?: string;
  id?: number;
  title?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  poster_path?: string;
  media_type?: string;
  genre_ids?: number[];
  popularity?: string | number;
  release_date?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  budget?: number;
  revenue?: number;
  genres: [{id:number,name:string}],
  production_companies:[
    {
      id:number,logo_path:string,name:string,origin_country:string
    }
  ],
  production_countries:[
    {
      iso_3166_1:string,name:string
    }
  ],
}
interface IPaginatedMovieResult {
  page?: number;
  results?: IMovie[];
  total_pages?: number;
  total_results?: number;
} 

interface IPaginatedTvShowResult {
  page?: number;
  results?: ITvShow[];
  total_pages?: number;
  total_results?: number;
} 

interface IMovieData extends IMovie {}
interface IMovieResult extends IPaginatedMovieResult {
  results?: IMovieData[];
} 

interface ISearchData extends IMovie {}
interface ISearchResult extends IPaginatedMovieResult {
  results?: ISearchData[];
} 

interface ITrendingData extends IMovie {}
interface ITrendingResult extends IPaginatedMovieResult {
  results?: ITrendingData[];
} 


interface ISimilarData extends IMovie {}
interface ISimilarResult extends IPaginatedMovieResult {
  results?: ISimilarData[];
} 


interface IMoviesData extends IMovie {}
interface IMoviesResult extends IPaginatedMovieResult {
  results?: IMoviesData[];
} 


interface ITvShowsData extends ITvShow {}
interface ITvShowsResult extends IPaginatedTvShowResult {
  results?: ITvShowsData[];
} 




type IMovieList = "now_playing" | "popular" | "top_rated" | "upcoming";
type ITvSeriesList = "airing_today" | "popular" | "on_the_air" | "top_rated";

