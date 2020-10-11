import React from "react";
import {
  SearchBar,
  Filter,
  Countries,
  CountryDetail,
  Pagination,
} from "components";
import styles from "./Content.module.scss";
import { useSelector, getCountrySelected } from "context/selectors";
import cx from "classnames";

const Content = (props) => {
  const countrySelected = useSelector(getCountrySelected);

  return (
    <div className={cx("container", styles.content)}>
      {countrySelected ? (
        <CountryDetail />
      ) : (
        <>
          <div className={styles.flex}>
            <SearchBar />
            <Filter />
          </div>

          <Countries />

          <Pagination boundaryCount={10} />
        </>
      )}
    </div>
  );
};

export default Content;
