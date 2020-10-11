import React from "react";
import styles from "./PaginationItem.module.scss";
import cx from "classnames";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "react-feather";

const PaginationItem = ({ type, page, selected, disabled, onClick }) => {
  const icon = {
    first: <ChevronsLeft size={18} />,
    prev: <ChevronLeft size={18} />,
    next: <ChevronRight size={18} />,
    last: <ChevronsRight size={18} />,
  };

  

  return (
    <span
      onClick={onClick}
      className={cx(styles.item, "btn", {
        [styles.active]: selected,
        [styles.disabled]: disabled,
      })}
    >
      {type === "page" ? page : icon[type]}
    </span>
  );
};

export default PaginationItem;
