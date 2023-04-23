import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/frog.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

function ProfileInfo() {
    const formInitialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    };
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState("u p d a t e");
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

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <img
                                    className={
                                        isVisible
                                            ? "animate__animated animate__zoomIn"
                                            : ""
                                    }
                                    src={contactImg}
                                    alt="Contact Us"
                                />
                            )}
                        </TrackVisibility>
                    </Col>
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
                                    <h2>your profile</h2>
                                    <form onSubmit={handleSubmit}>
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
                                                    placeholder="name: Jordan Lin"
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
                                                    placeholder="username: jlin123"
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
                                                    placeholder="email: Jordan@gmail.com"
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
                                                    placeholder="location: Delaware"
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
                                                    placeholder="age: 20"
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
                                                    placeholder="phone #: 2425839134"
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
                                                    placeholder="likes water and long walks on the beach"
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
                                    </form>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default ProfileInfo;
