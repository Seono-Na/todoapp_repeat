import React, { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: "123", text: "정리하기", status: "active" },
    { id: "124", text: "개발하기", status: "active" },
  ]);
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li>todo.text</li>
        ))}
      </ul>
    </div>
  );
}
