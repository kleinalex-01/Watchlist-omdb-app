export const MovieCard: React.FC = ({ movie }) => {
    return (
        <>
        {movie.map((m: any) => (
            <div className="card" key={m.imdbID}>
                <img src={m.Poster} className="card-img-top" alt={m.Title} />
                <div className="card-body">
                    <h5 className="card-title">{m.Title}</h5>
                    <p className="card-text">Year: {m.Year}</p>
                    <button className="btn btn-primary">Add to Watchlist</button>
                </div>
            </div>
        ))}
        </>
    )
}