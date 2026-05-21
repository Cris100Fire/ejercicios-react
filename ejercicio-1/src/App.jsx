import { useState } from "react";
import "./App.css";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  function changeColor() {
    const randomColor =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");

    setBackgroundColor(randomColor);
  }

  return (
    <div
      className="container"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <h1>Ejercicio 1</h1>
      <p>
        Crea una página web con un botón que diga "Cambiar color". Cada vez que
        el usuario haga clic en el botón, el color de fondo de la página debe
        cambiar a un color aleatorio.
      </p>
      <button onClick={changeColor}>Cambiar color de fondo</button>
    </div>
  );
}

export default App;
