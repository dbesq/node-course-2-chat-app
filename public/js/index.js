var socket = io();

socket.on('connect', function (){
  console.log("Connected to server");

  socket.emit('createMessage', {
    to: 'jen@example.com',
    from: 'notJen@example.com',
    text: 'Hey. This is Andrew'
  });
});

socket.on('disconnect', function (){
  console.log("Disconnected from server");
});

socket.on('newMessage', function (message){
  console.log("New Message", message);
});
