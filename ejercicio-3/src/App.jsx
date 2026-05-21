import { useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    if (inputText.trim() === "") return;
    setItems([...items, inputText]);
    setInputText("");
  }

  function deleteItem(indextoDelete) {
    const newItems = items.filter((_, index) => {
      return index !== indextoDelete;
    });

    setItems(newItems);
  }

  return (
    <div className="container">
      <h1>Ejercicio 3</h1>
      <p>
        Crea una página con un campo de texto, un botón que diga "Agregar", y
        una lista vacía debajo. Cuando el usuario escriba un texto y haga clic
        en "Agregar", el texto debe añadirse como un nuevo elemento de la lista.
        Añade un botón al lado de cada elemento para eliminarlo de la lista.
      </p>

      <input
        id="inputText"
        type="text"
        placeholder="Escribe algo..."
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      />
      <button onClick={addItem}>Agregar</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}

            <button onClick={() => deleteItem(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
