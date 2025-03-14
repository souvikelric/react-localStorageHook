# useLocalStorageSync Hook

1. A hook called uselocalStorage.tsx has been added that syncs local state to localstorage
2. It is built with typescript generics and hence will take any type of state as input
3. Takes a "key" and an "initialValue" argument and returns the current state and function to set the state.
4. The data persists on page reloads and server restarts
5. Added 2 functions to removeItem and clearAllItems to clear storage
6. RemoveItem is a function to remove a particular item from the loca storage and set it back to the initial state. This function takes in a key as a string
7. ClearAllItems is a function that completely clears the local/session storage memory
