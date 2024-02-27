const webSocketServer = require('websocket').server;
const http = require('http');

const server = http.createServer();
server.listen(port=55455,()=>{
    console.log(`Server Listening on port ${port}`)
});
const wsServer = new webSocketServer({ httpServer: server });

wsServer.on('request', function (request) {
    console.log('Pinging the client for Latency. Establishing Connection');
    var connection = request.accept(null, request.origin);
    setInterval(() => {
        connection.sendUTF(new Date().getTime())
    }, 100);
});