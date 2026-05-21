import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="container">
      <h1>Ejercicio 2</h1>
      <p>
        Crea una página con un botón que diga "Contar clics" y un texto inicial
        que muestre "Clics: 0". Cada vez que se haga clic en el botón, el texto
        debe actualizarse para mostrar el número total de clics realizados.
      </p>

      <button onClick={handleClick}>Contar clicks</button>
      <p id="clicks-counter">Clicks = {count}</p>
    </div>
  );
}

export default App;
