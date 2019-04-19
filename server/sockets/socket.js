
const {io} = require('../server')

io.on('connection',(client)=>{
    console.log("Usuario conectado")
    client.on('disconnect',()=>{
        console.log("Cliente desconectado")
    })
    client.on('enviarMensaje',(data,callback)=>{
        console.log(data)

        client.broadcast.emit('enviarMensaje',data)

        // if(data.usuario){
        //     callback({
        //         resp: 'Mensaje recibido correctamente'
        //     })
        // }else{
        //     callback({
        //         resp: 'Mensaje no recibido'
        //     })
        // }
    })
    client.emit('enviarMensaje',{
        usuario: 'Administrador',
        mensaje: 'Bienvendos'
    })
})