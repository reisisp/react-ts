import { FC } from "react";
import { Button, Form, Input } from "antd";

import { TodoHeaderProps, ITodoForm } from "./config/type";

const TodoHeader: FC<TodoHeaderProps> = ({ addItem }) => {
  const [form] = Form.useForm();
  const onFinish = (values: ITodoForm) => {
    addItem(values.itemLabel);
    form.resetFields();
  };

  return (
    <Form form={form} name="addTodo" initialValues={{ remember: true }} onFinish={onFinish} autoComplete="off">
      <Form.Item
        name="itemLabel"
        initialValue=""
        validateFirst
        rules={[
          { required: true, whitespace: true, message: "Must not be empty" },
          {
            pattern: /^[^\s](|[a-zA-ZА-Яа-яЁё0-9_ ][a-zA-ZА-Яа-яЁё0-9_ ]*[^\s])$/,
            message: "Must be letters or numbers whithout whitespace characters at the beginning and end of the line",
          },
          { min: 3, message: "Must be at least 3 characters" },
          { max: 35, message: "Cannot be longer than 35 characters" },
        ]}
      >
        <Input autoFocus size="large" placeholder="What needs to be done..." />
      </Form.Item>
      <Form.Item hidden>
        <Button htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default TodoHeader;
