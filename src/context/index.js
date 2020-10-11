import React, { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";

const initState = {
  countries: [],
  countrySelected: null,
  searchKeyword: "",
  regionSelected: "all",
  page: 1,
};

export const AppContext = createContext({});

export const useStore = () => useContext(AppContext);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
