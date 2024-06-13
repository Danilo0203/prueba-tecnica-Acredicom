class Carro {
  marca = "";
  modelo = "";
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }
  mostrar_informacion() {
    return `La marca del carro es ${this.marca} y el modelo es ${this.modelo}`;
  }
}

const mazda = new Carro("Mazda", 2007);
mazda.mostrar_informacion();
