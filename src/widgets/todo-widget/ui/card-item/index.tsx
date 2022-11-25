import { FC } from "react";
import { Typography } from "antd";
import { ITodoItem } from "shared/api";

const { Text } = Typography;

const TodoCardItem: FC<{ item: ITodoItem; toggleCompleted: () => void }> = ({ item, toggleCompleted }) => {
  return (
    <Text delete={!item.completed} onClick={toggleCompleted}>
      {item.title}
    </Text>
  );
};

export default TodoCardItem;
