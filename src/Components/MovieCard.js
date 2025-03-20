import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { prerenderToNodeStream } from 'react-dom/static';

export default function MovieCard({ SearchResults }) {
    const movieCards =SearchResults.map(movie => {
        return (
            <>
            <div className='card'>

            </div>
            </>
        )
    })
    return (
        <>
        {movieCards}
        </>
    )
}
