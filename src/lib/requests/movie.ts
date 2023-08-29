import { NextRequest } from "next/server";
import axios from "axios";

export const getSearchResults = async ({ query = null, page = 1 }: { query?: string | null, page?: number | string }) => {

    const url = `${process.env.TMDB_API_URL}search/multi?${query ? 'query=' + query + '&' : ''}page=${page}&include_adult=false&language=en-US`;

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
export const getTrending = async ({ timeWindow }: { timeWindow: string }) => {
    const url = `${process.env.TMDB_API_URL}trending/all/${timeWindow}?language=en-US`;

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

//movieId: 614479 (string)
export const getMovieDetails = async ({ movieId }: { movieId: string }) => {
    const url = `${process.env.TMDB_API_URL}movie/${movieId}?language=en-US`;
    // console.log("FETCHING MOVIE DETAILS: ",movieId,url);
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
        console.log("Error while fetching movie details");
        return [];
    }
}


//movieId: 614479 (string)
export const getSimilarMovies = async ({movieId}:{movieId:string}) => {
    const url = `${process.env.TMDB_API_URL}movie/${movieId}/similar?language=en-US`;

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
        console.log("Error while fetching similar movies");
        return [];
    }
}






