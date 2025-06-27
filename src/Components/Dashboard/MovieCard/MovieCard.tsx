import type { Movie } from '../../../Context/WatchlistContext';
import React from 'react';
import styles from './MovieCard.module.css';

export const MovieCard: React.FC<{ movie: Movie[] }> = ({ movie }) => {
    return (
        <div className={`${styles.container} list-group`}>
            {movie.map((m) => (
                <div
                    className="list-group-item border-0 border-bottom py-3 px-2"
                    key={m.imdbID}
                >
                    <div className="d-flex gap-3">
                        {m.Poster && (
                            <img
                                src={m.Poster}
                                alt={m.Title}
                                style={{
                                    width: '80px',
                                    height: '120px',
                                    objectFit: 'cover',
                                    borderRadius: '0.5rem',
                                    flexShrink: 0,
                                }}
                            />
                        )}
                        <div className="d-flex flex-column justify-content-between w-100">
                            <div>
                                <h6 className="mb-1 fw-semibold">{m.Title}</h6>
                                <div className="text-muted small">
                                    Year: {m.Year} <br />
                                    IMDb ID: {m.imdbID}
                                </div>
                            </div>
                            <div className="d-flex justify-content-end mt-2">
                                <button className="btn btn-outline-primary btn-sm">
                                    ➕ Add to Watchlist
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
