import React from "react";
import styles from "./Pagination.module.scss";
import usePagination from "Hooks/usePagination";
import { useSelector, getPage } from "context/selectors";
import { useDispatch, changePage } from "context/actions";
import PaginationItem from "./PaginationItem";

const Pagination = ({ boundaryCount, count }) => {
  const dispatch = useDispatch();

  const currentPage = useSelector(getPage);

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
    <nav className={styles.nav}>
      <ul className={styles.pagination}>
        {items.map((item, index) => (
          <li key={index}>{renderItem(item)}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
