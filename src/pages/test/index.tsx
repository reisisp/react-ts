import { HomeOutlined, LoadingOutlined, SettingFilled, SmileOutlined, SyncOutlined } from "@ant-design/icons";
import { Space } from "antd";

const TestPage = () => {
  return (
    <Space>
      <HomeOutlined />
      <SettingFilled />
      <SmileOutlined />
      <SyncOutlined spin />
      <SmileOutlined rotate={180} />
      <LoadingOutlined />
    </Space>
  );
};

export default TestPage;
