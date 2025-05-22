import { useState } from 'react';

interface TodoInputProps {
  addTodo: (text: string) => void;
}
export const TodoInput = ({ addTodo }: TodoInputProps) => {
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text !== '') {
      addTodo(text);
      setText('');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleAddTodo();
    }
  };
  return (
    <div className="input-container">
      <input
        type="text"
        className="input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Добавить задачу"
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleAddTodo}>Добавить</button>
    </div>
  );
};
