import { useState } from "react";
import "./Input.scss";
import "./ToDoList.scss";

type Props = {
  setToDo: React.Dispatch<React.SetStateAction<string>>;
  setToDoList: React.Dispatch<React.SetStateAction<string[]>>;
  sendToDo: () => void;
  todo: string;
};

const Input = (props: Props) => {
  return (
    <div className="input">
      <input
        type="text"
        placeholder="ToDoを入力してください。"
        onChange={(e) => props.setToDo(e.target.value)}
        value={props.todo}
      />
      <button className="sendButton" onClick={() => props.sendToDo()}>
        送信
      </button>
    </div>
  );
};

export default Input;
