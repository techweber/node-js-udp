var dgram = require('dgram');

var s = dgram.createSocket('udp4');

s.send(Buffer.from('Hello from Tech weber UDP Comm..'), 8080,'localhost');