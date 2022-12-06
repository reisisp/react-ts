import { ITodoItem } from "shared/api";

export interface TodoCardItemProps {
  item: ITodoItem;
  toggleCompleted: () => void;
  removeItem: () => void;
  updateItem: (id: string, label: string) => void;
}
