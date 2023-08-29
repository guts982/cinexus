interface RootLayoutProps {
  children: React.ReactNode;
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
