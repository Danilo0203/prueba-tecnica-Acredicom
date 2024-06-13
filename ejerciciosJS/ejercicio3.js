class Persona {
  nombre = "";
  edad = "";
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  getSaludar() {
    return `Hola, ${this.nombre}, tienes ${this.edad} años`;
  }
}

const danilo = new Persona("Danilo", 23);
danilo.getSaludar();
