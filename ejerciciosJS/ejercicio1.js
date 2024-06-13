const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const suma = (num) => {
  let validacion = false;
  num.forEach((n) => {
    if (typeof n !== "number") {
      validacion = true;
    }
  });
  if (validacion) return "Ingrese un dato tipo number";
  const initValue = 0;
  return num.reduce(
    (acumulador, valorActual) => acumulador + valorActual,
    initValue,
  );
};
console.log(suma(numeros));
