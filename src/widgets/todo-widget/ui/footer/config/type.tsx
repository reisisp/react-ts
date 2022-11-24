import { ITodoItem } from "shared/api";

export interface TodoFooterProps {
  removeAllCompleted: () => void;
  data: ITodoItem[];
}
