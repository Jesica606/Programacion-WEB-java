const changeColor = (e) => {
  const color = document.getElementById("main-content");
  const letterColor = document.getElementById("letter-color");

  color.className = color.className === "" ? "main-color" : "";
  letterColor.className = letterColor.className === "" ? "letter-color" : "";

  const buttonText = document.getElementById("button-text");

  if (color.className === "main-color") {
    buttonText.innerText = "Cambiar a blanco"; //innerText texto de adentro del boton  -> condicion
  } else {
    buttonText.innerText = "Cambiar a azul"; //si no se cumple la condicion se produce el else
  }
};
