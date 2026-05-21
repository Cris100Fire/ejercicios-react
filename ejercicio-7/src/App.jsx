import { useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState("");
  const [result, setResult] = useState("");

  function generatePassword(passwordLength) {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "@#$%^&*()";
    const allChars = letters + numbers + symbols;

    let password = [];

    // Primera letra
    password.push(letters[Math.floor(Math.random() * letters.length)]);

    // Al menos un número
    password.push(numbers[Math.floor(Math.random() * numbers.length)]);

    // Al menos un símbolo
    password.push(symbols[Math.floor(Math.random() * symbols.length)]);

    // Completar el resto
    for (let i = password.length; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);

      password.push(allChars[randomIndex]);
    }

    // Mezclar excepto el primer carácter
    const firstChar = password[0];
    const rest = password.slice(1).sort(() => Math.random() - 0.5);

    return firstChar + rest.join("");
  }

  function handleGeneratePassword() {
    const passwordLength = Number(length);

    if (!passwordLength || passwordLength < 4) {
      setResult("La longitud debe ser mayor o igual a 4");
      return;
    }

    const password = generatePassword(passwordLength);
    setResult(`Tu contraseña es: ${password}`);
  }

  return (
    <div className="container">
      <h1>Ejercicio 7</h1>
      <p>
        Crea una página con un campo de entrada para especificar la longitud de
        una contraseña y un botón que diga “Generar contraseña”. Al hacer clic
        en el botón, se debe mostrar una contraseña generada aleatoriamente
        usando letras, números y caracteres especiales. Si la longitud es menor
        a 4 o el campo está vacío, muestra un mensaje de error indicando que la
        longitud debe ser mayor o igual a 4.
      </p>

      <p>
        <input
          type="number"
          placeholder="Longitud (mínimo 4)"
          value={length}
          onChange={(event) => setLength(event.target.value)}
        />
      </p>

      <button onClick={handleGeneratePassword}>Generar contraseña</button>

      <p>{result}</p>
    </div>
  );
}

export default App;
