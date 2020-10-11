import axios from "axios";

const URL = "https://restcountries.eu/rest/v2/all";

export const getData = async () => await axios(URL);
