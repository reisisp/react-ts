import { FC } from "react";
import { Button, Typography } from "antd";

import { CloseOutlined } from "@ant-design/icons";

import RemoveTargetBtn from "features/remove-target-btn";

import styles from "./index.module.scss";

import { TodoCardItemProps } from "./config";

const { Text } = Typography;

const TodoCardItem: FC<TodoCardItemProps> = ({ item, toggleCompleted, removeItem }) => {
  return (
    <>
      <Button type="link" onClick={toggleCompleted} style={{ paddingLeft: 0 }}>
        <Text delete={!item.completed}>{item.title}</Text>
      </Button>
      <RemoveTargetBtn confirm={removeItem} itemLabel={item.title}>
        <CloseOutlined className={styles.btn} />
      </RemoveTargetBtn>
    </>
  );
};

export default TodoCardItem;
