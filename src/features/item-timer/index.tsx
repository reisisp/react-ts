import { PauseCircleOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { Button, Space, Typography } from "antd";
import { FC, useCallback, useEffect, useState } from "react";

import styles from "./index.module.scss";

const { Text } = Typography;

const ItemTimer: FC<{
  value: number;
  itemId: string;
  updateItem: (id: string, value: number | string, key: string) => void;
}> = ({ value, itemId, updateItem }) => {
  const [time, setTime] = useState<number>(value);
  const [isRuning, setIsRuning] = useState<boolean>(false);

  const tick = useCallback((): void => {
    setTime((prevTime: number): number => prevTime - 1);
    updateItem(itemId, time, "timerVal");
  }, [itemId, time, updateItem]);

  useEffect(() => {
    if (time <= 0) setIsRuning(false);
  }, [time, isRuning]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isRuning) {
      interval = setInterval(tick, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRuning, tick]);

  const displaySeconds: string = (time % 60).toString().padStart(2, "0");
  const displayMinutes: string = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");

  const isActive = time <= 0;

  return (
    <Space>
      <Button
        type="ghost"
        disabled={isActive}
        className={styles.btn}
        style={{ padding: 0 }}
        onClick={() => {
          setIsRuning(!isRuning);
        }}
      >
        {isRuning ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
      </Button>
      <Text>
        {displayMinutes}:{displaySeconds}
      </Text>
    </Space>
  );
};

export default ItemTimer;
