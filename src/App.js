import React from 'react';
import './App.css';
import NavBar from "./components/navbar.jsx";
import Slider from "./components/slider/slider.jsx";
import BreakingNews from './components/sections/breakingNews';
import MostPopular from './components/sections/mostPopular';
import AllNews from './components/sections/allNews';

function App() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Slider></Slider>
      <BreakingNews></BreakingNews>
      <MostPopular></MostPopular>
      <AllNews></AllNews>
    </React.Fragment>
  );
}

export default App;
