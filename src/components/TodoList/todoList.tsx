import { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import styles from "./todoList.module.css";

type Item = {
  id: number;
  text: string;
};

const dummyItems: Item[] = [
  { id: 1, text: "First List Item" },
  { id: 2, text: "Second List Item" },
  { id: 3, text: "Third List Item" },
  { id: 4, text: "Fourth List Item" },
];

export default function TodoList() {
  const { value, setValue, resetItem } = useLocalStorage<Item[]>({
    key: "todos",
    initialValue: dummyItems,
  });

  const [input, setInput] = useState<string>("");

  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  const AddTodo = () => {
    if (input !== undefined) {
      const newId = value.length > 0 ? value[value.length - 1].id + 1 : 1;
      const newItem: Item = { id: newId, text: input };
      setValue((prev: Item[]) => [...prev, newItem]);
      setInput("");
    }
  };

  const deleteTodo = (id: number) => {
    const newItems: Item[] = value.filter((item) => item.id !== id);
    setValue(newItems);
  };

  return (
    <div className={styles.todolist}>
      {value.map((item: Item) => (
        <span className={styles.item} key={item.id}>
          {item.text}
          <button onClick={() => deleteTodo(item.id)} className={styles.delete}>
            Delete
          </button>
        </span>
      ))}
      <input
        value={input}
        onChange={handleChange}
        type="text"
        className={styles.todoInput}
      />
      <button onClick={AddTodo} className={styles.todoButton}>
        Add Todo
      </button>
      <button onClick={() => resetItem("todos")} className={styles.todoButton}>
        Reset Todos
      </button>
    </div>
  );
}
