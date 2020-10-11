import React from "react";
import styles from "./Country.module.scss";
import { numberWithCommas } from "utils";
import { useDispatch, selectCountry } from "context/actions";

const Country = ({ country }) => {
  const dispatch = useDispatch();
  const { name, population, region, capital, flag } = country;

  const handleClick = (e) => {
    dispatch(selectCountry(country));
  };

  return (
    <div>
      <div className={styles.country} onClick={handleClick}>
        <img
          src={flag}
          alt={name}
          width="100%"
          className={styles.country_flag}
        />
        <div className={styles.content}>
          <div className={styles.country_name}>{name}</div>
          <ul className={styles.country_infos}>
            <li className={styles.info}>
              <span>Population:</span> {numberWithCommas(population)}
            </li>
            <li className={styles.info}>
              <span>Region:</span> {region}
            </li>
            <li className={styles.info}>
              <span>Capital:</span> {capital}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Country;
