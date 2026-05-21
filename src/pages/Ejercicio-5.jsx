import { useState } from "react";

function Ejercicio5() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState("");

  function calculate(operation) {
    if (firstNumber === "" || secondNumber === "") {
      setResult("Ingresa ambos números");
      return;
    }

    const num1 = Number(firstNumber);
    const num2 = Number(secondNumber);

    let operationResult = 0;

    switch (operation) {
      case "sumar":
        operationResult = num1 + num2;
        break;

      case "restar":
        operationResult = num1 - num2;
        break;

      case "multiplicar":
        operationResult = num1 * num2;
        break;

      case "dividir":
        if (num2 === 0) {
          setResult("No se puede dividir entre 0");
          return;
        }

        operationResult = num1 / num2;
        break;
    }

    setResult(`Resultado: ${operationResult}`);
  }

  return (
    <div className="container">
      <h1>Calculadora</h1>
      <p>
        Crea una página con dos campos de entrada de números y cuatro botones:
        "Sumar", "Restar", "Multiplicar", y "Dividir". Al hacer clic en
        cualquiera de los botones, debe mostrarse el resultado de la operación
        en un área de texto o debajo de los botones. Asegúrate de validar los
        datos para evitar errores (como división por cero o entradas vacías).
      </p>

      <p>
        <input
          type="number"
          placeholder="Primer número"
          value={firstNumber}
          onChange={(event) => setFirstNumber(event.target.value)}
        />
      </p>

      <p>
        <input
          type="number"
          placeholder="Segundo número"
          value={secondNumber}
          onChange={(event) => setSecondNumber(event.target.value)}
        />
      </p>

      <div id="math-buttons">
        <button onClick={() => calculate("sumar")}>Sumar</button>
        <button onClick={() => calculate("restar")}>Restar</button>
        <button onClick={() => calculate("multiplicar")}>Multiplicar</button>
        <button onClick={() => calculate("dividir")}>Dividir</button>
      </div>

      <p id="result">{result}</p>
    </div>
  );
}

export default Ejercicio5;
