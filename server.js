import app from './server/app';
const http = require('http');

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('port 3000 is where the magic happens');
});
