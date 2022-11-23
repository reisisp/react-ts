import { FC } from "react";
import { Button, Form, Input } from "antd";

import { TodoHeaderProps, ITodoForm } from "./type";

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
        rules={[
          { required: true, message: "Must not be empty" },
          { whitespace: true, message: "Must not be whitespaces" },
          { min: 3, message: "Must be at least 3 characters" },
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
