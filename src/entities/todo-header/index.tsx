import { FC, useState } from "react";
import { Input } from "antd";

const TodoHeader: FC = () => {
  const [task, setTask] = useState("");

  const changeTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  return (
    <Input
      autoFocus
      size="large"
      placeholder="What needs to be done..."
      value={task}
      onChange={changeTask}
      onPressEnter={() => console.log(task)}
    />
  );
};

export default TodoHeader;
