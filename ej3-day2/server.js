const express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Servimos cualquier cosa de public
app.use(express.static("public"))

/*app.get('/', function(req, res){
  res.sendfile('index.html');
});*/


function testHi(number) {
  console.log(arguments)
  const socket = this
  console.log(`user sent hi, and number ${number}`)
  console.log(socket.id)
}

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('hi', testHi)
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
