import { useState, useEffect } from "react";

function Ejercicio9() {
  const [todoName, setTodoName] = useState("");
  const [todos, setTodos] = useState([]);

  // Cargar tareas al iniciar la aplicación
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  // Guardar tareas cuando cambien
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(event) {
    event.preventDefault();

    if (todoName.trim() === "") return;

    const newTodo = {
      text: todoName,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTodoName("");
  }

  function toggleTodo(indexToToggle) {
    const updatedTodos = [...todos];

    updatedTodos[indexToToggle].completed =
      !updatedTodos[indexToToggle].completed;

    setTodos(updatedTodos);
  }

  function clearCompleted() {
    const activeTodos = todos.filter((todo) => !todo.completed);
    setTodos(activeTodos);
  }

  return (
    <div className="container">
      <h1>Lista de Tareas con Local Storage</h1>
      <p>
        Crea una aplicación de lista de tareas. Cada tarea debe incluir un texto
        y un checkbox para marcarla como completada. Las tareas se deben guardar
        en localStorage para que persistan incluso si la página se recarga. Debe
        incluir un botón para limpiar todas las tareas completadas y actualizar
        el localStorage.
      </p>

      <form onSubmit={addTodo}>
        <p>
          <label htmlFor="todoName" style={{ marginRight: "10px" }}>
            Nombre de la Tarea:
          </label>

          <input
            type="text"
            id="todoName"
            name="todoName"
            required
            value={todoName}
            onChange={(event) => setTodoName(event.target.value)}
          />
        </p>

        <button type="submit">Guardar</button>
      </form>

      <button onClick={clearCompleted} style={{ marginTop: "10px" }}>
        Limpiar tareas completadas
      </button>

      <h3>Lista de Tareas:</h3>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(index)}
            />

            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                marginLeft: "8px",
              }}
            >
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ejercicio9;
