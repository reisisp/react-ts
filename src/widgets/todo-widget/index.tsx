import { List } from "antd";
import TodoCardItem from "entities/todo-card-item";
import { useState } from "react";
import CenteredContainer from "shared/centered-container";

import { taskList } from "./config/task-list";
import { ITodoItems } from "./config/task-list-type";
import styles from "./index.module.scss";

const TodoWidget = () => {
  const [data] = useState<ITodoItems[]>(taskList);
  return (
    <CenteredContainer>
      <List
        size="large"
        className={styles.itemList}
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <TodoCardItem item={item} />
          </List.Item>
        )}
      />
    </CenteredContainer>
  );
};

export default TodoWidget;
