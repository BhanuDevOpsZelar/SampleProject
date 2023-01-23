import "./App.css";

import React, { useState } from 'react'
import LifeCycle from "./LifeCycle";
import LifeCycle2 from "./LifeCycle2";
import FetchApi from "./FetchApi";
import PredictAgeFetch from "./PredictAgeFetch";
import ApiTask from "./ApiTask";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./Menu";
import Contact from "./Contact";
const App = () => {

  return (
    <div className="App">
      <Router>
        <h1>NAVBAR</h1>
        <Link to="/">Home</Link> <span></span>
        <Link to="/menu">Menu</Link> <span></span>
        <Link to="/contact">Contact</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h3>Page Not Found</h3>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

