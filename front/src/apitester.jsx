import React, { useState, useEffect } from "react";
import { Banner } from "./components/Banner";
import axios from "axios";


const APITester = () => {
  const [link, setLink] = useState("");

  const handleChange = (e) => {
    setLink(e.target.value);
  };

  const handleClick = () => {
    axios
      .get(link)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getFID = () => {
    axios
      .get("localhost:8000/ml/get_FID_scores", {
        params: { user_1: "Jeffrey", user_2: "Jordan", match_type: "title" },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const calculate_feature_stats = () => {
    axios.post(
      "localhost:8000/ml/calculate_feature_statistics",
      { user: "Jeffrey", match_type: "title" },
      { credentials: "include" }
    );
  };

  return (
    <div classname="App">
      <Banner />
      <input
        type="text"
        value={link === null ? "" : link}
        onChange={handleChange}
      ></input>  <br />
      <button classname="button-api" onClick={handleClick} /> <br />
      <button classname="button-api" onClick={getFID}>get FID</button>  <br />
      <button classname="button-api" onClick={calculate_feature_stats}>feature stats</button>  <br />
    </div>
  );
};

export default APITester;
