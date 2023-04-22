import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Matches } from "./components/Skills";
import Profile from './profile';
import Login from './login';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Banner />
      <Matches /> */}
    </div>
  );
}

export default App;