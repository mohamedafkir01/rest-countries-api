import React from "react";
import { Search } from "react-feather";
import styles from "./SearchBar.module.scss";
import { useDispatch, searchCountries, changePage } from "context/actions";
import { useSelector, getSearchKeyword } from "context/selectors";

const SearchBar = (props) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(searchCountries(e.target.value.trim()));
    dispatch(changePage(1));
  };

  return (
    <div className={styles.searchbar}>
      <Search className={styles.icon} size={20} />
      <input
        className={styles.input}
        onChange={handleChange}
        value={useSelector(getSearchKeyword)}
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default SearchBar;
