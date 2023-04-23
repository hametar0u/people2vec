import React, { useState } from "react";
import "./card.css";

function Cards(props) {
    // const [open, setOpen] = useState(false);
    const [age, setAge] = useState("3");
    const [location, setLocation] = useState("10 miles away");
    const [name, setName] = useState("a lonely soul")
    const [description, setDescription] = useState("description descriptiondescription descriptiondescription descriptiondescription description");

    return (
        <body>
            <div className="card">
                <div className="imgBx"></div>
                <div className="content">
                    {" "}
                    <div className="details">
                        <h2>
                            {name}
                            <br></br>
                        </h2>
                        <div className="data">
                            <h3>
                                age: {age}
                            </h3>
                            <h3>
                                {location}<br></br>
                            </h3>
                        </div>
                        <h3>
                            {description}
                            <br></br>
                        </h3>
                        <div className="actionBtn">
                            <button>connect</button>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default Cards;
