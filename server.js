const express = require('express');
const path = require('path');
const jsonServer = require('json-server');
const app = express();
const middlewares = jsonServer.defaults();
const router = jsonServer.router('./data/db.json');
const port = process.env.PORT || 8000;

app.use('/', middlewares, router);
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port,()=>{
    console.log('JSON Server us running')
});
