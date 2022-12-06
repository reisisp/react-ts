import { FC } from "react";
import { Typography } from "antd";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const { Text } = Typography;

dayjs.extend(relativeTime);

const DateDistanceToNow: FC<{ dateValue: number }> = ({ dateValue }) => {
  const formatedDate = dayjs(dateValue).fromNow(true);
  const str = `created ${formatedDate} ago`;
  return <Text>{str}</Text>;
};

export default DateDistanceToNow;
