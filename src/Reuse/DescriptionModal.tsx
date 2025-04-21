import React, { useState } from "react";
import { Button, Modal, Row } from "antd";
import "./Description.css";
interface Props {
  data: string;
  smallText: string;
  title: string;
}

const DescriptionModal: React.FC<Props> = ({ data, title, smallText }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Row className="rowStyle">
        {smallText}{" "}
        <Button style={{ padding: 0 }} type="text" onClick={showModal}>
          ....View More
        </Button>
      </Row>

      <Modal
        title={title}
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
        width={800}
      >
        <p>{data}</p>
      </Modal>
    </>
  );
};

export default DescriptionModal;
