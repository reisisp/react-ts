import { FC } from "react";

import { TodoCardItemProps } from "./config/card-item-type";

const TodoCardItem: FC<TodoCardItemProps> = ({ item }) => {
  return <span>{item.itemLabel}</span>;
};

export default TodoCardItem;
