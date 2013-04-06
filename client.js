var socket = io.connect('http://venz.io');

var num_requests = 10;
var mean;

socket.on('pong', function(data)) {
  if (!data.hasOwnProperty('d')) {
    throw 'socket.io-time-sync: client received message with missing data';
  }
  mean += data.d / num_requests;
  console.log('difference: ' + data.d);
  console.log('mean: ' + mean);
}

socket.emit('ping', {t: (new Date())});
