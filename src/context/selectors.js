import { useStore } from "context";

export const useSelector = (selector, params = []) => {
  const { state } = useStore();
  return selector(state, ...params);
};

export const getCountries = ({ countries }) => countries;

export const getCountrySelected = ({ countrySelected }) => countrySelected;

export const getRegion = ({ regionSelected }) => regionSelected;

export const getRegions = ({ countries }) => [
  ...new Set(countries.map((c) => c.region)),
];

export const getSearchKeyword = ({ searchKeyword }) => searchKeyword;

export const getPage = ({ page }) => page;
