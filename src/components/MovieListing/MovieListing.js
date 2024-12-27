import React from 'react';
import { useSelector } from 'react-redux';
import Slider from "react-slick";
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import { settings } from '../../common/settings';
import './MovieListing.scss';

const MovieListing = () => {
    const movies = useSelector(getAllMovies);
    const series = useSelector(getAllShows);
    const status = useSelector((state) => state.movies.status);

    const renderContent = (data, type) => {
        if (data?.Response === "True") {
            return data.Search.map((item, index) => (
                <MovieCard key={index} data={item} />
            ));
        } else {
            return null;
        }
    };

    return (
        <div className='movie-wrapper'>
            {status.movies === 'pending' || status.shows === 'pending' ? (
                <div className='loading-text'><i className='fa fa-spinner '></i> Loading...</div>
            ) : (
                <>
                    {(renderContent(movies, "movies") && status.movies) === 'success' && (
                        <div className='movie-list'>
                            <h2>Movies</h2>
                            <div className='movie-container'>
                                <Slider {...settings}>
                                    {renderContent(movies, "movies")}
                                </Slider>
                            </div>
                        </div>
                    )}

                    {(renderContent(series, "shows") && status.shows) === 'success' && (
                        <div className='movie-list'>
                            <h2>Shows</h2>
                            <div className='movie-container'>
                                <Slider {...settings}>
                                    {renderContent(series, "shows")}
                                </Slider>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default MovieListing;
