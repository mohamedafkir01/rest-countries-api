import {
  LOAD_COUNTRIES,
  SEARCH_COUNTRIES,
  FILTER_COUNTRIES_BY_REGION,
  SELECT_COUNTRY,
  CHANGE_PAGE,
} from "./types";

export default function reducer(state, action) {
  switch (action.type) {
    case LOAD_COUNTRIES:
      return { ...state, countries: action.countries };

    case SEARCH_COUNTRIES:
      return { ...state, searchKeyword: action.searchKeyword };

    case FILTER_COUNTRIES_BY_REGION:
      return { ...state, regionSelected: action.region };

    case SELECT_COUNTRY:
      return { ...state, countrySelected: action.country };

    case CHANGE_PAGE:
      return { ...state, page: action.page };

    default:
      return state;
  }
}
