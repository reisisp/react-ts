import { List } from "antd";

import { useState } from "react";

import { ITodoItem } from "shared/api";

import { getFilteredData } from "entities/lib/get-filtered-data";

import TodoCardItem from "./ui/card-item";
import TodoFooter from "./ui/footer";
import TodoHeader from "./ui/header";

import { taskList } from "./config/task-list";
import styles from "./index.module.scss";

const TodoWidget = () => {
  const [data, setData] = useState<ITodoItem[]>(taskList);
  const [currentFilter, setCurrentFilter] = useState("all");

  const createNewItem = (newTitle: string) => {
    return { title: newTitle, completed: true };
  };

  const addItem = (item: string) => {
    setData([...data, createNewItem(item)]);
  };

  const removeAllCompleted = () => {
    setData(data.filter((el) => el.completed));
  };

  const changeFilter = (filter: string) => {
    setCurrentFilter(filter);
  };

  function toggleCompleted(title: string) {
    setData(data.map((el) => (el.title === title ? { ...el, completed: !el.completed } : el)));
  }

  const filteredData = getFilteredData(data, currentFilter);

  return (
    <List
      size="large"
      className={styles.itemList}
      header={<TodoHeader addItem={addItem} />}
      footer={
        <TodoFooter
          removeAllCompleted={removeAllCompleted}
          changeFilter={changeFilter}
          data={data}
          currentFilter={currentFilter}
        />
      }
      bordered
      dataSource={filteredData}
      renderItem={(item) => (
        <List.Item style={{ paddingTop: "10px", paddingBottom: "10px" }}>
          <TodoCardItem item={item} toggleCompleted={() => toggleCompleted(item.title)} />
        </List.Item>
      )}
    />
  );
};

export default TodoWidget;
