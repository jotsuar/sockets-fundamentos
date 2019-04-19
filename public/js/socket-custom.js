var socket = io();

socket.on('connect',function(){
    console.log("Conectado")
})
socket.on('disconnect', function(){
    console.log("Conexión perdida")
});

socket.emit('enviarMensaje',{
    usuario: 'Jhonatan Suarez',
    mensaje: 'Hola Mundo'
},function(data){
    console.log(data)
})

socket.on('enviarMensaje',function(mensaje){
    console.log(mensaje)
})