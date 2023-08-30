/*Ejercicio 5: 
Reciben una lista de números. Deben ordenar los números de menor a mayor según su valor absoluto. Eso quiere decir que los números negativos pierden el signo y se ordenan como si fueran positivos.*/
let numeros = [5, -10, -2, 25, 7];

function sortAbsoluteNumbers(numbers) {
  const arr = [];

  for (let i of numbers) {
    const obs = Math.abs(i);
    arr.push(obs); //para agregar
  }
  return arr.sort((a, b) => a - b);
}
console.log(sortAbsoluteNumbers(numeros));
