import React from "react";
import { Link } from "react-router-dom";

export default function MyList({ watchList }) {
  // Ensure watchlist is an array and has items
  const isEmptyWatchlist = !Array.isArray(watchList) || watchList.length === 0;

  return (
    <>
      <div className="header-container container-fluid">
        <div className="overlay container-fluid">
          <div className="container h-75 d-flex justify-content-between align-items-center">
            <p className="h1 text-white fw-semibold">Your watchlist</p>
            <Link to="/" className="p text-white">
              Search for movies
            </Link>
          </div>
        </div>
      </div>

      {isEmptyWatchlist ? (
        <div>
          <p>Your watchlist is empty.</p>
        </div>
      ) : (
        <div className="row mt-5">
          {watchList.map((movie) => (
            <div key={movie.imdbID} className="col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="card h-100 shadow d-flex flex-column">
                <img
                  src={`${movie.Poster}`}
                  className="card-img-top"
                  alt={movie.Title}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{movie.Title}</h5>
                  <p className="card-text">{movie.Year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
