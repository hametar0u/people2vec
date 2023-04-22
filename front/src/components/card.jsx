import React from "react";
import "./card.css";

function Cards(props) {
    return (
        <body>
            <div className="card">
                <div className="imgBx"></div>
                <div className="content">
                    {" "}
                    <div className="details">
                        <h2>
                            Bob Shirley
                            <br></br>
                            <span>Engineer</span>
                        </h2>
                        <div className="data">
                            <h3>
                                age: 25<br></br>
                            </h3>
                            <h3>
                                3 miles away<br></br>
                            </h3>
                        </div>
                        <h3>
                            description descriptiondescription description
                            <br></br>
                        </h3>
                        <div className="actionBtn">
                            <button>connect</button>
                        </div>
                    </div>
                </div>
            </div>
        </body>
        // <div className="card-container">
        //     <header>
        //         <br></br>
        //         <h>hi</h>
        //     </header>

        //     <h2 className="normal-text">{props.city}</h2>
        //     <div className="social-container">
        //         <div className="followers">
        //             <h1 className="bold-text">{props.followers}</h1>
        //             <h2 className="smaller-text">hi</h2>
        //         </div>
        //         <div className="likes">
        //             <h1 className="bold-text">{props.likes}</h1>
        //             <h2 className="smaller-text">Likes</h2>
        //         </div>
        //         <div className="photos">
        //             <h1 className="bold-text">{props.photos}</h1>
        //             <h2 className="smaller-text">Photos</h2>
        //         </div>
        //     </div>
        // </div>
    );
}

export default Cards;
