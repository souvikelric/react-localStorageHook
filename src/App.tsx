import "./App.css";
import Counter from "./components/counter/Counter";
import TextInput from "./components/textInput/text";
import TodoList from "./components/TodoList/todoList";
function App() {
  return (
    <>
      <div className="container">
        <h1>Custom Hook</h1>
        <Counter />
        <TextInput />
        <TodoList />
      </div>
    </>
  );
}
export default App;
