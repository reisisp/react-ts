import { ITodoItem } from "shared/api";

export interface TodoFooterProps {
  removeAllCompleted: () => void;
  changeFilter: (filter: string) => void;
  data: ITodoItem[];
  currentFilter: string;
}
