/* eslint-disable no-unused-vars */
import React from "react";


import NaviBar from "./Components/NaviBar";
import MainContainer from "./Components/MainContainer";
import "./App.css";
import "./index.css";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div id="container">
        <h1></h1>
        <NaviBar /> 
        <MainContainer /> 
      </div>
      <Footer />
    </>
  );
}

export default App;