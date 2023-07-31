/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import Blue from "./Blue";
import Red from "./Red";
import Green from "./Green";
import Yellow from "./Yellow";
import Orange from "./Orange"; 
import Home from "./Home";
function MainContainer() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/green" element={<Green />} /> 
        <Route path="/yellow" element={<Yellow />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/orange" element={<Orange />} />
      </Routes>
    </div>
  );
}

export default MainContainer;