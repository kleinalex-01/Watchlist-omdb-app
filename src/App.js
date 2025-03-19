import {react, useState} from 'react';
import './App.css';
import api_key from './api_key';

function App() {
    const baseURL = `http://www.omdbapi.com/?apikey=[${api_key}]&`
    const posterURL = `http://img.omdbapi.com/?apikey=[${api_key}]&`
    const [movies, setMovies] = useState([]);

    return (
        <>

        </>
    )
}

export default App;
