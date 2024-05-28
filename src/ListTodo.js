import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sagaActions } from "./sagaActions";
export default function ListTodo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const test = useSelector((state) => state.todo.test);
  const truffle = useSelector((state) => state.todo.truffle);
  const tests = useSelector((state) => state.todos.test);

  return (
    <>
      <button onClick={() => dispatch({ type: sagaActions.FETCH_DATA_SAGA })}>
        GET DATA
      </button>
      {test && <h1>{test}</h1>}
      {truffle && <h1>{truffle}</h1>}
      {/* {tests && <h1>{tests}</h1>} */}

      <ul>
        {todos &&
          todos.map((todo) => {
            return <li key={todo.id}>{todo.title} </li>;
          })}
      </ul>
    </>
  );
}
