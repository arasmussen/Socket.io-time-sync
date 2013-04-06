var io = require('socket.io').listen(8080);

io.sockets.on('connection', function(socket) {
  socket.on('ping', function(data) {
    var received = (new Date()).valueOf();
    if (!data.hasOwnProperty('t')) {
      throw 'socket.io-time-sync: server received message with missing data';
    }

    var difference = received - data.t;
    socket.emit('pong', {
      d: difference
    });
  });
});
