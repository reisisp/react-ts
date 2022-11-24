import { FC } from "react";
import { ITodoItems } from "widgets/todo-widget/config/task-list-type";

const TodoFooter: FC<{ data: ITodoItems[] }> = ({ data }) => {
  return <div>{data.length}</div>;
};

export default TodoFooter;
