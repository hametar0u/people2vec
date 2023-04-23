import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Cards from "./card";
import { Container, Row, Col } from "react-bootstrap";
import "./card.css";
import axios from "axios";

export const MatchesContent = () => {
    const [people, setPeople] = useState([
        "Jeffrey@gmail.com",
        "bob@gmail.com",
        "bobby@gmail.com",
        "ashley jones",
    ]);
    const [thePerson, setThePerson] = useState("idk");
    const [age, setAge] = useState("3");
    const [location, setLocation] = useState("10 miles away");
    const [description, setDescription] = useState(
        "description descriptiondescription descriptiondescription descriptiondescription description"
    );
    const [iFRAME, setiFRAME] = useState("https://projector.tensorflow.org/");
    const [compatibility, setCompatibility] = useState(99);

    const handleClick = (thing) => {
        axios
            .get("http://localhost:8000/users/get_user_data", {
                params: { username: thing },
            })
            .then((response) => {
                console.log(response.data);
                console.log(response.data.username);
                console.log(response.data.age);
                setAge(response.data.age);
                
                //TODO: set logged in/authenticated to true
                // navigate("/profile");
            })
            .catch((err) => {
                console.log(err);
                // USER NOT FOUND; HANDLE THIS SOMEHOW
            });
        setThePerson(thing);

    };

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <br></br>
                            <h2>m a t c h e s</h2>
                            <p>
                                here you will find all of your matches and
                                hopefully make some new friends!
                            </p>
                            <Row className="align-items-center">
                                <Col size={12} md={4}>
                                    <div>
                                        {people.map((item) => {
                                            return (
                                                <div>
                                                    <button
                                                        onClick={() =>
                                                            handleClick(item)
                                                        }
                                                    >
                                                        {item}
                                                        <br></br>
                                                        <br></br>
                                                    </button>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </Col>
                                {/* the cards side */}
                                <Col size={12} md={6}>
                                    <br></br>
                                    <br></br>
                                    <div className="card">
                                        <br></br>
                                        <br></br>
                                        <h1>{compatibility}% matched</h1>
                                        <div className="content">
                                            <div className="details">
                                                <h2>
                                                    {thePerson}
                                                    <br></br>
                                                </h2>
                                                <h2>Age: {age}</h2>
                                                <h2>{location}</h2>
                                                <h2>{description}</h2>
                                                <div className="actionBtn">
                                                    <button>connect</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <br></br>
                            <iframe
                                src={iFRAME}
                                width={1100}
                                height={900}
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
