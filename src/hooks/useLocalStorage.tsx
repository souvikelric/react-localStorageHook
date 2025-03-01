import { useEffect, useState } from "react";

type storageType = "local" | "session";

interface localStorageProps<T> {
  key: string;
  initialValue: T;
  storageType?: storageType;
}

function useLocalStorage<T>({
  key,
  initialValue,
  storageType = "local",
}: localStorageProps<T>) {
  const [value, setValue] = useState<T>(() => {
    const storage = storageType === "local" ? localStorage : sessionStorage;
    const storedValue = storage.getItem(key);
    const parsedValue = storedValue ? JSON.parse(storedValue) : initialValue;
    return parsedValue;
  });
  const storage = storageType === "local" ? localStorage : sessionStorage;
  useEffect(() => {
    storage.setItem(key, JSON.stringify(value));
  }, [value]);

  useEffect(() => {
    const handleStorageClear = () => {
      setValue(initialValue);
    };
    window.addEventListener("storageCleared", handleStorageClear);
    return () =>
      window.removeEventListener("storageCleared", handleStorageClear);
  });

  // will remove the item from localstorage and set the value back to the initial state
  const resetItem = (key: string) => {
    storage.removeItem(key);
    setValue(initialValue);
  };

  const clearAllItems = () => {
    storage.clear();
    window.dispatchEvent(new Event("storageCleared"));
  };

  return [value, setValue, resetItem, clearAllItems] as const;
}

export default useLocalStorage;
