import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import { ThemeContext } from '../Context/ThemeContextType';

export const Header: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const location = useLocation();
    const isHome = location.pathname === '/';
    const isWatchlist = location.pathname === '/watchlist';


    return (
        <>
        <button onClick={toggleTheme} className={`${styles.theme}`}>
            {theme === 'light' ? (
                <i className={`${styles.moon} bi bi-moon-stars-fill`}></i>
            ) : (
                <i className={`${styles.sun} bi bi-sun-fill`}></i>
            )}
        </button>

        <div className={`${styles.header} container-fluid p-0`}>
            <div className={`${styles.backdrop} d-flex justify-content-between align-items-center`}>
                {isHome && (
                    <>
                    <Link to="/" className={`${styles.watchlistLink} mx-4 text-white`}>Find your film</Link>
                    <Link to="watchlist" className={`${styles.searchLink} mx-4 text-white`}>My watchlist</Link>
                    </>
                )}
                {isWatchlist && (
                    <>
                    <Link to="watchlist" className={`${styles.watchlistLink} mx-4 text-white`}>My Watchlist</Link>
                    <Link to="/" className={`${styles.searchLink} mx-4 text-white`}>Search for movies</Link>
                    </>
                )}
            </div>
        </div>
        </>
    )
}