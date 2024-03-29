import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import { StaticRouter } from 'react-router-dom';
import App from './App';

const app = express();

//서버 사이드 렌더링을 처리할 핸들러 함수
//이 함수는 404가 떠야 하는 상황에 404를 띄우지 않고, 서버 사이드 렌더링을 해준다. 
const serverRender = ( req, res, next ) => {
    const context= {};
    const jsx = (
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );

    const root = ReactDOMServer.renderToString(jsx); //렌더링을 하고
    res.send(root); //클라이어트에게 결과물을 응답한다. 
};

app.use(serverRender);

app.listen(5000, () => {
    console.log('Running on http://localhost:5000');
});