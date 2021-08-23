import React from 'react';
import ColorBox from './components/ColorBox';
import SelectColors from './components/SelectColors';
import { ColorProvider } from './contexts/color';


function App() {
  return (
    /* 기본적인 Provider 사용법 15.2.2
      //  <ColorContext.Provider value={{ color:'red' }}>
  //  <div>
  //    <ColorBox />
  //  </div>
  //  </ColorContext.Provider>
  */
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;
