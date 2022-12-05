import { FC } from "react";
import ApplyModal from "shared/ui/apply-modal";

import { RemoveAllBtnProps } from "./config";

const RemoveAllBtn: FC<RemoveAllBtnProps> = ({ isActive, confirm, children }) => {
  return (
    <ApplyModal confirm={confirm} isActive={isActive} msg="Do you really want to remove all completed tasks?">
      {children}
    </ApplyModal>
  );
};

export default RemoveAllBtn;
