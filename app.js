const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
  const url = request.url;
  const method = request.method;
  let fetchedData;

  const filePath = 'message.txt';


  function readFileAndSendResponse(filePath, response) {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading the file:', err);
        response.write('<h3>Error reading text from file</h3>');
      } 
      else {
        response.write('<h3>'+ data + '</h3>');
      }
      response.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
      response.write('</html>');
      response.end();
    });
  }
  


  if (url === '/') {
    response.write('<html>');
    response.write('<head><title>Enter Message</title><head>');
    response.write('<body>');
    readFileAndSendResponse(filePath, response);
  }

  if (url === '/message' && method === 'POST') {
    const body = [];

    request.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    request.on('end', (err) => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message , () =>{
        response.statusCode = 302;
        response.setHeader('Location', '/');
        return response.end();
      });    
    }); 
  }
});

server.listen(3000);

