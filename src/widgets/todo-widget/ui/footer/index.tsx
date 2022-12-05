import { FC, useEffect, useState } from "react";
import { Col, Row } from "antd";

import { getActiveCount } from "entities/lib/get-active-count";

import RemoveAllBtn from "features/remove-all-btn";
import FilterTodos from "features/filter-todos";
import ActiveCountTodos from "features/active-count-todos";

import { TodoFooterProps } from "./config/type";

const TodoFooter: FC<TodoFooterProps> = ({ data, currentFilter, removeAllCompleted, changeFilter }) => {
  const [isActive, setIsActive] = useState(true);

  const activeCount = getActiveCount(data);

  useEffect(() => {
    if (data.length === activeCount) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }, [activeCount, data]);
  return (
    <Row justify="space-between" align="middle">
      <Col>
        <ActiveCountTodos count={activeCount} />
      </Col>
      <Col>
        <FilterTodos currentFilter={currentFilter} changeFilter={changeFilter} />
      </Col>
      <Col>
        <RemoveAllBtn isActive={!isActive} confirm={removeAllCompleted}>
          Remove completed
        </RemoveAllBtn>
      </Col>
    </Row>
  );
};

export default TodoFooter;
