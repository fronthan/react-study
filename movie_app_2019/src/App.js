import React from "react";
import Navigation from "./components/Navigation";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import "./App.scss";

function App() {
 return (
   <div className="page_wrap">
    <h1 className="page_title">영화 사이트 리액트로 만들기</h1>
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
   </div>
 )
}

export default App;