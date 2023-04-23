import React, { useState, useEffect } from "react";
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
      .get("http://localhost:8000/ml/get_FID_scores", {
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
      "http://localhost:8000/ml/calculate_feature_statistics",
      { user: "Jeffrey", match_type: "title" },
      { credentials: "include" }
    );
  };

  return (
    <div>
      <input
        type="text"
        value={link === null ? "" : link}
        onChange={handleChange}
      ></input>
      <button onClick={handleClick} />
      <button onClick={getFID}>get FID</button>
      <button onClick={calculate_feature_stats}>feature stats</button>
    </div>
  );
};

export default APITester;
