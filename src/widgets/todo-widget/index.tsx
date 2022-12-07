import { Empty, List } from "antd";

import { useState } from "react";

import { ITodoItem } from "shared/api";

import { getFilteredData } from "entities/lib/get-filtered-data";

import { v4 as uuidv4 } from "uuid";

import TodoCardItem from "./ui/card-item";
import TodoFooter from "./ui/footer";
import TodoHeader from "./ui/header";

import { taskList } from "./config/task-list";

import styles from "./index.module.scss";

const TodoWidget = () => {
  const [data, setData] = useState<ITodoItem[]>(taskList);
  const [currentFilter, setCurrentFilter] = useState("all");

  const createNewItem = (title: string, timerVal: number): ITodoItem => {
    return { id: uuidv4(), title, completed: true, creationDate: Date.now(), timerVal };
  };

  const addItem = (itemName: string, itemTime: number) => {
    setData([...data, createNewItem(itemName, itemTime)]);
  };

  const removeAllCompleted = () => {
    setData(data.filter((el) => el.completed));
  };

  const changeFilter = (filter: string) => {
    setCurrentFilter(filter);
  };

  const updateItem = (id: string, value: number | string, key: string) => {
    setData(data.map((el) => (el.id === id ? { ...el, [key]: value } : el)));
  };

  function removeItem(id: string) {
    const idx = data.findIndex((el) => el.id === id);
    if (idx >= 0) setData([...data.slice(0, idx), ...data.slice(idx + 1, data.length + 1)]);
  }

  function toggleCompleted(id: string) {
    setData(data.map((el) => (el.id === id ? { ...el, completed: !el.completed } : el)));
  }

  const filteredData = getFilteredData(data, currentFilter);
  const filteredCount = filteredData.length;
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
    >
      <div className={styles.itemList__container}>
        {!filteredCount && <Empty />}
        {filteredData.map((item) => (
          <List.Item key={item.id} className={styles.itemList__item}>
            <TodoCardItem
              item={item}
              toggleCompleted={() => toggleCompleted(item.id)}
              removeItem={() => removeItem(item.id)}
              updateItem={updateItem}
            />
          </List.Item>
        ))}
      </div>
    </List>
  );
};

export default TodoWidget;
