import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const chars = text.replace(/\s/g, "").length;
  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <div className="container">
      <h1>Ejercicio 8</h1>
      <p>
        Crea una página con un campo de texto donde el usuario pueda escribir un
        párrafo. Muestra en tiempo real el número de caracteres y palabras
        ingresados debajo del campo. Palabras deben ser separadas por espacios,
        y los caracteres no deben incluir espacios ni saltos de línea.
      </p>

      <textarea
        id="paragraph"
        rows="5"
        cols="40"
        placeholder="Escribe tu texto aquí..."
        value={text}
        onChange={(event) => setText(event.target.value)}
      ></textarea>

      <p id="chars-counter">Caracteres: {chars}</p>

      <p id="words-counter">Palabras: {words}</p>
    </div>
  );
}

export default App;
