// import { createStore } from "redux";
// import { combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import reducers from "./reducers";

// const rootReducer = combineReducers({
//   contact: reducers,
// });

// const store = createStore(rootReducer, composeWithDevTools());
// // можно передать пред. состояние
// // const store = createStore(reducer, {prev.state});

// export default store;
/*-------------------------------------------------------------------------------- */

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/reducers";

export const store = configureStore({
  reducer: counterReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
