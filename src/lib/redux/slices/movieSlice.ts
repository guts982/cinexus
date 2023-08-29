import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface IGlobalState {
    //Search
    searchQuery: string | null,
    searchResult: ISearchResult  ,
    searchData: ISearchData[]  ,

    //Trending
    trendingTimeWindow:"day"|"week",
    trendingData:IMovie[]
    
}


const initialState: IGlobalState = {

    searchQuery: null,
    searchResult: {},
    searchData: [],
    trendingTimeWindow:"day",
    trendingData:[]
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
    }
});


export const { 
    setSearchQuery,
    setSearchResult,
    setSearchData,
    appendSearchData,
    setTrendingTimeWindow,
    appendTrendingData
} = movieSlice.actions
export default movieSlice.reducer







