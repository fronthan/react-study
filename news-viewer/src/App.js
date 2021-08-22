import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  /* 상태 관리는 BrowserRouter를 정의한 index.js에서 하므로 삭제 
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback(category => setCategory(category), []);
  */

  return <Route path="/:category?" component={NewsPage} />;
  //여기서 /:category? 의 물음표는 있을 수도 없을 수도 있는 값. 파라미터가 없다면 전체 카테고리로 간주
};


export default App;