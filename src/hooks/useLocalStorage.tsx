import { useEffect, useState } from "react";

interface localStorageProps<T> {
  key: string;
  initialValue: T;
}

function useLocalStorage<T>({ key, initialValue }: localStorageProps<T>) {
  const storedValue = localStorage.getItem(key);
  const parsedValue = storedValue ? JSON.parse(storedValue) : initialValue;
  const [value, setValue] = useState<T>(parsedValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue] as const;
}

export default useLocalStorage;
