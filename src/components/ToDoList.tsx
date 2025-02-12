import React from "react";

type Props = {
  todoList: string[];
  deleteTodo: (deleteTodo: number) => void;
};

const ToDoList = (props: Props) => {
  return (
    <div className="todoList">
      <ul>
        {props.todoList.map((todo, index) => (
          <li key={index}>
            <p>{todo}</p>
            <button onClick={() => props.deleteTodo(index)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
