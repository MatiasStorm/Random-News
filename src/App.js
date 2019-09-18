import React from 'react';
import './App.css';
import NavBar from "./components/navbar.jsx";
import Slider from "./components/slider/slider.jsx";
import BreakingNews from './components/sections/breakingNews';
import MostPopular from './components/sections/mostPopular';
import AllNews from './components/sections/allNews';
import Contact from './components/sections/contact';

function App() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Slider></Slider>
      <BreakingNews></BreakingNews>
      <MostPopular></MostPopular>
      <AllNews></AllNews>
      <Contact></Contact>
    </React.Fragment>
  );
}

export default App;
