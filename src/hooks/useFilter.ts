import type { FilterType, FilterTypeObject, Todo } from '../@types/todo';
import { Store } from '../store/state-manager';
import { useStore } from '../store/useStore';

const initialState: FilterTypeObject = {
  filter: 'all',
};

const filterTodo = new Store(initialState);

export const useFilter = (todos: Todo[]) => {
  const setFilter = (filter: FilterType) => {
    filterTodo.setState({ filter });
  };

  const filterState = useStore(filterTodo);

  const filteredTodos = todos.filter((todo) => {
    if (filterState.filter === 'completed') {
      return todo.completed;
    } else if (filterState.filter === 'active') {
      return !todo.completed;
    }
    return true;
  });

  return {
    filteredTodos,
    setFilter,
    activeFilter: filterState.filter,
  };
};
