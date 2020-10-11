import React from "react";
import styles from "./CountryDetail.module.scss";
import { BackButton } from "components";
import {
  useSelector,
  getCountries,
  getCountrySelected,
} from "context/selectors";
import { useDispatch, selectCountry } from "context/actions";
import { numberWithCommas } from "utils";

const InfosItem = ({ label, value }) => {
  return (
    value && (
      <li>
        <span className={styles.label}>{label}: </span>
        {value}
      </li>
    )
  );
};

const CountryDetail = () => {
  const dispatch = useDispatch();
  const country = useSelector(getCountrySelected);
  const countries = useSelector(getCountries);

  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    topLevelDomain,
    currencies: currenciesArr,
    capital,
    flag,
    languages: languagesArr,
    borders,
  } = country;

  // Convert currencies array to string
  const currencies = currenciesArr.map(({ name }) => name).join(", ");

  // Convert languages array to string
  const languages = languagesArr.map(({ name }) => name).join(", ");

  // Extract borders names
  const bordersCountries = () => {
    let b = {};

    for (let i = 0; i < countries.length; i++) {
      const { name, alpha3Code } = countries[i];
      b[alpha3Code] = name;
    }

    return b;
  };

  // Select Country
  const handleClick = (alpha3Code) => (e) => {
    const country = countries.find((c) => c.alpha3Code === alpha3Code);
    dispatch(selectCountry(country));
  };

  return (
    <div className={styles.root}>
      <BackButton />

      <div className={styles.country}>
        <div className={styles.country_flag}>
          <img src={flag} alt={`${name} flag`} width="100%" />
        </div>

        <div className={styles.country_infos}>
          <div className={styles.country_title}>{name}</div>

          <div className={styles.country_info}>
            <ul>
              <InfosItem label="Native Name" value={nativeName} />
              <InfosItem
                label="Population"
                value={numberWithCommas(population)}
              />
              <InfosItem label="Region" value={region} />
              <InfosItem label="Sub Region" value={subregion} />
              <InfosItem label="Capital" value={capital} />
            </ul>
            <ul>
              <InfosItem label="top level domain" value={topLevelDomain} />
              <InfosItem label="currencies" value={currencies} />
              <InfosItem label="languages" value={languages} />
            </ul>
          </div>

          {!!borders.length && (
            <div className={styles.country_borders}>
              <span className={styles.label}>Border Countries:</span>

              <ul className={styles.country_border__countries}>
                {borders.map((b, i) => (
                  <li className="btn" key={i} onClick={handleClick(b)}>
                    {bordersCountries()[b]}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
