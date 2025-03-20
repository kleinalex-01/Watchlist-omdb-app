import {react, useState} from 'react';
import './App.css';
import Main from './Components/Main';
import MyList from './Components/MyList';
import { Routes, Route} from "react-router-dom";

function App() {
    const baseURL = `http://www.omdbapi.com/?apikey=[5c14b457]&`
    const posterURL = `http://img.omdbapi.com/?apikey=[5c14b457]&`
    const [movies, setMovies] = useState([]);

    return (
        <>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/mylist" element={<MyList />} />
        </Routes>
        </>
    )
}

export default App;
