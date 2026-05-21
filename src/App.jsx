import { useState } from "react";
import "./App.css";
import Ejercicio1 from "./pages/Ejercicio-1";
import Ejercicio2 from "./pages/Ejercicio-2";
import Ejercicio3 from "./pages/Ejercicio-3";
import Ejercicio4 from "./pages/Ejercicio-4";
import Ejercicio5 from "./pages/Ejercicio-5";
import Ejercicio6 from "./pages/Ejercicio-6";
import Ejercicio7 from "./pages/Ejercicio-7";
import Ejercicio8 from "./pages/Ejercicio-8";
import Ejercicio9 from "./pages/Ejercicio-9";

function App() {
  const [page, setPage] = useState("home");

  if (page === "ej1")
    return (
      <>
        <button onClick={() => setPage("home")}>← Volver al índice</button>
        <Ejercicio1 />
      </>
    );

  if (page === "ej2")
    return (
      <>
        <button onClick={() => setPage("home")}>← Volver al índice</button>
        <Ejercicio2 />
      </>
    );

  if (page === "ej3")
    return (
      <>
        <button onClick={() => setPage("home")}>← Volver al índice</button>
        <Ejercicio3 />
      </>
    );

  if (page === "ej4")
    return (
      <>
        <button onClick={() => setPage("home")}>← Volver al índice</button>
        <Ejercicio4 />
      </>
    );

  if (page === "ej5")
    return (
      <>
        <button onClick={() => setPage("home")}>← Volver al índice</button>
        <Ejercicio5 />
      </>
    );

  if (page === "ej6")
    return (
      <>
        <button onClick={() => setPage("home")}>← Volver al índice</button>
        <Ejercicio6 />
      </>
    );

  if (page === "ej7")
    return (
      <>
        <button onClick={() => setPage("home")}>← Volver al índice</button>
        <Ejercicio7 />
      </>
    );

  if (page === "ej8")
    return (
      <>
        <button onClick={() => setPage("home")}>← Volver al índice</button>
        <Ejercicio8 />
      </>
    );

  if (page === "ej9")
    return (
      <>
        <button onClick={() => setPage("home")}>← Volver al índice</button>
        <Ejercicio9 />
      </>
    );

  return (
    <div>
      <h1>Ejercicios React</h1>

      <button onClick={() => setPage("ej1")}>Ejercicio 1</button>

      <button onClick={() => setPage("ej2")}>Ejercicio 2</button>

      <button onClick={() => setPage("ej3")}>Ejercicio 3</button>

      <button onClick={() => setPage("ej4")}>Ejercicio 4</button>

      <button onClick={() => setPage("ej5")}>Ejercicio 5</button>

      <button onClick={() => setPage("ej6")}>Ejercicio 6</button>

      <button onClick={() => setPage("ej7")}>Ejercicio 7</button>

      <button onClick={() => setPage("ej8")}>Ejercicio 8</button>

      <button onClick={() => setPage("ej9")}>Ejercicio 9</button>
    </div>
  );
}

export default App;
