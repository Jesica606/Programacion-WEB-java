/*Ejercicio 3:
Dada una lista de números, escribe una función en JavaScript que devuelva la suma de todos los números pares en la lista. La función deberá iterar sobre cada número en la lista, comprobar si el número es par y, si es así, añadirlo a la suma total. Usa el bucle que quieras para solucionarlo.*/
const numeros = [3, 6, 10];
function sumarPares(numb) {
  let pares = 0;
  for (let i = 0; i < numb.length; i++) {
    if (numb[i] % 2 == 0) {
      pares = pares + numb[i];
      //numeros = numeros.shift()
    }
  }
  return pares;
}
console.log(sumarPares(numeros));
