import { FC } from "react";
import { ITodoItem } from "shared/api";

const TodoFooter: FC<{ data: ITodoItem[] }> = ({ data }) => {
  return <div>{data.length}</div>;
};

export default TodoFooter;
