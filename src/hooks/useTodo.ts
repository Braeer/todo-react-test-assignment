import type { Todo } from '../@types/todo';
import { Store } from '../store/state-manager';
import { useStore } from '../store/useStore';

type TodosState = {
  todos: Todo[];
};

const initialState: TodosState = {
  todos: [],
};

const todosStore = new Store(initialState);

export const useTodo = () => {
  const todosState = useStore(todosStore);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    todosStore.setState({ todos: [...todosState.todos, newTodo] });
  };

  const toggleTodo = (id: number) => {
    const updatedTodos = todosState.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    todosStore.setState({ todos: updatedTodos });
  };

  const removeTodo = (id: number) => {
    const updatedTodos = todosState.todos.filter((todo) => todo.id !== id);
    todosStore.setState({ todos: updatedTodos });
  };

  return {
    todos: todosState.todos,
    addTodo,
    toggleTodo,
    removeTodo,
  };
};
