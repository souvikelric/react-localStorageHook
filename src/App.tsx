import "./App.css";
import Counter from "./components/counter/Counter";
import TextInput from "./components/textInput/text";
function App() {
  return (
    <>
      <div className="container">
        <h1>Vite + React</h1>
        <Counter />
        <TextInput />
      </div>
    </>
  );
}
export default App;
