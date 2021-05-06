const net = require('net');
const readline = require('readline');

const conn = net.createConnection({
  host: 'localhost',
  port: 3000
});

conn.setEncoding('utf8');

conn.on('connect', () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('', response => {
    conn.write(response);
  });
});

conn.on('data', data => {
  console.log('Server says:', data);
});
