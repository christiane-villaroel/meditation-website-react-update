/* const express = require('express');
const path = require('path');
const jsonServer = require('json-server');
const server = require('./data/db.json')
const app = express();
const middlewares = jsonServer.defaults();
const router = jsonServer.router(server);
const port = process.env.PORT || 8000;

app.use('/', middlewares, router);
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port,()=>{
    console.log('JSON Server us running')
});
 */
/* const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("data/db.json");
const middlewares = jsonServer.defaults({ static: "./build" });
const port = process.env.PORT || 8000;

server.use(middlewares);
server.use(router);

server.listen(port); */

const jsonServer = require('json-server')
const cors = require('cors')
const path = require('path')

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(cors())
server.use(jsonServer.bodyParser)
server.use(middlewares)
server.use(router)



server.listen(procces.env.PORT || 8000, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`)
})
