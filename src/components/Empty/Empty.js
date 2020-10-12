import React from 'react';
import styles from "./Empty.module.scss";
import { Trash2 } from "react-feather";

const Empty = ({ text = "Empty list !" }) => {
  return <div className={styles.empty}>
    <Trash2 size={30} />
    <span>{text}</span>
  </div>
}

export default Empty;