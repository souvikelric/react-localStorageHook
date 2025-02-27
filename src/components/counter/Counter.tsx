import { useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import styles from "./Counter.module.css";
export default function Counter() {
  const [value, changeValue] = useLocalStorage<number>({
    key: "counter",
    initialValue: 0,
  });
  useEffect(() => {
    console.log(value);
    // console.log(setValue);
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
