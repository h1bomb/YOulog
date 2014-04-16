var dgram = require('dgram');

var sock = dgram.createSocket('udp4');

sock.bind(5000, '172.16.13.84');
sock.on('message', function(msg)
{
   console.log(msg.toString());
});
