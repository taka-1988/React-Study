import Nav from "./components/Nav";
import Input from "./components/Input";
import ToDoList from "./components/ToDoList";
import { useState } from "react";

const App = () => {
  const [todo, setToDo] = useState<string>("");
  const [todoList, setToDoList] = useState<string[]>([]);

  const sendToDo = () => {
    if (todo) {
      setToDoList([...todoList, todo]);
    }
    setToDo("");
  };

  const deleteTodo = (index: number) => {
    const newToDoList = todoList.filter((_, i) => i !== index);
    setToDoList(newToDoList);
  };

  return (
    <div className="App">
      <Nav />
      <Input
        setToDo={setToDo}
        setToDoList={setToDoList}
        sendToDo={sendToDo}
        todo={todo}
      />
      <ToDoList todoList={todoList} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
