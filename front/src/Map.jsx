import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BaseMap from "./components/BaseMap";
import "./components/card.css";
import "react-multi-carousel/lib/styles.css";
import Cards from "./components/card";
import { Container, Row, Col } from "react-bootstrap";

const MapObj = () => {
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
    const navigate = useNavigate();
    return (

        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            
                            <div style={{marginTop: "1000px"}}></div>
                            <BaseMap style={{height: "100vw"}} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
 
export default MapObj;