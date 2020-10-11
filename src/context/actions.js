import { useStore } from "context";
import {
  LOAD_COUNTRIES,
  SEARCH_COUNTRIES,
  FILTER_COUNTRIES_BY_REGION,
  SELECT_COUNTRY,
  CHANGE_PAGE,
} from "./types";

export const useDispatch = () => {
  const { dispatch } = useStore();
  return dispatch;
};

export const loadCountries = (countries) => ({
  type: LOAD_COUNTRIES,
  countries,
});

export const searchCountries = (searchKeyword) => ({
  type: SEARCH_COUNTRIES,
  searchKeyword,
});

export const filterCountriesByRegion = (region) => ({
  type: FILTER_COUNTRIES_BY_REGION,
  region,
});

export const selectCountry = (country) => ({
  type: SELECT_COUNTRY,
  country,
});

export const changePage = (page) => ({
  type: CHANGE_PAGE,
  page,
});
