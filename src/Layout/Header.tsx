import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import { ThemeContext } from '../Context/ThemeContext';

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

        <div className={`${styles.header} container d-flex justify-content-between ailgn-items-center m-5`}>
            {isHome && (
                <>
                <Link to="/" className={styles.watchlistLink}>Find your film</Link>
                <Link to="watchlist" className={styles.searchLink}>My watchlist</Link>
                </>
            )}
            {isWatchlist && (
                <>
                <Link to="watchlist" className={styles.watchlistLink}>My Watchlist</Link>
                <Link to="/" className={styles.searchLink}>Search for movies</Link>
                </>
            )}
        </div>
        </>
    )
}