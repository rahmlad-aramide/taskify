import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import { AiTwotoneEdit, AiTwotoneDelete } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <>
      <div className="todos-headings">Your personal task tracker</div>
      <div className="todos">
     { todos.length >= 1 && <p className="placeholder align">
       
          {" "}
          <span>
            <AiTwotoneEdit /> <span>Edit</span>
          </span>{" "}
          <span>
            <AiTwotoneDelete /> <span>Delete</span>
          </span>{" "}
          <span>
            <MdOutlineDone /> <span>Done</span>
          </span>
        </p>}
        {todos?.map((todo) => (
          <SingleTodo
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
          />
        ))}
        <p className="placeholder">Your list of tasks will appear here</p>
        
      </div>
    </>
  );
};

export default TodoList;
