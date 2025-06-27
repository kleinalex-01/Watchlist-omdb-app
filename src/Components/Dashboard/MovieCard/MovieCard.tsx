import type { Movie } from '../../../Context/WatchlistContext';
import React from 'react';
import styles from './MovieCard.module.css';
import { useWatchlist } from '../../../Context/WatchlistContext';

export const MovieCard: React.FC<{ movie: Movie[] }> = ({ movie }) => {
    const { addToWatchlist } = useWatchlist();

    return (
        <div className="container py-5">
            <div className={`${styles.card} d-flex flex-column align-items-center`}>
                {movie.map((m) => (
                    <div key={m.imdbID} className={`${styles.cardContainer} d-flex align-items-start p-2 rounded shadow-sm`}>
                        {m.Poster && (
                            <img src={m.Poster} alt={m.Title} className={styles.cardImage}/>
                        )}
                        <div className="d-flex flex-column justify-content-between w-100">
                            <div>
                                <h6 className="mb-1 fw-semibold">{m.Title}</h6>
                                <div className={`${styles.movieDetails} small`}>
                                    Year: {m.Year} <br />
                                    IMDb ID: {m.imdbID}
                                </div>
                            </div>
                            <div className="d-flex justify-content-end mt-2">
                                <button onClick={() => addToWatchlist(m)} className={`${styles.button} btn-sm`}>
                                    Add to Watchlist
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
