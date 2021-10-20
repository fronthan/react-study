import React from 'react';
import ReactDOMServer from 'react-dom/server';

const html = ReactDOMServer.renderToString (
    <div>HEllo server side rendering!</div>
);

console.log(html)
//export default index.server;