import React from "react";
import cx from "classnames";
import styles from "./BackButton.module.scss";
import { ArrowLeft } from "react-feather";
import { useDispatch, selectCountry } from "context/actions";

const BackButton = (props) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log("clicked !");
    dispatch(selectCountry(null));
  };

  return (
    <button className={cx("btn", styles.btn)} onClick={handleClick}>
      <ArrowLeft size={18} className={styles.icon} />
      <span>Back</span>
    </button>
  );
};

export default BackButton;
