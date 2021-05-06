const net = require('net');
const { handleFileRequest } = require('./handle-request');
const { PORT } = require('./constants');

const server = net.createServer();

server.on('connection', client => {
  console.log('Client connected');
  client.write('What file are you looking for?');
  
  client.setEncoding('utf8');
  client.on('data', data => {
    console.log('Client\'s request:', data);
    handleFileRequest(data);
  });
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
