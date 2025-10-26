import { Provider as ReduxProvider } from "react-redux";

import { AddTodo } from "./components/AddTodo";
import { store } from "./store";
import { TodoList } from "./components/todoList";

export default function App() {
  return (
    <div>
      <ReduxProvider store={store}>
        <TodoList />
        <AddTodo />
      </ReduxProvider>
    </div>
  );
}
