import React, { useState, useEffect } from 'react';
import axios from "axios";

const APITester = () => {
    const [link, setLink] = useState("");

    const handleChange = (e) => {
        setLink(e.target.value);
    }

    const handleClick = () => {
        axios.get(link)
        .then(response => {
            console.log(response.data)
        })
        .catch(err => {
            console.log(err);
        })
    };

    return (
        <div>
            <input type="text" value={link === null ? "" : link}
        onChange={handleChange} ></input>
            <button onClick={handleClick} />
        </div>
    );
}
 
export default APITester;