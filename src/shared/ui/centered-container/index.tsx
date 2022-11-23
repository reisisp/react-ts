import { FC } from "react";

import styles from "./index.module.scss";

const CenteredContainer: FC<{ children: JSX.Element }> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default CenteredContainer;
