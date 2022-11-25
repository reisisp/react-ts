export interface FilterTodosProps {
  currentFilter: string;
  changeFilter: (filter: string) => void;
}
