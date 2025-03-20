import React, {useState, useEffect} from 'react';
import './App.css';
import Main from './Components/Main';
import MyList from './Components/MyList';
import { Routes, Route} from "react-router-dom";

function App() {
    const baseURL = `http://www.omdbapi.com/?apikey=5c14b457&`
    const posterURL = `http://img.omdbapi.com/?apikey=5c14b457&`
    const [searchTerm, setSearchTerm] = useState("");
    const [SearchResults, setSearchResults] = useState([]);

    const getInput = (e) => {
        e.preventDefault();
        if (!searchTerm) return;

        return fetch(baseURL + `s=${searchTerm}`)
            .then(res => res.json())
            .then(data => console.log(data.Search));
    }

    return (
        <>
        <Routes>
            <Route path="/" element={<Main SearchResults={SearchResults}
                                            getInput={getInput}
                                            setSearchTerm={setSearchTerm}/>} />
            <Route path="/mylist" element={<MyList />} />
        </Routes>
        </>
    )
}

export default App;
