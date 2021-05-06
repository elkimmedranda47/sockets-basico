const { io } = require('../server');


io.on('connection', (client) => {

    console.log('Usuario conectado');

    //Enviar mensaje al cliente
    client.emit('mensajeSever', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion',
    });


    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    })

    //Escuchar cliente
    client.on('mensajeSever', (data, callback) => {
        console.log(data);
        client.broadcast.emit('mensajeSever', data)


        //client.broadcast.emit('enviarMensaje', data)

        /*          if (mensaje.usuario) {
                      callback({
                          resp: 'Todo salio bien'
                      });

                  } else {
                      callback({
                          resp: 'Todo salio Mal!!!'
                      });
                  }

        */
    });



});