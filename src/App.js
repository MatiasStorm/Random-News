import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/navbar.jsx";
import Slider from "./components/slider/slider.jsx";

function App() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Slider></Slider>
    </React.Fragment>
  );
}

export default App;
