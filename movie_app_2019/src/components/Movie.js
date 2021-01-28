import React from "react";
import "./Movie.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Movie({ id, year, title, summary, poster, genres, synopsis, titlelong, postbg }) {
  return (
    <div className="movie">
      <Link
        to={{
          pathname: `/movie/${id}`,
          state: {
            year,
            title,
            summary,
            poster,
            genres,
            synopsis,
            titlelong,
            postbg
          },
        }}
      >
        <img src={poster} alt={title} title={title} />
        <h2 className="movie_title">{title}</h2>
        <p className="movie_year">{year}</p>
        <p className="movie_summary">
          {summary.slice(0, 100)}
          {summary.length > 100 ? "..." : ""}
        </p>
        <ul className="genres">
          {genres.map((genre) => (
            <li className="genres_genre">{genre}</li>
          ))}
        </ul>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
