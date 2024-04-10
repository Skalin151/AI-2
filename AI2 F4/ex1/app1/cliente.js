const http = require('http');

const options = {
  hostname: 'localhost',
  port: 8081,
  path: '/index.html',
  method: 'GET',
};

const req = http.request(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);

  res.on('data', (chunk) => {
    console.log(chunk.toString());
  });

  res.on('end', () => {
    console.log('Resposta completa.');
  });
});

req.end();
