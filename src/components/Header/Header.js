import React from "react";
import styles from "./Header.module.scss";
import { SwitchMode } from "components";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <div className={styles.logo}>Where in the world?</div>
        <SwitchMode />
      </div>
    </header>
  );
};

export default Header;
