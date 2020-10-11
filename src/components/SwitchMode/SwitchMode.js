import React from "react";
import useDarkMode from "Hooks/useDarkMode";
import useMedia from "Hooks/useMedia";
import { responsive } from "utils"
import styles from "./SwitchMode.module.scss";
import { Sun, Moon } from "react-feather";

const SwitchMode = (props) => {
  const [theme, setTheme] = useDarkMode();
  const isMobile = useMedia([`(max-width: ${responsive.small}px)`], [true], false);

  const handleClick = () => {
    const themes = ["light", "dark"];
    setTheme(themes[Number(!themes.indexOf(theme))]);
  };

  const Icon = theme === "light" ? Sun : Moon;

  return (
    <div className={styles.root}>
      <div className={styles.icon} onClick={handleClick}>
        <Icon size={18} />
      </div>
      {!isMobile && (
        <span className={styles.label} onClick={handleClick}>
          {theme} Mode
        </span>
      )}
    </div>
  );
};

export default SwitchMode;
