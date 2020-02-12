class Auto {
  constructor(marca, modelo, color) {
    this.marca = marca;
    this.color = color;
    this.modelo = modelo;
    this.encendido = false;
  }

  encender () {
    this.encendido = true;
  }

  apagar () {
    this.encendido = false;
  }

  estaEncendio (target) {
    target.innerHTML = `el auto esta ${this.encendido ? 'encendido' : 'apagado'}`;
  }
}

export default Auto;