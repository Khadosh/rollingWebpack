import {request} from './requestHelper';
import './index.scss';

const title = document.getElementById('title');

title.innerText = 'Pelis de Mario';

// Aqui le decimos que busque peliculas que tengan el nombre Mario
const peli = "Mario"
const url = `https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json&s=${peli}`;

//La funcion request recibe 2 parametros, la url y el callback
request(url, function(response){
  // response es la variable que devuelve el archivo requestHelper en la linea 13
  const content = document.getElementById('resultado');
  content.innerHTML = '';
  
  // como response estipo string, tenemos que hacer JSON.parse para convertirlo en objeto y poder trabajar
  JSON.parse(response).Search.forEach(peli => {
    content.innerHTML += `
      <div class="peli">
        <h2>${peli.Title}</h2>
        <img src="${peli.Poster}" alt="${peli.Title}" />
      </div>
    `
  });
});
