import {
  createSlice,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

import saga from "./saga";

import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    test: "abacus",
  },
  reducers: {
    fetchData: (state, action) => {
      return {
        // returns new state overriding above initial state
        todos: action.payload,
        test: "test",
      };
    },
    testData: (state, action) => {
      return {
        todos: action.payload,
        test: "test",
        truffle: "truffle",
      };
    },
  },
});

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    test: "abacus",
  },
  reducers: {
    fetchData: (state, action) => {
      return {
        todos: action.payload,
        test: "test",
      };
    },
  },
});

export const { fetchData, testData } = todoSlice.actions;
export const { fetchsData, testsData } = todosSlice.actions;

const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    todos: todosSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;
