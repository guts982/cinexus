import { NextRequest } from "next/server";
import axios from "axios";

export const getSearchResults = async ({ query = null, page = 1 }: { query?: string | null, page?: number | string }) => {

    const url = `${process.env.TMDB_API_URL}search/multi?${query ? 'query=' + query + '&' : ''}page=${page}&include_adult=false&language=en-US`;
    console.log("HITTING: ",url);
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
        },
        //   next:{revalidate:600},
        // cache:"no-store"
    };

    try {
        const results = await axios.get(url, options);
        // return results.data.results;    //direct data
        return results.data;    //paginated data
    } catch (err) {
        console.log("Error while fetching search results");
        return [];
    }
}

//timeWindow : day or week
export const getTrending = async ({ category,timeWindow,page="1" }: { category:"all"|"movie"|"tv", timeWindow: "day"|"week", page?:string }) => {
    const url = `${process.env.TMDB_API_URL}trending/${category}/${timeWindow}?page=${page}&language=en-US`;
    console.log("HITTING: ",url);
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
        },
        next: { revalidate: 600 },
    };

    try {
        const results = await axios.get(url, options);
        return results.data;    //paginated data
    } catch (err) {
        console.log("Error while fetching trending results");
        return [];
    }
}

export const getDiscover = async ({category,list,page="1"}:{category:"movies"|"tv_shows",list:IMovieList | ITvSeriesList,page?:string}) => {

    const cat = category=="movies"?"movie":"tv";
    const url = `${process.env.TMDB_API_URL}/${cat}/${list}?page=${page}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
    console.log("HITTING: ",url);
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
        },
        next: { revalidate: 600 },
    };

    try {
        const results = await axios.get(url, options);
        return results.data;    //paginated data
    } catch (err) {
        console.log(`Error while discover ${category} results`);
        return [];
    }
}



//movieId: 614479 (string)
export const getMovieDetails = async ({ movieId,type="movie" }: { movieId: string,type:"movie"|"tv_show" }) => {
    const cat = type=="movie"?"movie":"tv";
    const url = `${process.env.TMDB_API_URL}${cat}/${movieId}?language=en-US`;
    console.log("HITTING: ",url);
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
        },
        next: { revalidate: 600 },
    };

    try {
        const results = await axios.get(url, options);
        return results.data;    //paginated data
    } catch (err) {
        console.log("Error while fetching movie/tv show details",err);
        return [];
    }
}


//movieId: 614479 (string)
export const getSimilarMovies = async ({movieId,type="movie" }:{movieId:string,type:"movie"|"tv_show" }) => {
    const cat = type=="movie"?"movie":"tv";
    const url = `${process.env.TMDB_API_URL}${cat}/${movieId}/similar?language=en-US`;
    console.log("HITTING: ",url);
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
        },
        next: { revalidate: 600 },
    };

    try {
        const results = await axios.get(url, options);
        return results.data;    //paginated data
    } catch (err) {
        console.log("Error while fetching similar movies/tv shows");
        return [];
    }
}








