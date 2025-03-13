import { useLocalStorage } from "../../../hooks/index";
import styles from "./Counter.module.css";
export default function Counter() {
  const { value, setValue: changeValue } = useLocalStorage<number>({
    key: "counter",
    initialValue: 0,
  });
  return (
    <div className={styles.counter}>
      <h2>Value</h2>
      <h3>{value}</h3>
      <button onClick={() => changeValue(value + 1)} className={styles.add}>
        Add
      </button>
      <button onClick={() => changeValue(value - 1)} className={styles.add}>
        Substract
      </button>
    </div>
  );
}
