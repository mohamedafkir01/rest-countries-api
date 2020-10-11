import { range } from "utils";
import useMedia from "Hooks/useMedia";

const usePagination = (options = {}) => {
  const { count, boundaryCount, currentPage, onChangePage } = options;

  const responsiveBoundaryCount = useMedia(
    ["(max-width: 576px)"],
    [3],
    boundaryCount
  );

  let firstSibling = Math.max(
    1,
    currentPage - Math.floor(responsiveBoundaryCount / 2)
  );

  const lastSibling = Math.min(
    count,
    Math.max(
      firstSibling + responsiveBoundaryCount - 1,
      currentPage + Math.ceil(responsiveBoundaryCount / 2)
    )
  );

  firstSibling = Math.max(1, lastSibling - responsiveBoundaryCount + 1);

  const pages = range(firstSibling, lastSibling + 1);

  const buttonPage = (type) => {
    switch (type) {
      case "first":
        return 1;
      case "prev":
        return Math.max(1, currentPage - 1);
      case "next":
        return Math.min(count, currentPage + 1);
      case "last":
        return count;
      default:
        return 1;
    }
  };

  const itemsList = ["first", "prev", ...pages, "next", "last"];

  const items = itemsList.map((item) => {
    return typeof item === "number"
      ? {
          type: "page",
          page: item,
          selected: item === currentPage,
          onClick: (e) => {
            onChangePage(item);
          },
        }
      : {
          type: item,
          selected: item === currentPage,
          disabled:
            (item === "first" && currentPage === 1) ||
            (item === "prev" && currentPage === 1) ||
            (item === "next" && currentPage === count) ||
            (item === "last" && currentPage === count),
          onClick: (e) => {
            onChangePage(buttonPage(item));
          },
        };
  });

  return items;
};

export default usePagination;
