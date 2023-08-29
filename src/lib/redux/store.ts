import {configureStore} from '@reduxjs/toolkit';
import globalReducer from './slices/globalSlice';
import movieReducer from './slices/movieSlice';
import { movieApi } from "./slices/movieApi";



export const store = configureStore({
    reducer: {
        global:globalReducer,
        movies:movieReducer,
        [movieApi.reducerPath]: movieApi.reducer
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat(movieApi.middleware);
    }
});




// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


