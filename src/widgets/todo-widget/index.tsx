import { List } from "antd";
import TodoCardItem from "entities/todo-card-item";
import TodoFooter from "entities/todo-footer";
import TodoHeader from "entities/todo-header";
import { useState } from "react";

import { ITodoItem } from "shared/api";

import { taskList } from "./config/task-list";
import styles from "./index.module.scss";

const TodoWidget = () => {
  const [data, setData] = useState<ITodoItem[]>(taskList);

  const createNewItem = (newTitle: string) => {
    return { title: newTitle, completed: true };
  };

  const addItem = (item: string) => {
    setData([...data, createNewItem(item)]);
  };

  return (
    <List
      size="large"
      className={styles.itemList}
      header={<TodoHeader addItem={addItem} />}
      footer={<TodoFooter data={data} />}
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
