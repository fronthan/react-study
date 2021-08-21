import React, { useState } from 'react';
import NewsList from './components/NewsList';
// import axios from 'axios';

const App = () => {
  // const [data, setData] = useState(null);

  // const onClick = async () => {
  //   try {// 
  //     const response = await axios.get(
  //       'https://newsapi.org/v2/top-headlines?country=kr&category=technology&apiKey=493c839ebcce4b6ea34c39823af14a80'
  //       );
  //       setData(response.data);
  //   } catch (e) {
  //     console.log(e)
  //   }
  // };
  
  return (
    // <div>
    //   <div>
    //     <button onClick={onClick}>불러오기</button>
    //   </div>
    //   {data &&
    //   <textarea rows={7} value={JSON.stringify(data,null, 2)} readOnly={true} />}
    // </div>
    <NewsList />
  );
};


export default App;