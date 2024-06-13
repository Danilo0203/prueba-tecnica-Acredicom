const mayorNum = (...nums) => {
  const [a, b] = nums;

  if (nums.length === 0) return new Error("Ingrese dos numeros");
  if (nums.length > 2) return new Error("Ingrese solo dos numeros");
  if (typeof a !== "number" || typeof b !== "number")
    return new Error("Ingrese un dato de tipo number");
  const [numMayor] = nums.sort((a, b) => b - a);
  return numMayor;
};

console.log(mayorNum(2, "3"));
console.log(mayorNum("2", 3));
console.log(mayorNum(20, 300));
console.log(mayorNum(20, 300, 5));
console.log(mayorNum());
