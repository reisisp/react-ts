import { FC } from "react";
import { Col, Row } from "antd";

import { countActive } from "./lib";
import { TodoFooterProps } from "./config/type";

const TodoFooter: FC<TodoFooterProps> = ({ data, removeAllCompleted }) => {
  const activeCount = countActive(data);
  return (
    <Row justify="space-between">
      <Col span={4}>{activeCount ? `${activeCount} items left` : "All done"}</Col>
      <Col span={4}>col-8</Col>
      <Col span={4} onClick={removeAllCompleted}>
        col-8
      </Col>
    </Row>
  );
};

export default TodoFooter;
