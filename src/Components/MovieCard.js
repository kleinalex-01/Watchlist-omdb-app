import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { prerenderToNodeStream } from 'react-dom/static';

export default function MovieCard({ SearchResults, setWatchlist}) {
    const [popupText, setPopupText] = React.useState(null);
    const [showPopup, setShowPopup] = React.useState(false);
    const movieCards = SearchResults.map(movie => {
        return (
            <>
            <div className='col-sm-6 col-md-4 col-lg-3 mb-4'>
                <div className='card h-100 shadow d-flex flex-column'>
                    <img src={`${movie.Poster}`} className='card-img-top' alt={movie.Title}/>

                    <div className='card-body d-flex flex-column'>
                        <h5 className='card-title'>{movie.Title}</h5>
                        <p className='card-text'>{movie.Year}</p>
                        <button className='btn btn-primary mt-auto'
                        onClick={() => {setWatchlist(prev => [...prev, movie])
                                        setPopupText(`${movie.Title} is now in your list!`);
                                        setShowPopup(true);
                                        setTimeout(() => {
                                            setShowPopup(false);
                                            setPopupText(null);
                                        }, 3000);
                        }}>Add to my list</button>
                    </div>
                </div>
            </div>
            </>
        )
    })
    return (
        <>
        {showPopup && <div className='toast show position-fixed top-0 end-0 m-3'
                            style={{zIndex: 11}}>
                            <div className='toast-header'>
                                <strong className='me-auto>'>Movie Added!</strong>
                            </div>
                            <div className='toast-body'>
                                {popupText}
                            </div>
                        </div>}

                <div className='row mt-5'>
                    {movieCards}
                </div>
        </>
    )
}
