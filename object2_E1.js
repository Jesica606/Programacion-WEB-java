/*Ejercicio 1: 
¿Qué se imprimirá en la consola al ejecutar el siguiente código? y por que? 
*/ const person = {
  name: "John",
  age: 30,
  hobbies: ["reading", "music", "sports"],
};

const { weight = 70, height = 180 } = person;
console.log(weight, height);

// R: se imprimira 70 y 180 porque le dieron a las constantes ese valor por defecto
