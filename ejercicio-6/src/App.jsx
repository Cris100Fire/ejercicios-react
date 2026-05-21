import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [time, setTime] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const hours = Math.floor(time / 3600)
    .toString()
    .padStart(2, "0");

  const minutes = Math.floor((time % 3600) / 60)
    .toString()
    .padStart(2, "0");

  const seconds = (time % 60).toString().padStart(2, "0");

  function startTimer() {
    setIsRunning(true);
  }

  function pauseTimer() {
    setIsRunning(false);
  }

  function resetTimer() {
    setTime(0);
    setIsRunning(false);
  }

  return (
    <div className="container">
      <h1>Ejercicio 6</h1>
      <p>
        Crea una página con un temporizador que comience en 00:00:00. Incluye
        tres botones: “Iniciar”, “Pausar” y “Reiniciar”. Al hacer clic en
        “Iniciar”, el temporizador debe comenzar a contar los segundos, minutos
        y horas. “Pausar” detiene el conteo pero mantiene el tiempo actual.
        “Reiniciar” pone el temporizador en 00:00:00.
      </p>

      <h3 id="timer">
        {hours}:{minutes}:{seconds}
      </h3>

      <section class="time-buttons">
        <button onClick={startTimer}>Iniciar</button>
        <button onClick={pauseTimer}>Pausar</button>
        <button onClick={resetTimer}>Reiniciar</button>
      </section>
    </div>
  );
}

export default App;
