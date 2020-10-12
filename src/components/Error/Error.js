import React from 'react';
import styles from "./Error.module.scss";
import { X as ErrorIcon } from "react-feather";

const Error = ({ message = "Something went wrong. Let's try one more again" }) => {
  const handleClick = () => {
    window.location.reload();
    return false;
  };

  return (
    <div className={styles.error}>
      <div className={styles.icon}>
        <ErrorIcon size={50} />
      </div>
      
      <p className={styles.title}>Error !</p>

      {message && <p className={styles.message}>{message}</p>}
      
      <button 
        className="btn"
        onClick={handleClick}
      >
        Try Again
      </button>
    </div>
  );
}

export default Error;