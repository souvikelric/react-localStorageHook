import { useState, useEffect } from "react";

interface localStorageProps<T> {
  key: string;
  initialValue: T;
}

function useLocalStorage<T>({ key, initialValue }: localStorageProps<T>) {
  const storedValue = localStorage.getItem(key);
  const parsedValue = storedValue ? JSON.parse(storedValue) : initialValue;
  const [value, setValue] = useState<T>(parsedValue);

  useEffect(() => {
    if (value !== undefined) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
