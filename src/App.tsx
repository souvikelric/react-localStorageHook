import { useState } from "react";
import "./App.css";
import Counter from "./components/counter/Counter";
import TextInput from "./components/textInput/text";
import TodoList from "./components/TodoList/todoList";
function App() {
  const [showList, setShowList] = useState(false);
  return (
    <>
      <div className="container">
        <div className="header">
          <h1>Custom Hook</h1>
          <button onClick={() => setShowList((prev) => !prev)}>
            Toggle Components
          </button>
        </div>
        {!showList ? (
          <div className="body">
            <Counter />
            <TextInput />
          </div>
        ) : (
          <div className="body">
            <TodoList />
          </div>
        )}
      </div>
    </>
  );
}
export default App;
