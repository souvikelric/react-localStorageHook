import { useState } from "react";

interface localStorageProps<T> {
  key: string;
  initialValue: T;
}

function useLocalStorage<T>({ key, initialValue }: localStorageProps<T>) {
  const storedValue = localStorage.getItem(key);
  const parsedValue = storedValue ? JSON.parse(storedValue) : initialValue;
  const [value, setValue] = useState<T>(parsedValue);

  const changeValue = (val: T) => {
    setValue(val);
    localStorage.setItem(key, JSON.stringify(val));
  };

  return [value, changeValue] as const;
}

export default useLocalStorage;
