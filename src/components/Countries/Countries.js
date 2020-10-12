import React, { useEffect, useState } from "react";
import styles from "./Countries.module.scss";
import Country from "./Country";
import { Pagination, Empty } from "components";
import useMedia from "Hooks/useMedia";
import {
  useSelector,
  getCountries,
  getRegion,
  getSearchKeyword,
  getPage,
} from "context/selectors";
import {
  selectCountries,
  COUNTRIES_PER_PAGE,
  responsive
} from "utils";

const Countries = (props) => {
  const allCountries = useSelector(getCountries);
  const region = useSelector(getRegion);
  const searchKeyword = useSelector(getSearchKeyword);
  const page = useSelector(getPage);

  const countriesPerPage = useMedia(
    // Media queries
    [`(max-width: ${responsive.small}px)`, `(min-width: ${responsive.small + 1}px)`], 
    // Countries to show per page by query
    [5, COUNTRIES_PER_PAGE], 
  )

  // State
  const [countries, setCountries] = useState(allCountries);
  
  const count = Math.ceil(countries.length / countriesPerPage);

  useEffect(updateCountries, [region, searchKeyword, page]);

  function updateCountries() {
    const countries = selectCountries(allCountries, searchKeyword, region);
    setCountries(countries);
  }

  return (
    !!countries.length
      ? (
        <>
          <div className={styles.countries}>
            {countries
              .slice((page - 1) * countriesPerPage, page * countriesPerPage)
              .map((country, i) => (
                <Country key={i} country={country} />
              ))}
          </div>
          
          <Pagination boundaryCount={10} count={count} />
        </>
      )
      : (<Empty />)
  );
};

export default Countries;
