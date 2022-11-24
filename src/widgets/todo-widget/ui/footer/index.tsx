import { FC } from "react";
import { ITodoItem } from "shared/api";

import { countActive } from "./lib";

const TodoFooter: FC<{ data: ITodoItem[] }> = ({ data }) => {
  const activeCount = countActive(data);
  return <div>{activeCount}</div>;
};

export default TodoFooter;
