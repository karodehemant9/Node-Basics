const http = require('http');


const server = http.createServer(function(request, response){
    const url = request.url;
    if(url === '/home')
    {
        response.setHeader('Content-Type','text/html');
        response.write('<html>');
        response.write('<head><title>My first page</head></title>');
        response.write('<body><h1>Welcome home</h1></body>');
        response.write('</html>');
        return response.end();
    } 
    else if(url === '/about')
    {
        response.setHeader('Content-Type','text/html');
        response.write('<html>');
        response.write('<head><title>My first page</head></title>');
        response.write('<body><h1>Welcome to about us</h1></body>');
        response.write('</html>');
        return response.end();
    } 
    else if(url === '/node')
    {
        response.setHeader('Content-Type','text/html');
        response.write('<html>');
        response.write('<head><title>My first page</head></title>');
        response.write('<body><h1>Welcome to my Node Js project</h1></body>');
        response.write('</html>');
        return response.end();
    }       
});

server.listen(3000);





