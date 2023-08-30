/*Ejercicio 4: 
Crear una función que reciba un array de palabras y devuelva true si todas las palabras terminan con la letra "a" y false si al menos una palabra no termina con la letra "a".
*/
const palabras = ["papa", "fideo", "milanesa"];
function terminanEnA(words) {
  const terminanA = words.every((palabra) => palabra.endsWith("a"));

  console.log(terminanA);
}
terminanEnA(palabras);
