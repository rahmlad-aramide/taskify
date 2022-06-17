import React, { useState, useEffect, useRef } from "react";
import { Todo } from "../model";
import { AiTwotoneEdit, AiTwotoneDelete } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
import "./style.css";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
const SingleTodo: React.FC<Props> = ({ todo, setTodos, todos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form
      className='single-todo'
      onSubmit={(e) => handleEdit(e, todo.id)}
    >
      {
      edit ? (
        <input
          value={editTodo}
          ref={inputRef}
          className="single-todo-text"
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) :
       todo.isDone ? (
        <s className="single-todo-text wrap">{todo.todo}</s>
      ) : (
        <span className="single-todo-text wrap">{todo.todo}</span>
      )}

      <div className="single-todo-icons">
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiTwotoneEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiTwotoneDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdOutlineDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
