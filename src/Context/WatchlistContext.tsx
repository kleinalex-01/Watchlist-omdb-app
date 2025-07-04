import React, { createContext, useContext, useState } from 'react';

export type Movie = {
    Poster: string;
    Title: string;
    imdbID: number;
    Year: number;
}

type WatchlistContextType = {
    watchlist: Movie[];
    addToWatchlist: (movie: Movie) => void;
    removeFromWatchlist: (imdbID: number) => void;
}

const WatchlistContext = createContext<WatchlistContextType | undefined>(undefined);

export const WatchlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [watchList, setWatchList] = useState<Movie[]>([]);

    React.useEffect(() => {console.log(watchList)}, [watchList]);

    const addToWatchlist = (movie: Movie) => {
        if (watchList.some((m) => m.Title === movie.Title)) {
            alert(`${movie.Title} is already in the watchlist`);
            return;
        }
        setWatchList((prev) => [...prev, movie]);
    }

    const removeFromWatchlist = (id: number) => {
        setWatchList((prev) => prev.filter(movie => movie.imdbID !== id));
    }

    return (
        <>
        <WatchlistContext.Provider value={{ watchlist: watchList, addToWatchlist, removeFromWatchlist }}>
            {children}
        </WatchlistContext.Provider>
        </>
    )
}

export const useWatchlist = () => {
    const context = useContext(WatchlistContext);
    if (!context) {
        throw new Error('useWatchlist must be used within a WatchlistProvider');
    }
    return context;
}