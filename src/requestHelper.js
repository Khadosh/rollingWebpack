export function request(url, callback) {
  var data = null;

  //Creamos el objeto request
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = false;

  //Le decimos que hacer cuando tenga actualizaciones (esta es la parte asíncrona)
  xhr.addEventListener("readystatechange", function() {
    console.log('pepito');
    if (this.readyState === this.DONE) {
      // Aqui ejecutamos el callback y le inyectamos el valor que devuelve el servidor
      callback(this.responseText);
    }
  });

  // Configuramos a que url va a hacer la peticion (llega por parametro)
  xhr.open(
    "GET",
    url
  );

  // Hacemos set de requests para los permisos de la API
  xhr.setRequestHeader(
    "x-rapidapi-host",
    "movie-database-imdb-alternative.p.rapidapi.com"
  );
  xhr.setRequestHeader(
    "x-rapidapi-key",
    "fb3009da76mshf35d0a642dad0ddp160f52jsna47d2842ea36"
  );
  
  // Enviamos nuestro request al servidor
  xhr.send(data);
}
