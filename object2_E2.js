/*Ejercicio 2: 
2- ¿Qué se imprimirá en la consola al ejecutar el siguiente código? Y por que?
*/
const person = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'music', 'sports']
  }
            
  const { age: personAge } = person
  console.log(age)

//R: personAge es una variable no definida, y al cambiar el valor de personAge a age va a retornar age con el valor de personAge