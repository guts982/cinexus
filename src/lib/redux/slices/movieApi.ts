import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";

export const movieApi = createApi({
    reducerPath:"movieApi",
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api/'}),
    tagTypes: ["search","trending","movie", "similar"],
    endpoints: (builder) => ({
        search: builder.query<ISearchResult, string>({
            query: (q) => `search?query=${q}`,
            providesTags: (result, error, search) => [{type:"search", search}],
        }),
        trending: builder.query<ITrendingResult, "day"|"week">({
            query: (timeWindow) => `trending/${timeWindow}`,
            providesTags: (result, error, trending) =>  [{type:"trending", trending}],
        }),
        movie: builder.query<IMovie,string>({
            query:(movieId)=>`movie/${movieId}`,
            providesTags:(result, error, movieId) =>  [{type:"movie", movieId}],
        }),
        similar: builder.query<ISimilarData,string>({
            query:(movieId)=>`movie/${movieId}/similar`,
            providesTags:(result, error, movieId) =>  [{type:"similar", movieId}],
        })
    })

})



