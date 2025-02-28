# useLocalStorageSync Hook

Adding some comments for what will be covered in this hook:

1. A hook called uselocalStorage.tsx has been added that syncs local state to localstorage
2. It is built with typescript generics and hence will take any type of state as input
3. Takes a "key" and an "initialValue" argument and returns the current state and function to set the state.
4. The data persists on page reloads and server restarts

## Testing

1. Have tested on a simple number state : works
2. Have tested on a simple string state : works
3. Checking on an Array and Object state
