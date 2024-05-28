import logo from "./logo.svg";
import "./App.css";
import ListTodo from "./ListTodo";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ListTodo />
      </div>
    </Provider>
  );
}

export default App;
