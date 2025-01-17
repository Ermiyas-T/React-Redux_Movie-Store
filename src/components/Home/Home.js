import React, { useEffect } from 'react';
import MovieListing from "../MovieListing/MovieListing"
import { useDispatch } from 'react-redux';
import { fetchAsyncMovie, fetchAsyncShows } from "../../features/movies/movieSlice"
const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAsyncMovie())
        dispatch(fetchAsyncShows())
    }, [dispatch]);
    return (
        <div className='banner-img'>
            <MovieListing />
        </div>
    );
};

export default Home;