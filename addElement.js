const addElement = (event) => {
  event.preventDefault(); // prevenir el comportamiento por defecto del formulario
  const inputElement = document.getElementById("input-element").value; //
  console.log(inputElement); // console.log es para mostrar por pantalla
  const ulElement = document.getElementById("ul-element");

  const listElement = document.createElement("li"); //creamos un elemento de lista <li>
  listElement.textContent = inputElement; //asignar a listElement.textContent valor obtenido de inputElement

  ulElement.append(listElement); //agregar a la lista <ul> el elemento listElement recien creado con el valor ya puesto.
};
