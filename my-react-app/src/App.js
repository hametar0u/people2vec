import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Matches from "./pages/Matches";
import Map from "./pages/Map";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/Landing" element={<Home />}></Route>
                <Route path="/Profile" element={<Profile />}></Route>
                <Route path="/Matches" element={<Matches />}></Route>
                <Route path="/Map" element={<Map />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
