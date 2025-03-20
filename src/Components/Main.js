import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

export default function Main({ SearchResults, getInput, setSearchTerm }) {
    return (
        <>
        <div className="header-container container-fluid">
            <div className="overlay container-fluid">
                <div className="container h-75 d-flex justify-content-between align-items-center">
                    <p className="h1 text-white fw-semibold">Find your film</p>
                    <Link to="/myList" className="p text-white">My watchlist</Link>
                </div>
            </div>
        </div>

        <form className="search-container d-flex" onSubmit={getInput}>
            <input className="form-control border-dark"
                    type="search" 
                    placeholder="Search for a movie"
                    aria-label="Search"
                    onChange={(e) => setSearchTerm(e.target.value)}>
            </input>
            <button className="btn btn-light border-dark" type="submit">Search</button>
        </form>

        <div className="searched-movies-container container-fluid bg-light">
            <MovieCard SearchResults={SearchResults}/>
        </div>

        {!SearchResults.length && <div className="icon-container">
                            <i class="fa-solid fa-film" style={{color: "#97989b"}}></i>
                            <p>Start exploring</p>
                        </div>}
        </>
    )
}