import React from 'react'
import styled from 'styled-components';
import Banner from '../components/Banner';
import Category from '../components/Category';
import Row from '../components/Row';
import requests from '../api/request';

function MainPage() {
  return (
    <Container>
      <Banner />
      <Category />
      <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" id="AM" fetchUrl={requests.fetchActionMovies} />
      <Row title="Codedy Movies" id="CM" fetchUrl={requests.fetchComedyMovies} />
    </Container>
  )
}

export default MainPage

const Container = styled.main`
  display:block; overflow-x: hidden;
  position: relative; min-height:calc(100vh - 250px);
  top: 72px; padding: 0 calc(3.5vw + 5px);

  &:after {
    content:''; position:absolute;
    inset:0px; opacity: 1; z-index: -1;
    background: url('/images/home-background.png') center center/cover no-repeat fixed;
  }
`