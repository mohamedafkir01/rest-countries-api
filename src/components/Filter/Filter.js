import React, { useState, useRef } from "react";
import { ChevronDown } from "react-feather";

import styles from "./Filter.module.scss";
import cx from "classnames";
import { useSelector, getRegions } from "context/selectors";

import {
  useDispatch,
  changePage,
  filterCountriesByRegion,
} from "context/actions";
import useClickOutSide from "Hooks/useClickOutSide";
import useKeyPress from "Hooks/useKeyPress";

const Filter = (props) => {
  const dispatch = useDispatch();
  const regions = useSelector(getRegions);
  const ref = useRef();

  useClickOutSide(ref, closeDropDown);
  useKeyPress('Escape', closeDropDown);

  // Component States
  const [open, setOpen] = useState(false);
  const [label, setLabel] = useState("Filter by Region");

  const UNDEFINED_REGION = "Undefined Region";

  // Toggle Dropdown
  const handleDropDown = (e) => {
    setOpen((o) => !o);
  };

  // Close Dropdown
  function closeDropDown () {
    setOpen(false)
  };

  const selectRegion = (r) => (e) => {
    closeDropDown();
    setLabel(r ? r : UNDEFINED_REGION);
    
    // Select Region
    dispatch(filterCountriesByRegion(r));
    // Back to the first page
    dispatch(changePage(1));
  };

  return (
    <div className={styles.dropdown} ref={ref}>
      <div className={cx("btn", styles.dropdown_btn)} onClick={handleDropDown}>
        <span>{label}</span>
        <ChevronDown
          size={18}
          className={cx(styles.icon, { [styles.active]: open })}
        />
      </div>
      <ul className={cx(styles.dropdown_list, { [styles.active]: open })}>
        {["all", ...regions].map((region, i) => (
          <li className="btn" key={i} onClick={selectRegion(region)}>
            {region ? region : UNDEFINED_REGION}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
