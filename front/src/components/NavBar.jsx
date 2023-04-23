import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/bubble2.png";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route, useNavigate } from "react-router-dom";
import Profile from "../profile";
import Test from "../landing";
import Login from "../login";
import Signup from "../signup";
import Matches from "../matches";
import APITester from "../apitester";
import BaseMap from "../Map";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [buttonname, setbuttonname] = useState("login page");
    // const navigate = useNavigate();

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

    const handleSignUp = async (e) => {
        if (clicked) {
            setbuttonname = "sign out";
        } else {
            setbuttonname = "sign in";
        }
    };

    return (
        <Router>
            <Routes>
                <Route path="/Profile" element={<Profile />}></Route>
                <Route path="/Login" element={<Login />}></Route>
                <Route path="/" element={<Test />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/matches" element={<Matches />}></Route>
                <Route path="/apitester" element={<APITester />}></Route>
                <Route path="/Map" element={<BaseMap />}></Route>
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
                                href="/"
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
                            <HashLink to="/Login">
                                <button className="vvd" onClick={handleSignUp}>
                                    <span>{buttonname}</span>
                                </button>
                            </HashLink>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    );
};
