# 📦 use-local-storage-sync

A lightweight React hook and helper utility for syncing `localStorage` or `sessionStorage` with React state. Useful for persisting state across sessions and sharing data across different parts of your app (including Context, Redux, or external state managers).

## ✨ Features

- 🔄 Sync React state with `localStorage` or `sessionStorage`
- ⚡ Automatically update storage on state change
- 🧹 Utilities to reset a specific key or clear all storage
- 🚀 Ready for use with Context, Redux, or other state tools
- ✅ SSR-safe utility helper for read/write access

---

## 📦 Installation

```bash
npm install use-local-storage-sync
# or
yarn add use-local-storage-sync
```

## 🔧 Usage

## useLocalStorage Hook

```javascript
import { useLocalStorage } from "use-local-storage-sync";

function Counter() {
  const { value, setValue, resetItem, clearAllItems } = useLocalStorage({
    key: "counter",
    initialValue: 0,
    storageType: "local", // or 'session'
  });

  return (
    <div>
      <h2>Counter: {value}</h2>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <button onClick={() => resetItem("counter")}>Reset</button>
      <button onClick={clearAllItems}>Clear All</button>
    </div>
  );
}
```

## 🔘 Selective Syncing

**Only persist specific fields from a larger object using the include option.**

```javascript
const { value, setValue } = useLocalStorage({
  key: "user",
  initialValue: { name: "", email: "", token: "" },
  include: ["name", "email"], // token is not stored in localStorage
});
This helps avoid storing sensitive data (like tokens) or reduce storage size
```

## ✅ Parameters

Name Type Default Description
key string — Storage key
initialValue T — Initial value if nothing is stored
storageType "local" or "session" "local" Which storage to use

## 🔁 Returns

```javascript
`const {
  value,           // The current stateful value
  setValue,        // Function to update the value
  resetItem,       // Removes the item from storage and resets state
  clearAllItems,   // Clears the entire storage and resets all keys using this hook
} = useLocalStorage(...)`;
```

**localStorageHelper Utility
Use this when you're outside React (e.g., Redux, Context, plain JS modules).**

```javascript
import { localStorageHelper } from "use-local-storage-sync";

// Read a value from localStorage
const user = localStorageHelper.get("user", { name: "Guest" });

// Write a value to localStorage
localStorageHelper.set("user", { name: "John Doe" });
```

## 🧪 Example with Context API

```javascript
const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const { value: user, setValue: setUser } = useLocalStorage({
    key: "user",
    initialValue: null,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
```

## 📄 License

MIT

## 🙌 Contributing

Found a bug or have a suggestion? Feel free to open an issue or submit a PR!

---

Let me know if you want to include badges, a changelog section, or an example project link.
