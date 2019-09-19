import React from 'react';
import './App.css';
import NavBar from "./components/navbar.jsx";
import Slider from "./components/slider/slider.jsx";
import BreakingNews from './components/sections/breakingNews';
import MostPopular from './components/sections/mostPopular';
import AllNews from './components/sections/allNews';
import About from './components/sections/about';

function App() {
  return (
    <React.Fragment>
      <NavBar key={1}></NavBar>
      <Slider key={2}></Slider>
      <BreakingNews key={3}></BreakingNews>
      <MostPopular key={4}></MostPopular>
      <AllNews key={5}></AllNews>
      <About key={6}></About>
    </React.Fragment>
  );
}

export default App;
