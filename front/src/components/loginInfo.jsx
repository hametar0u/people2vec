import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Signup from "../signup";
import axios from "axios"

function LoginInfo() {
    const formInitialDetails = {
        email: "",
        password: "",
    };
    const navigate = useNavigate();
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState("l o g i n");
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // setButtonText("Sending...");
        // let response = await fetch("http://localhost:5000/contact", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json;charset=utf-8",
        //     },
        //     body: JSON.stringify(formDetails),
        // });
        // setButtonText("Send");
        // let result = await response.json();
        // setFormDetails(formInitialDetails);
        // if (result.code == 200) {
        //     setStatus({ succes: true, message: "Message sent successfully" });
        // } else {
        //     setStatus({
        //         succes: false,
        //         message: "Something went wrong, please try again later.",
        //     });
        // }
        axios.post("http://localhost:8000/users/login", {
            username: formDetails.email,
            password: formDetails.password
        })
        .then(response => {
            console.log(response.data);
            // TODO: REDIRECT TO THE NEXT PAGE
        })
        .catch(err => {
            console.log(err);
            // USER NOT FOUND; HANDLE THIS SOMEHOW
        });
    };

    const handleSignUp = async (e) => {
        navigate("/signup");
    };

    return (
        <section className="contact2" id="connect">
            <Container>
                <Row className="align-items-center">
                    <TrackVisibility>
                        {({ isVisible }) => (
                            <div
                                className={
                                    isVisible
                                        ? "animate__animated animate__fadeIn"
                                        : ""
                                }
                            >
                                <h2>p e o p l e 2 v e c</h2>
                                <h3>l o g i n</h3>
                                <br></br>
                                <form onSubmit={handleSubmit}>
                                    <Row>
                                        {/* <Col */}
                                        {/* size={12}
                                                sm={6}
                                                className="px-1"
                                            > */}
                                        <input
                                            type="email"
                                            value={formDetails.email}
                                            placeholder="email address"
                                            onChange={(e) =>
                                                onFormUpdate(
                                                    "email",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        {/* </Col> */}
                                        {status.message && (
                                            <Col>
                                                <p
                                                    className={
                                                        status.success === false
                                                            ? "danger"
                                                            : "success"
                                                    }
                                                >
                                                    {status.message}
                                                </p>
                                            </Col>
                                        )}
                                    </Row>
                                    <Row>
                                        <input
                                            type="tel"
                                            value={formDetails.phone}
                                            placeholder="password"
                                            onChange={(e) =>
                                                onFormUpdate(
                                                    "password",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </Row>
                                    <Row size={5} className="px-1">
                                        <button type="submit">
                                            <span>{buttonText}</span>
                                        </button>
                                    </Row>
                                </form>

                                <form onSubmit={handleSignUp}>
                                    <Row size={5} className="px-1">
                                        <button>
                                            <span>{"s i g n  u p"}</span>
                                        </button>
                                    </Row>
                                </form>
                            </div>
                        )}
                    </TrackVisibility>
                </Row>
            </Container>
        </section>
    );
}

export default LoginInfo;
