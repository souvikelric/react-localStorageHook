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
  const [value, _setValue] = useLocalStorage<Item[]>({
    key: "todos",
    initialValue: dummyItems,
  });
  return (
    <div className={styles.todolist}>
      {value.map((item: Item) => (
        <span className={styles.item} key={item.id}>
          {item.text}
        </span>
      ))}
    </div>
  );
}
