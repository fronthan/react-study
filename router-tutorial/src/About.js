import React from 'react';
import qs from 'qs';

/**
 * qs은 쿼리 문자열을 객체로 변환할 때 사용한다. 
 location 객체는 pathaname, search, hash를 반환한다
 URL 쿼리를 읽을 때 search 값을 확인해야 한다. 예 : ?detail=true&another=1
 */
const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix:true //이 설정은 문자열 맨 앞의 ? 를 생략하게 한다
  });
  const showDetail = query.detail === 'true'; //not true, 쿼리의 파싱 결과 갑슨 문자열이다

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습하는 예제 프로젝트입니다</p>
      {showDetail && <p>detail 값을 true로 설정함!</p>}
    </div>
  );
};


export default About;