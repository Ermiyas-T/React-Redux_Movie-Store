import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSelectedItemDetail, getSelectedItemDetail } from '../../features/movies/movieSlice';
import "./MovieDetail.scss"
const MovieDetail = () => {
    const dispatch = useDispatch();
    const { movieId } = useParams();
    let selectedItem = useSelector(getSelectedItemDetail);
    useEffect(() => {
        dispatch(fetchSelectedItemDetail(movieId));
    }, [dispatch, movieId])

    return (
        <div className='movie-detail'>
            {Object.keys(selectedItem).length === 0 ? (<div className='loading-text'><i className='fa fa-spinner '></i> Loading...</div>
            ) : (<div className='container'>
                <div className='left-container'>
                    <h2>{selectedItem.Title}</h2>
                    <div className='stats'>
                        <h5>
                            IMDB Rating <i className='fa fa-star rating-icon'></i> : {selectedItem.imdbRating}
                        </h5>
                        <h5>
                            IMDB Votes <i className='fa fa-thumbs-up vote-icon'></i> : {selectedItem.imdbVotes}
                        </h5>
                        <h5>
                            Runtime <i className='fa fa-film runtime-icon'></i> : {selectedItem.Runtime}
                        </h5>
                        <h5>
                            Year <i className='fa fa-calendar year-icon'></i> : {selectedItem.Year}
                        </h5>
                    </div>
                    <div className='plot'>
                        <p>{selectedItem.Plot}</p>

                    </div>
                    <div className='short-info'>
                        <h4>Director: <span className='span-blue'>{selectedItem.Director}</span></h4>
                        <h4>Director: <span className='span-blue'>{selectedItem.Director}</span></h4>
                        <h4>Writer: <span className='span-blue'>{selectedItem.Writer}</span></h4>
                        <h4>Actors: <span className='span-blue'>{selectedItem.Actors}</span></h4>
                    </div>

                </div>
                <div className='right-container'>
                    <img src={selectedItem.Poster} alt={selectedItem.Title} />
                </div>
            </div>)}

        </div>
    )
};
export default MovieDetail;