const net = require('net');
const { handleFileRequest } = require('./handle-request');
const { PORT } = require('./constants');

const server = net.createServer();

server.on('connection', socket => {
  console.log('Client connected');
  socket.write('What file are you looking for?');
  
  socket.setEncoding('utf8');
  socket.on('data', data => {
    console.log('Client\'s request:', data);
    handleFileRequest(data, (file) => {
      socket.write(file);
    });
  });
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
