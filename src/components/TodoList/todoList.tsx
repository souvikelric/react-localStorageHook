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
  const [value, setValue] = useLocalStorage<Item[]>({
    key: "todos",
    initialValue: dummyItems,
  });

  const [input, setInput] = useState();

  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  const AddTodo = () => {
    if (input !== undefined) {
      const newItem: Item = { id: value[value.length - 1].id, text: input };
      setValue((prev: Item[]) => [...prev, newItem]);
    }
  };
  return (
    <div className={styles.todolist}>
      {value.map((item: Item) => (
        <span className={styles.item} key={item.id}>
          {item.text}
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
    </div>
  );
}
