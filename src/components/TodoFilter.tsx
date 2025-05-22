import type { FilterType } from '../@types/todo';

interface TodoFilterProps {
  setFilter: (filter: FilterType) => void;
  activeFilter: FilterType;
}

export const TodoFilter = ({ setFilter, activeFilter }: TodoFilterProps) => {
  return (
    <div className="filter-container">
      <button
        onClick={() => {
          setFilter('all');
        }}
        className={activeFilter === 'all' ? 'active' : ''}>
        Все
      </button>
      <button
        onClick={() => {
          setFilter('active');
        }}
        className={activeFilter === 'active' ? 'active' : ''}>
        Активные
      </button>
      <button
        onClick={() => {
          setFilter('completed');
        }}
        className={activeFilter === 'completed' ? 'active' : ''}>
        Завершенные
      </button>
    </div>
  );
};
