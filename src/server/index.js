import express from 'express';
import path from 'path';
import axios from 'axios';
import React from 'react';
import ReactDom from 'react-dom/server';
import Root from './render/react.js'


const app = express();

//Hace que pueda utilizar js desde el servidor
app.use('/static', express.static(path.join(__dirname, '..', '..', 'dist', 'static')));

app.get('/', async (req, res) => {
    const response = await axios('http://localhost:4000/users');
    const users = response.data;
    const html = ReactDom.renderToString(<Root users={users}/>);
    res.send(html);
});

app.listen(3000, () => {
    console.log('server started: http://localhost:3000')
});
