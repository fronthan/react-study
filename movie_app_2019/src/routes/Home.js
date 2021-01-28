import React from "react";
import "./Home.scss";
import axios from "axios";
import Movie from "../components/Movie";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  
  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");

    this.setState({ movies, isLoading: false });
  };


  render() {
    const { isLoading, movies } = this.state;

    return (
      <main role="main" className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_txt">영화 목록을 불러오는 중....</span>
          </div>
        ) : (
          <div className="movies_wrap">
            {movies.map((movie) =>
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                titlelong={movie.title_long}
                synopsis={movie.synopsis}
                postbg={movie.large_cover_image}
              />
            )}
          </div>
        )}
      </main>
    );
  }
}

export default Home;
