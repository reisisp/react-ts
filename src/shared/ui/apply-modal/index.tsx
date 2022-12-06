import React, { useState, FC } from "react";
import { Button, Modal } from "antd";

import { ApplyModalProps } from "./config";

const ApplyModal: FC<ApplyModalProps> = ({ isActive, confirm, children, msg, variant }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const type = variant === "v1" ? "ghost" : "text";
  const onOkHandler = () => {
    confirm();
    setModalOpen(false);
  };

  return (
    <>
      <Button type={type} disabled={isActive} onClick={() => setModalOpen(true)}>
        {children}
      </Button>
      <Modal
        title={msg}
        centered
        open={modalOpen}
        onOk={onOkHandler}
        onCancel={() => setModalOpen(false)}
        okButtonProps={{ danger: true }}
      />
    </>
  );
};

export default ApplyModal;
