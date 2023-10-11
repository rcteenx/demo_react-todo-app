import { text } from "node:stream/consumers";
import React, { useRef } from "react";

import "./NewTodo.css";

interface NewTodoProps {
  onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHAndler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHAndler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef}></input>
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
