import React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Header.scss"
import { useDispatch } from 'react-redux';
import { fetchAsyncMovie, fetchAsyncShows } from '../../features/movies/movieSlice';
const Header = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const [term, setTerm] = useState("");
    const submitHandler = (e) => {
        if (term === '') return alert("please enter movie or show");
        e.preventDefault();
        dispatch(fetchAsyncMovie(term));
        dispatch(fetchAsyncShows(term));
        setTerm("")
    }
    return (
        <div className='header'>
            <div className='mobile'>
                <Link to="/">
                    <h2 className='logo'>MovieHive</h2>
                </Link>
                <div className="user-image">
                    <i className='fa fa-user-o'></i>
                </div>
            </div>
            <div className='desktop'>
                <Link to="/">
                    <div className='logo'>MovieHive</div>
                </Link>



                {/* {location.pathname === '/' && <div className='search-element'>
                    <form onSubmit={submitHandler}>

                        <input id="search" value={term} onChange={(e) => setTerm(e.target.value)} placeholder="Search Movie Or Show" />

                        <button type='submit' ><i className='fa fa-search'></i></button>
                    </form>
                </div>} */}



            </div>
            {
                location.pathname === '/' && <div className='search-element'>
                    <form onSubmit={submitHandler}>

                        <input id="search" value={term} onChange={(e) => setTerm(e.target.value)} placeholder="Search Movie Or Show" />

                        <button type='submit' ><i className='fa fa-search'></i></button>
                    </form>
                </div>
            }


            <div className="user-image">
                <i className='fa fa-user-o'></i>
            </div>
        </div >)
}
export default Header;