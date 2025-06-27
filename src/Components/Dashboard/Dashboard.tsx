import React, { useState } from 'react';
import axios from 'axios';
import styles from './Dashboard.module.css';
import { MovieCard } from './MovieCard/MovieCard';
import type { Movie } from '../../Context/WatchlistContext';

export const Dashboard: React.FC = () => {
    const apiKey = import.meta.env.VITE_OMDB_API_KEY;

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchResults, setSearchResults] = useState<Movie[]>([]);

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchTerm.trim() === '') {
            return;
        }
        axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`)
            .then(res => {
                console.log(res.data.Search);
                if (res.data.Response === "True") {
                    setSearchResults(res.data.Search);
                } else {
                    setSearchResults([]);
                }
            })
        setSearchTerm('');
    }
    return (
        <>
            <div className={`${styles.searchBar} container-fluid`}>
                <form onSubmit={handleSearch}>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className={`${styles.inputField} form-control`}
                            placeholder="Search for movies..."
                            aria-label="Search for movies"
                            aria-describedby="button-addon2"
                        />
                        <button className={`${styles.button}`} type="submit" id="button-addon2">
                            Search
                        </button>
                    </div>
                </form>
            </div>

            <div className={styles.container}>
                <MovieCard movie={searchResults}/>
            </div>
        </>
    )
}