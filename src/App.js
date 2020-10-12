import React, { useState, useEffect } from "react";
import { Header, Content, Loader, Error } from "components";

import { getData } from "api";

import { useDispatch, loadCountries } from "context/actions";
import useDarkMode from "Hooks/useDarkMode"

import styles from "./App.module.scss";
import cx from "classnames";

function App() {
  const [, , componentMounted] = useDarkMode()
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  // fetch data
  const fetchData = async () => {
    try {
      let { data } = await getData();

      // without Fucking Israel
      data = data.filter(({ alpha3Code }) => alpha3Code !== "ISR");

      dispatch(loadCountries(data));
    } catch (e) {
      setError(true);
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  if (!componentMounted) return <div />;
  if (loading) return <Loader text="Loading Data..." />;
  if (error) return <Error />;

  return (
    <div className={cx("light", styles.app)}>
      <Header />
      <Content />
    </div>
  );
}

export default App;
