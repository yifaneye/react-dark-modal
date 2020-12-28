import React from 'react';
import styles from './styles.module.css';

export function Modal(props) {
  const handleClick = (event) => {
    if (event.target === event.currentTarget) {
      props.onClose();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      props.onClose();
    }
  };

  return (
    <div
      className={`${styles.modal}${props.open ? '' : ' ' + styles.disabled}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      ref={(element) => element && element.focus()}
      style={{ ...props.style }}
    >
      {props.children}
    </div>
  );
}
