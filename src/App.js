import React from 'react';
import './App.css';
import NavBar from "./components/navbar.jsx";
import Slider from "./components/slider/slider.jsx";

function App() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Slider></Slider>
      <div style={{ height: "2000px", backgroundColor: "green" }}></div>
    </React.Fragment>
  );
}

export default App;
