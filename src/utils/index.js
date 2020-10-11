// CONSTANTS
export const COUNTRIES_PER_PAGE = 16;

// Responsive breakpoints
export const responsive = {
  small: 576,
  medium: 768,
  large: 992,
  xlarge: 1200,
};

// ----------------- Helpers -----------------
// Number-with-commas
// https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Select countries by search keyboard and region
export const selectCountries = (countries, searchKeyword, region) => {
  const results = countries.filter((c) =>
    c.name.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return region.toLowerCase() === "all"
    ? results
    : results.filter((c) => c.region === region);
};

// https://dev.to/namirsab/comment/2050
export const range = (start, end, length = end - start) =>
  Array.from({ length }, (_, i) => start + i);
