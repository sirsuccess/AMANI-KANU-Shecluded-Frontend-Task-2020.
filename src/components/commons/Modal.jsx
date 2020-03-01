import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalExample = ({ item, props }) => {
  console.log(item);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        More
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{item.name}</ModalHeader>
        <ModalBody>
          {item.description}
          <div>
            <b>Origin: </b>
            {item.origin}
          </div>

          <div>
            <b>link: </b>{" "}
            <a
              href={item.vetstreet_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.vetstreet_url}
            </a>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
