import { FC, useEffect, useState } from "react";
import { Col, Row, Button } from "antd";

import FilterTodos from "features/filter-todos";
import ActiveCountTodos from "features/active-count-todos";

import { getActiveCount } from "entities/lib/get-active-count";

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
        <Button block type="text" disabled={!isActive} onClick={removeAllCompleted}>
          Remove completed
        </Button>
      </Col>
    </Row>
  );
};

export default TodoFooter;
