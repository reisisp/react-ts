import { FC } from "react";
import { Button, Form, Input, InputNumber } from "antd";

import { TodoHeaderProps, ITodoForm } from "./config/type";

const TodoHeader: FC<TodoHeaderProps> = ({ addItem }) => {
  const [form] = Form.useForm();
  const onFinish = (values: ITodoForm) => {
    let time = values.minutes * 60;
    if (values.seconds) time += values.seconds;
    addItem(values.title, time);
    form.resetFields();
  };

  return (
    <Form
      form={form}
      name="addTodo"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
      style={{ display: "flex", gap: "10px" }}
    >
      <Form.Item
        name="title"
        initialValue=""
        validateFirst
        style={{ maxWidth: "100%", flexGrow: "1" }}
        rules={[
          { required: true, message: "Must not be empty" },
          {
            pattern: /^[^\s](|[a-zA-ZА-Яа-яЁё0-9_ ][a-zA-ZА-Яа-яЁё0-9_ ]*[^\s])$/,
            message: "Must be letters or numbers whithout whitespace at the beginning and end of the line",
          },
          { min: 3, message: "Must be at least 3 characters" },
          { max: 35, message: "Cannot be longer than 35 characters" },
        ]}
      >
        <Input autoFocus size="large" placeholder="What needs to be done..." />
      </Form.Item>
      <Form.Item
        style={{ maxWidth: "15%" }}
        name="minutes"
        initialValue=""
        rules={[
          { required: true, message: "" },
          { type: "number", message: "" },
        ]}
      >
        <InputNumber size="large" min={0} max={1000} placeholder="Min" />
      </Form.Item>
      <Form.Item style={{ maxWidth: "15%" }} name="seconds" initialValue="" rules={[{ type: "number", message: "" }]}>
        <InputNumber size="large" min={0} max={59} placeholder="Sec" />
      </Form.Item>
      <Form.Item hidden>
        <Button htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default TodoHeader;
