import Auto from './classes/Auto';
import {apagar, encender, resultado} from './elementos'; 

const auto = new Auto('Chevrolet', 'Corsa', 'verde');

encender.addEventListener('click', () => {
  auto.encender();
  auto.estaEncendio(resultado);
});

apagar.addEventListener('click', () => {
  auto.apagar();
  auto.estaEncendio(resultado);
});