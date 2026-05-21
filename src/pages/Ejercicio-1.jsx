import { useState, useEffect } from "react";

function Ejercicio1() {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [backgroundColor]);

  function changeColor() {
    const randomColor =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");

    setBackgroundColor(randomColor);
  }

  return (
    <div className="container">
      <h1>Cambiador de Color de Fondo</h1>
      <p>
        Crea una página web con un botón que diga "Cambiar color". Cada vez que
        el usuario haga clic en el botón, el color de fondo de la página debe
        cambiar a un color aleatorio.
      </p>
      <button onClick={changeColor}>Cambiar color de fondo</button>
    </div>
  );
}

export default Ejercicio1;
