const evaluacion = (cadena, numero) => {
  return numero > 10 ? cadena.toLocaleUpperCase() : cadena.toLocaleLowerCase();
};
console.log(evaluacion("Hello", 11));
console.log(evaluacion("Hola", 10));
