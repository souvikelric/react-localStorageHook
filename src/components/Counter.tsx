import { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import styles from "./Counter.module.css";
export default function Counter() {
  const [value, setValue] = useLocalStorage<number>({
    key: "counter",
    initialValue: 0,
  });
  useEffect(() => {
    console.log(value);
    console.log(setValue);
  });
  return (
    <div className={styles.counter}>
      <h2>Value {value}</h2>
      <div></div>
      <button className={styles.add}>Add</button>
      <button className={styles.add}>Substract</button>
    </div>
  );
}
