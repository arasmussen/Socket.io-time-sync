function findServerTimeOffset() {
  var socket = io.connect('http://venz.io:8080');

  var num_requests = 10;
  var mean = 0;

  socket.on('pong', function(data) {
    if (!data.hasOwnProperty('d')) {
      throw 'socket.io-time-sync: client received message with missing data';
    }
    mean += data.d / num_requests;
  });

  for (var i = 0; i < num_requests; i++) {
    socket.emit('ping', {t: (new Date()).valueOf()});
  }
}
