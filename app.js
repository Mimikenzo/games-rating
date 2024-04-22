const http = require('http');
const fs = require('fs');
const staticFile = require('./appModules/http-utils/static-file');
const mainRouteController = require('./controllers/main');
const defaultRouteController =require('./controllers/default');
const gameRouteController = require('./controllers/game');
const voteRouteController = require('./controllers/vote');

const server = http.createServer((req, res) => {
  const url = req.url;
  let data = '';
  switch (url) {
    case '/':
            mainRouteController(res, "/index.html", ".html");
      break;
    case '/game':
      gameRouteController(res);
      break;
    case '/vote':
      voteRouteController(req, res);
      break;
    default:
      defaultRouteController(res, url);
  }
});
server.listen(3000);