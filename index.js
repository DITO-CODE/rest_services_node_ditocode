//importamos la libreria principal de este Ejemplo
var express = require('express');
//indicamos que express manejara las peticiones a la app
var app = express();
//agregamos la libreria para manejar el body de nuestras peticiones en json
var bodyParser  = require('body-parser');


//indicamos el puerto en el que levantaremos nuestra app
app.set('port', (4000));

//Utilizamos un middleware que parsea las peticiones
//con content-type json
app.use(bodyParser.json());


//indicamos la peticion principal para que nuestra pagina muestra algo al inicio
app.get('/',function(request,response){
    //request = peticion, response = respuesta
    response.send("HOLA MUNDO");
});

//peticion post estas peticiones se caracterizan
//por ocultar los parametros a diferencia de get
app.post('/peticionpost',function(request,response){

    //accedemos a los parametros con body
    console.log(request.body);
    var parametros = request.body;

    //modificamos el response para verificar que
    //estamos haciendo las cosas bien
    var respuesta = {
      respuesta : "esto es una prueba",
      otromensaje : "Abajo contiene nuestra peticion",
      data : request.body
    }

    response.send(respuesta);

});

//peticion get con parametros
app.get('/peticionparam/:param1/:param2',function(request,response){
      //mostramos los parametros en la consola
      console.log(request.params);
      var resultado = request.params.param1 + " " + request.params.param2;

      response.send(resultado);
});


//indicamos el escuchador de nuestra app
app.listen(app.get('port'), function() {
  console.log('Node app esta corriendo sobre el puerto', app.get('port'));
});
