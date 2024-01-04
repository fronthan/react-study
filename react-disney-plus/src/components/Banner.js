import "./Banner.css";
import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axios";
import requests from "../api/request";
import styled from "styled-components";

export default function Banner() {
  const [movie, setMovie] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axiosInstance.get(requests.fetchNowPlaying);
    const movieId = res.data.results[Math.floor(Math.random() * res.data.results.length)].id;
    // console.log(res.data.results);

    const { data: movieDetail } = await axiosInstance.get(`movie/${movieId}`, {
      params: { append_to_response: "videos" },
    });

    setMovie(movieDetail);
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n) + "..." : str;
  };

  if (isClicked) {
    return (
      <>
        <Container>
          <HomeContainer>
            <IFrame
              src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
              width="640"
              height="360"
              allow="autoplay; fullscreen"
            />
          </HomeContainer>
        </Container>
        <button onClick={()=> setIsClicked(false)}>X</button>
      </>
    );
  } else {
    return (
      <header
        className="banner"
        style={{
          backgroundImage: `url('https://api.themoviedb.org/3/movie/${movie.id}/images')`,
          backgroundPosition: "top center",
          backgroundsize: "cover",
        }}
      >
        <div className="banner_contents">
          <h1 className="banner_title">{movie.title || movie.name || movie.original_name}</h1>

          <div className="banner_buttons">
            {movie?.videos?.results[0]?.key && (
              <button className="banner_button play" onClick={() => setIsClicked(true)}>
                Play
              </button>
            )}
          </div>

          <p className="banner_description">{truncate(movie.overview, 100)}</p>
        </div>
        <div className="banner--fadeBottom"></div>
      </header>
    );
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const IFrame = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
