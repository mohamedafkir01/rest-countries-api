import React, { useState, useEffect } from "react";
import { Header, Content } from "components";

import { getData } from "api";

import { useDispatch, loadCountries } from "context/actions";

import styles from "./App.module.scss";
import cx from "classnames";

function App() {
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error !!!</div>;

  return (
    <div className={cx("light", styles.app)}>
      <Header />
      <Content />
    </div>
  );
}

export default App;
