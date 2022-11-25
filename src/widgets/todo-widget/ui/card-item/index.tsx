import { FC } from "react";
import { Button, Typography } from "antd";
import { ITodoItem } from "shared/api";

const { Text } = Typography;

const TodoCardItem: FC<{ item: ITodoItem; toggleCompleted: () => void }> = ({ item, toggleCompleted }) => {
  return (
    <Button type="link" onClick={toggleCompleted} style={{ paddingLeft: 0 }}>
      <Text delete={!item.completed}>{item.title}</Text>
    </Button>
  );
};

export default TodoCardItem;
