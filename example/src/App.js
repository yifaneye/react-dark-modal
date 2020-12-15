import React, { useState } from 'react';
import { Modal } from 'react-dark-modal';
import 'react-dark-modal/dist/index.css';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={handleOpen}>
        Open the modal
      </button>
      <Modal open={isModalOpen} onClose={handleClose}>
        <h1>Click elsewhere to close the modal</h1>
      </Modal>
    </>
  );
};

export default App;
