import react from "react";
import { Link } from "react-router-dom"

export default function Main() {
    return (
        <>
        <div className="header-container container-fluid">
            <div className="overlay container-fluid">
                <div className="container h-75 d-flex justify-content-between align-items-center">
                    <p className="h1 text-white fw-semibold">Find your film</p>
                    <Link to="/myList" className="p text-white">My watchlist</Link>
                </div>

            </div>
        </div>

        <div className="container-fluid">

        </div>
        </>
    )
}