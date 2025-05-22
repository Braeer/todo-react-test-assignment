import type { Todo } from '../@types/todo';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

export const TodoItem = ({ todo, toggleTodo, removeTodo }: TodoItemProps) => {
  return (
    <div key={todo.id} className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        className="todo-item-checkbox"
        onChange={() => {
          toggleTodo(todo.id);
        }}
      />
      <span
        className="todo-item-span"
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button
        onClick={() => {
          removeTodo(todo.id);
        }}
        className="todo-item-remove">
        Удалить
      </button>
    </div>
  );
};
