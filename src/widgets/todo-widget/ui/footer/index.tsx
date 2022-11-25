import { FC, useEffect, useState } from "react";
import { Col, Row, Typography, Button } from "antd";

import { countActive } from "./lib";
import { TodoFooterProps } from "./config/type";

const { Text } = Typography;

const TodoFooter: FC<TodoFooterProps> = ({ data, removeAllCompleted }) => {
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
      <Col span={4}>
        <Text>{activeCount ? `${activeCount} items left` : "All done"}</Text>
      </Col>
      <Col span={6}>col-8</Col>
      <Col span={7}>
        <Button block type="text" disabled={!isActive} onClick={removeAllCompleted}>
          Remove completed
        </Button>
      </Col>
    </Row>
  );
};

export default TodoFooter;
