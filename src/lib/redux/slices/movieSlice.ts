import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface IGlobalState {
    //Search
    searchQuery: string | null,
    searchResult: ISearchResult  ,
    searchData: ISearchData[]  ,

    //Trending
    trendingCategory:"all"|"movie"|"tv",
    trendingTimeWindow:"day"|"week",
    trendingData:IMovie[],

    //Lists
    movieList:IMovieList,
    tvSeriesList:ITvSeriesList
    
}


const initialState: IGlobalState = {

    searchQuery: null,
    searchResult: {},
    searchData: [],
    trendingCategory:"all",
    trendingTimeWindow:"day",
    trendingData:[],
    movieList:"popular",
    tvSeriesList:"popular",
}


export const movieSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
      
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload
        },
        setSearchResult: (state, action: PayloadAction<ISearchResult>) => {
            state.searchResult = action.payload
        },
        setSearchData: (state, action: PayloadAction<ISearchData[] >) => {
            state.searchData = action.payload
        },
        appendSearchData: (state, action: PayloadAction<ISearchData[] >) => {
            if(action.payload && action.payload?.length>0){
                state.searchData?.push(...action.payload);
            }
        },
        setTrendingCategory: (state, action: PayloadAction<"all"|"movie"|"tv">) => {
            if(action.payload != state.trendingCategory){
                state.trendingData = []
                state.trendingCategory = action.payload;
            }
        },
        setTrendingTimeWindow: (state, action: PayloadAction<"day"|"week">) => {
            if(action.payload != state.trendingTimeWindow){
                state.trendingData = []
                state.trendingTimeWindow = action.payload;
            }
        },
        appendTrendingData: (state, action: PayloadAction<IMovie[] >) => {
            if(action.payload && action.payload?.length>0){
                state.trendingData?.push(...action.payload);
            }
        },
        setMovieList:(state, action:PayloadAction<IMovieList>) => {
            if(action.payload != state.movieList){
                state.movieList = action.payload
            }
        },
        setTvSeriesList:(state, action:PayloadAction<ITvSeriesList>) => {
            if(action.payload != state.tvSeriesList){
                state.tvSeriesList = action.payload
            }
        }
    }
});


export const { 
    setSearchQuery,
    setSearchResult,
    setSearchData,
    appendSearchData,
    setTrendingTimeWindow,
    setTrendingCategory,
    appendTrendingData,
    setMovieList,
    setTvSeriesList,
} = movieSlice.actions
export default movieSlice.reducer







