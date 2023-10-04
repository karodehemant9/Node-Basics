//this way we create our own module and then export them to be used by someone else. Basically connecting multiple files to each other

const fs = require('fs');

const requestHandler = ((req, res) =>{
    const url = request.url;
    const method = request.method;
  
    if (url === '/') {
        response.write('<html>');
        response.write('<head><title>Enter Message</title><head>');
        response.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        response.write('</html>');
        return response.end();
    }

    if (url === '/message' && method === 'POST') {
    const body = [];

    request.on('data', (chunk) => {
        console.log(chunk);
        body.push(chunk);
    });

    return request.on('end', (err) => {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        fs.writeFile('message.txt', message , () =>{
        response.statusCode = 302;
        response.setHeader('Location', '/');
        return response.end();
        });    
    }); 
    }

    response.setHeader('Content-Type', 'text/html');
    response.write('<html>');
    response.write('<head><title>My First Page</title><head>');
    response.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    response.write('</html>');
    response.end();
})


//we can import this requestHandler from any other file
module.exports = requestHandler;

//we are exporting here in form of an object
// module.exports = {
//     handler: requestHandler,
//     someText: 'some hardcoded text'
// }

//we are exporting here as individual properties
// module.exports.handler = requestHandler;
// module.exports.someText = 'some hardcoded text';