import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Profile from "../profile";
import Test from "../landing";
import Login from "../login";
import Signup from "../signup";
import Matches from "../matches";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Router>
            <Routes>
                <Route path="/Profile" element={<Profile />}></Route>
                <Route path="/Test" element={<Test />}></Route>
                <Route path="/" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/matches" element={<Matches />}></Route>
            </Routes>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link
                                href="/Test"
                                className={
                                    activeLink === "home"
                                        ? "active navbar-link"
                                        : "navbar-link"
                                }
                            >
                                home
                            </Nav.Link>
                            <Nav.Link
                                href="/Profile"
                                className={
                                    activeLink === "matches"
                                        ? "active navbar-link"
                                        : "navbar-link"
                                }
                            >
                                profile
                            </Nav.Link>
                            <Nav.Link
                                href="/matches"
                                className={
                                    activeLink === "matches"
                                        ? "active navbar-link"
                                        : "navbar-link"
                                }
                            >
                                matches
                            </Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <HashLink to="/">
                                <button className="vvd">
                                    <span>sign out</span>
                                </button>
                            </HashLink>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    );
};
