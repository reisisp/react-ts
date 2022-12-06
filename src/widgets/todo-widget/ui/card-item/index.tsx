import { FC } from "react";
import { Button, Typography } from "antd";

import { CloseOutlined } from "@ant-design/icons";

import styles from "./index.module.scss";

import { TodoCardItemProps } from "./config";

const { Text } = Typography;

const TodoCardItem: FC<TodoCardItemProps> = ({ item, toggleCompleted, removeItem }) => {
  return (
    <>
      <Button type="link" onClick={toggleCompleted} style={{ paddingLeft: 0 }}>
        <Text delete={!item.completed}>{item.title}</Text>
      </Button>
      <CloseOutlined onClick={removeItem} className={styles.btn} />
    </>
  );
};

export default TodoCardItem;
