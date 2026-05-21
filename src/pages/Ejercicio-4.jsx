import { useState } from "react";

function Ejercicio4() {
  const [searchText, setSearchText] = useState("");

  const items = ["perro", "gato", "gallina", "colibri", "pez", "erizo"];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <div className="container">
      <h1>Filtro de Búsqueda en Tiempo Real</h1>
      <p>
        Crea una página con un campo de texto y una lista predefinida de
        elementos. Mientras el usuario escribe en el campo, la lista debe
        actualizarse en tiempo real para mostrar solo los elementos que
        contienen el texto escrito.
      </p>

      <input
        type="text"
        id="inputText"
        placeholder="Busca algo..."
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Ejercicio4;
