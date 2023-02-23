// const http = require('http');
// const server = http.createServer((req, res) => {
//     console.log("Divyanshu")
// })
// server.listen(4000);

// const http = require('http');
// const server = http.createServer((req, res) => {
//   const url = req.url;
//   res.setHeader('Content-Type', 'text/html');
//   res.write('<html>');
//   res.write('<head><title>My First Page</title></head>');

//   if(url === '/home'){
//     res.write('<body><h1>Welcome Home</h1></body>');
//     res.end();
//   }else if(url === '/about'){
//     res.write('<body><h1>Welcome to About Us Page</h1></body>');
//     res.end();
//   }else if(url === '/node'){
//     res.write('<body><h1>Welcome to my Node js project</h1></body>')
//   }
//   res.write('</html>');
//   res.end();
// })

// server.listen(3000);


const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    fs.writeFileSync('message.txt', 'DUMMY');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);