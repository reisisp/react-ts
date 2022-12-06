import { FC } from "react";
import ApplyModal from "shared/ui/apply-modal";

import { RemoveTargetBtnProps } from "./config";

const RemoveTargetBtn: FC<RemoveTargetBtnProps> = ({ confirm, children, itemLabel }) => {
  const msg = `Do you really want to remove ${itemLabel}?`;
  return (
    <ApplyModal confirm={confirm} msg={msg} variant="v1">
      {children}
    </ApplyModal>
  );
};

export default RemoveTargetBtn;
