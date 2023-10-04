const http = require('http');

//importing module or custom file
const routes = require('./routes.js');

const server = http.createServer(routes);
//here we are telling the server to execute the function references by routes variable for each incoming request.

server.listen(3000);
