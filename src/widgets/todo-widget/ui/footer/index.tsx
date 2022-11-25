import { FC, useEffect, useState } from "react";
import { Col, Row, Typography, Button } from "antd";

import FilterTodos from "features/filter-todos";

import { countActive } from "./lib";
import { TodoFooterProps } from "./config/type";

const { Text } = Typography;

const TodoFooter: FC<TodoFooterProps> = ({ data, currentFilter, removeAllCompleted, changeFilter }) => {
  const [isActive, setIsActive] = useState(true);

  const activeCount = countActive(data);

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
        <Text>{activeCount ? `${activeCount} items left` : "All done"}</Text>
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
