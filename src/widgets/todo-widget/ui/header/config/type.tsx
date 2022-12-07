export interface TodoHeaderProps {
  addItem: (itemName: string, itemTime: number) => void;
}

export interface ITodoForm {
  title: string;
  minutes: number;
  seconds: number | "";
}
