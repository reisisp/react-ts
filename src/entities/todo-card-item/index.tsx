import { FC } from "react";
import { ITodoItem } from "shared/api";

const TodoCardItem: FC<{ item: ITodoItem }> = ({ item }) => {
  return <span>{item.title}</span>;
};

export default TodoCardItem;
