import React from "react";
import {
  SearchBar,
  Filter,
  Countries,
  CountryDetail
} from "components";
import styles from "./Content.module.scss";
import { useSelector, getCountrySelected } from "context/selectors";

const Content = (props) => {
  const countrySelected = useSelector(getCountrySelected);

  return (
    <main className={styles.main}>
      <div className="container">
        {countrySelected ? (
          <CountryDetail />
        ) : (
          <>
            <div className={styles.settings}>
              <SearchBar />
              <Filter />
            </div>

            <div className={styles.countries}>
              <Countries />
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Content;
