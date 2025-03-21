import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import './App.css';
import Main from './Components/Main';
import MyList from './Components/MyList';
import { Routes, Route} from "react-router-dom";

function App() {
    const baseURL = `http://www.omdbapi.com/?apikey=5c14b457&`
    const posterURL = `http://img.omdbapi.com/?apikey=5c14b457&`
    const [searchTerm, setSearchTerm] = useState("");
    const [SearchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [watchlist, setWatchlist] = useState([]);


    const getInput = (e) => {
        e.preventDefault();
        if (!searchTerm) return;
        setIsLoading(true);
        setError(null);
        
        axios.get(baseURL + `s=${searchTerm}`)
        .then((response) => {
            if (response.data.Search && Array.isArray(response.data.Search)) {
                setSearchResults(response.data.Search);
            } else {
                setSearchResults([]);
            }})
        .catch((error) => {
            setError(error);})
        .finally(() => {
            setIsLoading(false);
        })

        if (isLoading) return <p className='text-center mt-4'>Loading...</p>
        if (error) return <p className='text-center text-danger mt-4'>Error: {error.message}</p>
    }

console.log(watchlist)
    return (
        <>
        <Routes>
            <Route path="/" element={<Main SearchResults={SearchResults}
                                            getInput={getInput}
                                            setSearchTerm={setSearchTerm}
                                            setWatchlist={setWatchlist}/>} />
            <Route path="/mylist" element={<MyList watchList={watchlist}/>} />
        </Routes>
        </>
    )
}

export default App;
