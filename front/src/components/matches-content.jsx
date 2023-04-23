import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Cards from "./card";
import { Container, Row, Col } from "react-bootstrap";
import "./card.css";
import axios from "axios";
import BaseMap from "../Map";

export const MatchesContent = () => {
    const [people, setPeople] = useState([
        "Jeffrey@gmail.com",
        "bob@gmail.com",
        "bobby@gmail.com",
        "ashley jones",
    ]);
    const [placeH, setPlaceH] = useState([
        [
            "Prateik Sinha",
            "Prateik@gmail.com",
            "21",
            "5462564715",
            "likes cake",
            "96.61",
            "96.12",
            "http://projector.tensorflow.org/?config=https://gist.githubusercontent.com/Prateik-11/e2699255b7932b48525e27ee597d156d/raw/14af1b00daba66714bc3498a4279c8907d6e96aa/projection_config.json"
        ],
        [
            "Angeline Xu",
            "Angeline@gmail.com",
            "20",
            "9402114715",
            "likes chocolate",
            "61.98",
            "84.69",
            "http://projector.tensorflow.org/?config=https://gist.githubusercontent.com/Prateik-11/bf78c2a45f6348868c56c2e7e817aadf/raw/e6aba47e6dd254493048be169c8a112cfdbfa36a/projection_config.json"
        ],
        [
            "Jeffrey Kwan",
            "Jeffrey@gmail.com",
            "20",
            "3461563795",
            "likes food",
            "57.067",
            "84.66",
            "http://projector.tensorflow.org/?config=https://gist.githubusercontent.com/Prateik-11/b72ea57b38275da4cdf33541eac68cd4/raw/c7b78c2c362f5699af52679395028891597f123a/projection_config.json"
        ],
        [
            "Jeffrey J",
            "JJ@gmail.com",
            "70",
            "1502514715",
            "likes Japan",
            "38.30",
            "64.98",
            "http://projector.tensorflow.org/?config=https://gist.githubusercontent.com/Prateik-11/ad8e18a3d6290b7cb9e2806288e03e68/raw/863b31b049e39db66a0930f05d60dacf2a8dfa9a/projection_config.json"
        ],
        [
            "Jordan's Roomie",
            "roomie@gmail.com",
            "20",
            "6402514715",
            "likes water",
            "47.50",
            "60.11",
            "http://projector.tensorflow.org/?config=https://gist.githubusercontent.com/Prateik-11/a87a8bba4d4b3a1f51447790384d7a52/raw/6c07082e34b923b6510d572945ca967bccce92c6/projection_config.json"
        ],
    ]);
    const [thePerson, setThePerson] = useState("");
    const [age, setAge] = useState("21");
    const [description, setDescription] = useState("likes cake");
    const [name, setName] = useState("Prateik Sinha");
    const [email, setEmail] = useState("Prateik@gmail.com");
    const [number, setNumber] = useState(5462564715);
    const [thumb, setThumb] = useState("96.61");
    const [title, setTitle] = useState("96.12");
    const [clicked, setClicked] = useState(false);

    const [iFRAME, setiFRAME] = useState(
        "http://projector.tensorflow.org/?config=https://gist.githubusercontent.com/Prateik-11/e2699255b7932b48525e27ee597d156d/raw/14af1b00daba66714bc3498a4279c8907d6e96aa/projection_config.json"
    );
    const [compatibility, setCompatibility] = useState(99);

    const handleClick = (thing) => {
        setName(thing[0]);
        setEmail(thing[1]);
        setAge(thing[2]);
        setNumber(thing[3]);
        setDescription(thing[4]);
        setThumb(thing[5]);
        setTitle(thing[6]);
        setiFRAME(thing[7]);
        axios
            .get("http://localhost:8000/users/get_user_data", {
                params: { username: thing },
            })
            .then((response) => {
                console.log(response.data);
                console.log(response.data.username);
                console.log(response.data.age);
                setAge(response.data.age);
            })
            .catch((err) => {
                console.log(err);
                // USER NOT FOUND; HANDLE THIS SOMEHOW
            });
        // setThePerson(thing);
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
                                <Col size={12} md={5}>
                                    <div>
                                        {placeH.map((item) => {
                                            return (
                                                <div>
                                                    <br></br>
                                                    <br></br>
                                                    <span className="prettyButton align-items-center">
                                                        <button
                                                            className="vvd align-items-center"
                                                            onClick={() =>
                                                                handleClick(
                                                                    item
                                                                )
                                                            }
                                                        >
                                                            {item[0]}
                                                        </button>
                                                    </span>
                                                    <br></br>
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
                                        <div className="content">
                                            <div className="details">
                                                <h2>
                                                    thumbnails match score: {thumb}%
                                                </h2>
                                                <h2>
                                                    titles match score: {title}% matched
                                                </h2>
                                                <h2>
                                                    {thePerson}
                                                    <br></br>
                                                </h2>
                                                <h2>{name}</h2>
                                                <h2>Age: {age}</h2>
                                                <br></br>
                                                <h2>d e s c r i p t i o n:</h2>
                                                <h2>{description}</h2>
                                                <br></br>
                                                <h2>c o n t a c t:</h2>
                                                <h2>
                                                    email: {email} | number:{" "}
                                                    {number}
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <br></br>
                            <br></br>
                            <br></br>
                            <iframe
                                src={iFRAME}
                                width={1100}
                                height={900}
                            ></iframe>
                            <BaseMap />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
