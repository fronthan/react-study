import React from 'react';
import ColorBox from './components/ColorBox';
// import SelectColors from './components/SelectColors';
import SelectColorsClass from './components/SelectColorsClass';
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
        {/* <SelectColors /> */}
        <SelectColorsClass />
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;
