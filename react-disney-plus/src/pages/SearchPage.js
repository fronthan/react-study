import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axios'
import { useDebounce } from '../hooks/useDebounce';
import './SearchPage.css'

export default function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  const searchTerm = query.get('q');
  const debounceSearchTerm = useDebounce(searchTerm, 500);//커스텀 훅으로 넘기면 입력을 멈출 때까지 쿼리를 전송하지 않음
  const navigate = useNavigate();
  
  useEffect(() => {
    if (debounceSearchTerm) {
       fetchSearchMovie(debounceSearchTerm)
    }
  }, [debounceSearchTerm])

  const fetchSearchMovie = async (st) => {
    try {
      const response = await axiosInstance.get(`/search/multi?include_adult=false&query=${st}`);
      setSearchResults(response.data.results)
      // console.log(response.data.results)
    } catch(e) {
      console.log('error fetchSearchMovie', e)
    }
  }

  if(searchResults.length > 0) {
    return (
      <section className='search-container'>
          {searchResults.map((movie) => {
            if(movie.backdrop_path !== null && movie.media_type !== "person") {
              const movieImageUrl = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
              return (
                <div className='movie' key={movie.id}>
                  <div className='movie__column-poster' onClick={() => navigate(`/${movie.id}`)} >
                    <img src={movieImageUrl} alt="movie" className='movie__poster' />
                  </div>
                </div>
              )
            } 
          })}
      </section>
    )
  } else {
    return (
        <section className='no-results'>
          <div className='no-results__text'>
            <p>
              찾고자하는 검색어 "{searchTerm}" 에 맞는 영화가 없습니다.
            </p>
          </div>
        </section>
    )
  }
}
