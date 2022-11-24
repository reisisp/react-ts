import { List } from "antd";

import { useState } from "react";

import { ITodoItem } from "shared/api";

import TodoCardItem from "./ui/card-item";
import TodoFooter from "./ui/footer";
import TodoHeader from "./ui/header";

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

  const removeAllCompleted = () => {
    setData(data.filter((el) => el.completed));
  };

  return (
    <List
      size="large"
      className={styles.itemList}
      header={<TodoHeader addItem={addItem} />}
      footer={<TodoFooter removeAllCompleted={removeAllCompleted} data={data} />}
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
