import React from 'react';
import './App.css';
import NavBar from "./components/navbar.jsx";
import Slider from "./components/slider/slider.jsx";
import BreakingNews from './components/sections/breakingNews';
import MostPopular from './components/sections/mostPopular';

function App() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Slider></Slider>
      <BreakingNews></BreakingNews>
      <MostPopular></MostPopular>
    </React.Fragment>
  );
}

export default App;
