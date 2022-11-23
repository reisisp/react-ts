import { List } from "antd";
import TodoCardItem from "entities/todo-card-item";
import TodoHeader from "entities/todo-header";
import { useState } from "react";

import { taskList } from "./config/task-list";
import { ITodoItems } from "./config/task-list-type";
import styles from "./index.module.scss";

const TodoWidget = () => {
  const [data] = useState<ITodoItems[]>(taskList);
  return (
    <List
      size="large"
      className={styles.itemList}
      header={<TodoHeader />}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <TodoCardItem item={item} />
        </List.Item>
      )}
    />
  );
};

export default TodoWidget;
