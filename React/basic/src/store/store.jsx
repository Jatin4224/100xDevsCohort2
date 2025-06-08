// import { configureStore } from "@reduxjs/toolkit";
// import { counterSlice } from "./reducers/counterSlice";
// export const store = configureStore({
//   reducer: {
//     counter: counterSlice,
//   },
// });
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice"; // ✅ import reducer

export const store = configureStore({
  reducer: {
    counter: counterReducer, // ✅ use the reducer function
  },
});
