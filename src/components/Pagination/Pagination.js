import React from "react";
import styles from "./Pagination.module.scss";
import usePagination from "Hooks/usePagination";
import {
  useSelector,
  getCountries,
  getRegion,
  getSearchKeyword,
  getPage,
} from "context/selectors";
import { useDispatch, changePage } from "context/actions";
import { selectCountries, COUNTRIES_PER_PAGE } from "utils";
import PaginationItem from "./PaginationItem";

const Pagination = ({ boundaryCount }) => {
  const dispatch = useDispatch();

  const allCountries = useSelector(getCountries);
  const region = useSelector(getRegion);
  const searchKeyword = useSelector(getSearchKeyword);
  const currentPage = useSelector(getPage);

  const countriesLength = selectCountries(allCountries, searchKeyword, region)
    .length;

  const count = Math.ceil(countriesLength / COUNTRIES_PER_PAGE);

  const onChangePage = (value) => {
    dispatch(changePage(value));
  };

  const items = usePagination({
    count,
    boundaryCount,
    currentPage,
    onChangePage,
  });

  const renderItem = (props) => <PaginationItem {...props} />;

  return (
    !!countriesLength && (
      <nav className={styles.nav}>
        <ul className={styles.pagination}>
          {items.map((item, index) => (
            <li key={index}>{renderItem(item)}</li>
          ))}
        </ul>
      </nav>
    )
  );
};

export default Pagination;
