import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
  width:100%;
  max-width:768px; 
  margin:2rem auto 0;
  padding-bottom:3rem;
  box-sizing:border-box;

  @media screen and (max-width:768px) {
    padding-left:1rem; padding-right:1rem;
  }
`;

// const sampleArticle = {
//   title:'제목',
//   description:'내용',
//   url: 'https://google.com',
//   urlToImage: 'https://via.placeholder.com/160'
// };

const NewsList = ({ category }) => {
  // const [articles, setArticles] = useState(null);
  // const [loading, setLoading] = useState(false);
  const [loading, response, error] = usePromise(()=> {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=493c839ebcce4b6ea34c39823af14a80`,
    );
  }, [category]);

  if (loading) {
    return <NewsListBlock> 대기 중... </NewsListBlock>;
  }

  //articles 값이 설정되지 않았을 때
  if(!response) {
    return null;
  }

  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>
  }

  //articles(response) 값이 유효할 때
  return (
    <NewsListBlock>
      {/* <NewsItem article={sampleArticle}/>
      <NewsItem article={sampleArticle}/>
      <NewsItem article={sampleArticle}/> */}
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  )
}

export default NewsList;