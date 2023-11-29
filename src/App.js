import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-icons";
import Home from "./components/home";
import "./style/home.css";
import About from "./components/About";
import "./style/about";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Routes,
} from "react-router-dom";

import React from "react";
import { BrowserFirefox } from "react-bootstrap-icons";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
