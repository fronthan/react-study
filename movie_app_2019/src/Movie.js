import React from "react";
import PropTypes from "prop-types";
import "./Movie.scss";

function Movie({id, year, title, summary, poster, genres}) {
    return (
    <div className="movie">
        <img src={poster} alt={title} title={title} />
        <h3 className="movie_title">{title}</h3>
        <h4 className="movie_year">{year}</h4>
        <p className="movie_summary">{summary.slice(0,100)}{summary.length > 100 ? '...' : ''}</p>
        <ul className="genres">
        {genres.map((genre) => <li className="genres_genre">{genre}</li>)}
        </ul>
    </div>
    );
};

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;