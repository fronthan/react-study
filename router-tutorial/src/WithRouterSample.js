import React from 'react';
import { withRouter } from 'react-router-dom';

/* withRouter는
* Higher-order Component (HoC) 로써, 라우트로 사용된 컴포넌트가 아니어도 match, location,history 객체를 접근할 수 있게 한다. */
const WithRouterSample = ({ location, match, history }) => {
  return (
    <div>
      <h4>location</h4>
      <textarea readonly value={JSON.stringify(location, null, 2)} cols="30" rows={7} />
      <h4>match</h4>
      <textarea readonly value={JSON.stringify(match, null, 2)} cols="30" rows={7} />
      <p>withRouter를 사용하면 match가 현재 자신을 보여주고 있는 라우트 컴포넌트 (여기서는 Profiles) 를 기준으로 보여진다.<br/>
        path='./profiles' 라고만 입력했으므로 username 파라미터를 읽어오지 못했다.<br/>
        그래서 Profiles에서 WithRouterSample을 지우고 Profile컴포넌트에 넣으면 match URL params가 제대로 보인다
      </p>
      <button onClick={()=> history.push('/')}>홈으로</button>     
    </div>
    
    //JSON.stringify(인수,인수,인수) : 2번째, 3번째를 "null, 2"로 설정해주면 JSON에 들여쓰기가 적용된 상태로 문자열이 만들어진다
  );
};

export default withRouter(WithRouterSample);