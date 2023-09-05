import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";

const API_URL = `${process.env.NEXT_PUBLIC_APP_URL}/api/`

export const movieApi = createApi({
    reducerPath:"movieApi",
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    tagTypes: ["search","trending","movie", "similar", "tv_show", "discover"],
    endpoints: (builder) => ({
        search: builder.query<ISearchResult, string>({
            query: (q) => `search?query=${q}`,
            providesTags: (result, error, search) => [{type:"search", search}],
        }),
        trending: builder.query<ITrendingResult, {category:"all"|"movie"|"tv", timeWindow:"day"|"week", page?:number}>({
            query: (param) => `trending/${param.category}/${param.timeWindow}?page=${param.page || 1}`,
            providesTags: (result, error, param) =>  [{type:"trending", category:param.category, timeWindow:param.timeWindow}],
        }),
        movie: builder.query<IMovie,string>({
            query:(movieId)=>`movie/${movieId}`,
            providesTags:(result, error, movieId) =>  [{type:"movie", movieId}],
        }),
        tv_show: builder.query<ITvShow,string>({
            query:(tvShowId)=>`tv/${tvShowId}`,
            providesTags:(result, error, tvShowId) =>  [{type:"tv_show", tvShowId}],
        }),
        similar: builder.query<ISimilarData,{category:"movie"|"tv",id:string}>({
            query:(param)=>`${param.category}/${param.id}/similar`,
            providesTags:(result, error, param) =>  [{type:"similar", category:param.category, id:param.id}],
        }),
        discover: builder.query<IMoviesResult | ITvShowsResult, {category:"movies" | "tv_shows", list:IMovieList | ITvSeriesList, page?:number} >({
            query:(param)=>`/discover/${param.category}/${param.list}?page=${param.page || 1}`,
            providesTags:(result, error,param) =>  [{type:"discover",category:param.category,list:param.list}],
        }),

    })

})



