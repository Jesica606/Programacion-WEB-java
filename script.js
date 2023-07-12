/*var variable = 'variable'; 
let variable = 'variable'; //reasignable 
const variable = 'variable'; // no reasignable 

//objetos


const objeto = { 
  id: '1', 
  name: 'UBA'
}

function myfunction() { // funcion tradicional 
  return variable 
}

// arrow function 
const myfunction = () => {
  return()
}
*/
const number1 = () => {
  let number = document.getElementById("first-number").value;
  return parseInt(number); //retornar el numero parseado a entero
  // parsear un entero a string es con toString(entero)
};

const number2 = () => {
  let number = document.getElementById("second-number").value;
  return parseInt(number);
};

const calculate = (event) => {
  event.preventDefault();
  let result = document.getElementById("result");

  if (result.textContent !== "") {
    result.textContent = "Resultado: ";
  }
  const sum = number1() + number2();
  result.textContent += sum;
};
