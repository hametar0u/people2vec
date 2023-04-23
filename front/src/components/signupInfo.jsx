import React, { useState } from "react";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/userim.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Carousel from "react-bootstrap/Carousel";

function SignupInfo() {
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

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("http://localhost:5000/contact", {
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
                                                    placeholder="first name"
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
                                                    placeholder="last name"
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
                                                    placeholder="email address"
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
                                                type="text"
                                                value={formDetails.firstName}
                                                placeholder="watch history"
                                                onChange={(e) =>
                                                    onFormUpdate(
                                                        "data",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </Col>
                                        <br></br>
                                        <br></br>
                                        <Carousel
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
                                        </Carousel>
                                        <br></br>
                                        <br></br>
                                    </div>
                                )}
                            </TrackVisibility>
                        </Col>
                        <Row>
                            {" "}
                            <button type="submit">
                                <span>{buttonText}</span>
                            </button>
                        </Row>
                    </Row>
                </form>
            </Container>
        </section>
    );
}

export default SignupInfo;
