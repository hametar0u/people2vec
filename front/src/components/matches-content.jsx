import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Cards from "./card";
import { Container, Row, Col } from "react-bootstrap";

export const MatchesContent = () => {
    const [people, setPeople] = useState([
        "bob shirley",
        "joanne tucker",
        "ashley jones",
    ]);

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

    async function handleClick(thing) {}

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>m a t c h e s</h2>
                            <p>
                                here you will find all of your matches and
                                hopefully make some new friends!
                            </p>
                            <Row>
                                <Col size={12} md={6}>
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
                                                    </button>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </Col>
                                <Col size={12} md={6}>
                                    <br></br>
                                    <br></br>
                                    <Cards></Cards>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
