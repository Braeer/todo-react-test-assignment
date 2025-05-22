import type { Todo } from '../@types/todo';
import { useFilter } from '../hooks/useFilter';
import { TodoFilter } from './TodoFilter';
import { TodoItem } from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

export const TodoList = ({ todos, toggleTodo, removeTodo }: TodoListProps) => {
  const { filteredTodos, setFilter, activeFilter } = useFilter(todos);

  return (
    <div className="todo-list">
      <div>
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
        ))}
      </div>
      {todos.length > 0 && <TodoFilter setFilter={setFilter} activeFilter={activeFilter} />}
    </div>
  );
};
