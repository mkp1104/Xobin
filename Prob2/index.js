var app = require('express')();

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',function(req,res){
res.sendFile(__dirname + '/index.html');
});
io.on('connection', function(socket){
console.log('a user connected');

socket.on('Chat Message',function(msg){
io.broadcast.emit('Hi');
io.emit('Chat Message', msg);
console.log('message: ' + msg);
});
socket.on('disconnect',function(){
console.log('user disconnected');
});
});

http.listen(8088,function(){
console.log('port listening at: 8088');
})