import useLocalStorage from "../../hooks/useLocalStorage";
import styles from "./text.module.css";
export default function TextInput() {
  const [text, setText] = useLocalStorage<string>({
    key: "text",
    initialValue: "This is the default Value",
  });
  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
