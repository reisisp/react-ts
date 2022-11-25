import { FC } from "react";
import { Typography } from "antd";

const { Text } = Typography;

const ActiveCountTodos: FC<{ count: number }> = ({ count }) => {
  return <Text>{count ? `${count} items left` : "All done"}</Text>;
};

export default ActiveCountTodos;
