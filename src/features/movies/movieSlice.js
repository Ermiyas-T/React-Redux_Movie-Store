import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/Apis/MovieApi"
// import { ApiKey } from '../../common/Apis/MovieApiKey';
const ApiKey = process.env.REACT_APP_API_KEY;
export const fetchAsyncMovie = createAsyncThunk("movies/fetchAsyncMovie", async (term) => {
    const movieText = term || "harry";
    const response = await movieApi.get(`?apikey=${ApiKey}&s=${movieText}&type=movie`)
    return response.data;
});
export const fetchAsyncShows = createAsyncThunk("series/fetchAsyncShows", async (term) => {
    const seriesText = term || "friends";
    const response = await movieApi.get(`?apikey=${ApiKey}&s=${seriesText}&type=series`)
    return response.data;
});
export const fetchSelectedItemDetail = createAsyncThunk("selectedItem/fetchAsynchSelectedItem", async (imdbID) => {
    const response = await movieApi.get(`?apikey=${ApiKey}&i=${imdbID}&Plot=full`)
    return response.data;
});
const initialState = {
    movies: {},
    shows: {},
    selectedItem: {},
    status: {
        movies: '',
        shows: '',
    }
}
const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovie: (state, { payload }) => {
            state.movies = payload;
        },
    },
    extraReducers: (builder) => {
        // actionType : reducerFunction
        builder
            .addCase(fetchAsyncMovie.pending, (state) => {
                console.log("fetching movies from server ...")
                state.status.movies = 'pending'
            }).addCase(fetchAsyncMovie.fulfilled, (state, { payload }) => {
                console.log("Fetched movies successfully : ", payload);
                state.status.movies = 'success'
                state.movies = payload;
            }).addCase(fetchAsyncMovie.rejected, (state) => {
                state.status.movies = 'error'
                console.log("error");
            }).addCase(fetchAsyncShows.pending, (state, { payload }) => {
                console.log("fetching shows from server...")
                state.status.shows = 'pending';
                state.shows = payload;
            })
            .addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
                console.log("fetched shows successfully")
                state.status.shows = 'success';
                state.shows = payload;
            })
            .addCase(fetchSelectedItemDetail.fulfilled, (state, { payload }) => {
                console.log("fetched movie detail successfully")
                state.selectedItem = payload;
            })
    }
})
export const { addMovie } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedItemDetail = (state) => state.movies.selectedItem
export default movieSlice.reducer;