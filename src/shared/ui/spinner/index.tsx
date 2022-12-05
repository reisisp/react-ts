import { FC } from "react";

import { Space, Spin } from "antd";

const Spinner: FC = () => {
  return (
    <Space style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Spin tip="Loading" size="large" />
    </Space>
  );
};

export default Spinner;
