# react-dark-modal

Simple React modal component as a transparent dark overlay 🌑

[![NPM](https://img.shields.io/npm/v/react-dark-modal.svg)](https://www.npmjs.com/package/react-dark-modal)

## Demo

![react-dark-modal gif demo](https://yifanai.s3-ap-southeast-2.amazonaws.com/modal/modal.gif)

🚀 [Try react-dark-modal on CodeSandbox](https://codesandbox.io/s/react-dark-modal-7lmjl?file=/src/App.js)


## Install

```bash
npm install react-dark-modal
```
OR
```bash
yarn add react-dark-modal
```

## Usage

```jsx
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
      <button onClick={handleOpen}>Open the modal</button>
      <Modal open={isModalOpen} onClose={handleClose}>
        <h1>Click elsewhere to close the modal</h1>
      </Modal>
    </>
  );
};
```

## License

MIT © [yifaneye](https://github.com/yifaneye)
