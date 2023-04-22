import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Matches } from "./components/Skills";

function Test() {
  return (
    <div className="App">
      <Banner />
      <Matches />
    </div>
  );
}

export default Test;
