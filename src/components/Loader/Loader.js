import React from 'react';
import styles from "./Loader.module.scss";
import Spinner from "react-loader-spinner";

const Loader = ({ text }) => {
  return (
    <div className={styles.spinner}>
      <Spinner 
        className={styles.icon} 
        type="Puff" 
        color="currentColor"
        height={80} 
        width={80}
      />
      {text && <p>{text}</p>}
    </div>
  );
}

export default Loader;