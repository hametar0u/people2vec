import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/candy.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";

function SignupInfo() {
    const navigate = useNavigate();
    function readSingleFile(e) {
        //Retrieve the first (and only!) File from the FileList object
        let f = e.target.files[0];

        if (f) {
            let r = new FileReader();
            r.onload = function (e) {
                let contents = e.target.result;
            };
            r.readAsText(f);
        } else {
            alert("Failed to load file");
        }
    }

    const handleSignUp = async (e) => {
        navigate("/Profile");
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
    const formInitialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        data: "",
    };
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState("signup!");
    const [status, setStatus] = useState({});
    const [data, setData] = useState(null);
    const [dataString, setDataString] = useState("");

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value,
        });
    };

    const toString = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsText(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
        });

    // GOAL: after i click "send" button
    // 1. convert the uploaded file to a string THAT IS STORED IN A VARIABLE
    // 2. store that variable to be part of formInitialDetails (data entry)
    // 3. post formInitialDetails

    useEffect(() => {
        console.log("change");
        setDataString(toString(data));
    }, [data]);

    useEffect(() => {
        console.log(dataString);
    }, [dataString]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // const data_string = await toString(data);
        // formInitialDetails.data = data_string;

        setButtonText("Sending...");
        let response = await fetch("http://localhost:8000/users/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.code == 200) {
            setStatus({ succes: true, message: "Message sent successfully" });
        } else {
            setStatus({
                succes: false,
                message: "Something went wrong, please try again later.",
            });
        }
    };

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <form onSubmit={handleSubmit}>
                    <Row>
                        <Col size={12} md={6}>
                            <TrackVisibility>
                                {({ isVisible }) => (
                                    <div
                                        className={
                                            isVisible
                                                ? "animate__animated animate__fadeIn"
                                                : ""
                                        }
                                    >
                                        <br></br>
                                        <h2>1. tell us about yourself</h2>
                                        <Row>
                                            <Col
                                                size={12}
                                                sm={6}
                                                className="px-1"
                                            >
                                                <input
                                                    type="text"
                                                    value={
                                                        formDetails.firstName
                                                    }
                                                    placeholder="full name"
                                                    onChange={(e) =>
                                                        onFormUpdate(
                                                            "firstName",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </Col>
                                            <Col
                                                size={12}
                                                sm={6}
                                                className="px-1"
                                            >
                                                <input
                                                    type="text"
                                                    value={
                                                        formDetails.lasttName
                                                    }
                                                    placeholder="username"
                                                    onChange={(e) =>
                                                        onFormUpdate(
                                                            "lastName",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </Col>
                                            <Col
                                                size={12}
                                                sm={6}
                                                className="px-1"
                                            >
                                                <input
                                                    type="email"
                                                    value={formDetails.email}
                                                    placeholder="email"
                                                    onChange={(e) =>
                                                        onFormUpdate(
                                                            "email",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </Col>
                                            <Col
                                                size={12}
                                                sm={6}
                                                className="px-1"
                                            >
                                                <input
                                                    type="tel"
                                                    value={formDetails.phone}
                                                    placeholder="phone number"
                                                    onChange={(e) =>
                                                        onFormUpdate(
                                                            "phone",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </Col>
                                            <Col
                                                size={12}
                                                sm={6}
                                                className="px-1"
                                            >
                                                <input
                                                    type="tel"
                                                    value={formDetails.phone}
                                                    placeholder="address"
                                                    onChange={(e) =>
                                                        onFormUpdate(
                                                            "phone",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </Col>
                                            <Col
                                                size={12}
                                                sm={6}
                                                className="px-1"
                                            >
                                                <input
                                                    type="tel"
                                                    value={formDetails.phone}
                                                    placeholder="age"
                                                    onChange={(e) =>
                                                        onFormUpdate(
                                                            "phone",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </Col>
                                            <Col size={12} className="px-1">
                                                <textarea
                                                    rows="6"
                                                    value={formDetails.message}
                                                    placeholder="description"
                                                    onChange={(e) =>
                                                        onFormUpdate(
                                                            "message",
                                                            e.target.value
                                                        )
                                                    }
                                                ></textarea>
                                            </Col>
                                            {status.message && (
                                                <Col>
                                                    <p
                                                        className={
                                                            status.success ===
                                                            false
                                                                ? "danger"
                                                                : "success"
                                                        }
                                                    >
                                                        {status.message}
                                                    </p>
                                                </Col>
                                            )}
                                        </Row>
                                    </div>
                                )}
                            </TrackVisibility>
                        </Col>

                        {/* second section */}
                        <Col size={12} md={6}>
                            <TrackVisibility>
                                {({ isVisible }) => (
                                    <div
                                        className={
                                            isVisible
                                                ? "animate__animated animate__fadeIn"
                                                : ""
                                        }
                                    >
                                        <br></br>
                                        <h2>2. give us your data</h2>
                                        <Col>
                                            <input
                                                type="file"
                                                placeholder="watch history"
                                                onChange={(e) =>
                                                    setData(e.target.files[0])
                                                }
                                            />
                                        </Col>
                                        <br></br>
                                        <br></br>

                                        {/* <Carousel
                                            activeIndex={index}
                                            onSelect={handleSelect}
                                            className="carousel-slider"
                                        >
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={meter1}
                                                    alt="First slide"
                                                />
                                                <Carousel.Caption>
                                                    <h3>First slide label</h3>
                                                    <p>
                                                        Nulla vitae elit libero,
                                                        a pharetra augue mollis
                                                        interdum.
                                                    </p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={meter2}
                                                    alt="Second slide"
                                                />

                                                <Carousel.Caption>
                                                    <h3>Second slide label</h3>
                                                    <p>
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipiscing elit.
                                                    </p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={meter3}
                                                    alt="Third slide"
                                                />

                                                <Carousel.Caption>
                                                    <h3>Third slide label</h3>
                                                    <p>
                                                        Praesent commodo cursus
                                                        magna, vel scelerisque
                                                        nisl consectetur.
                                                    </p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        </Carousel> */}
                                        <img src={contactImg} alt="Header Img" />
                                        <br></br>
                                        <br></br>
                                    </div>
                                )}
                            </TrackVisibility>
                        </Col>
                        <Row>
                            {" "}
                            {data !== "" && (
                                <button onClick={handleSignUp}>
                                    <span>{buttonText}</span>
                                </button>
                            )}
                        </Row>
                    </Row>
                </form>
            </Container>
        </section>
    );
}

export default SignupInfo;
