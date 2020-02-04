class Auto {
  constructor(marca, modelo, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.encendido = false;
  }

  encender = () => {
    this.encendido = true;
  }

  apagar = () => {
    this.encendido = false;
  }

  estaEncendido = () => this.encendido;
};

export default Auto;