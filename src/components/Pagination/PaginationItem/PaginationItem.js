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
  const icon = (type, props) => {    
    const icons = {
      first: <ChevronsLeft {...props} />,
      prev: <ChevronLeft {...props} />,
      next: <ChevronRight {...props} />,
      last: <ChevronsRight {...props} />
    };

    return icons[type];
  };

  

  return (
    <span
      onClick={onClick}
      className={cx(styles.item, "btn", {
        [styles.active]: selected,
        [styles.disabled]: disabled,
        [styles.icon]: type !== "page" ,
      })}
    >
      {type === "page" 
        ? page
        : icon(type, { size: 18 })
      }
    </span>
  );
};

export default PaginationItem;
