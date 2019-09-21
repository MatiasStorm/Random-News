import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/navbar.jsx";
import Slider from "./components/slider/slider.jsx";
import BreakingNews from './components/sections/breakingNews';
import MostPopular from './components/sections/mostPopular';
import AllNews from './components/sections/allNews';
import About from './components/sections/about';
import { PHONE_WIDTH } from './settings';

class App extends Component {
  state = {
    isPhone: this.isPhone()
  }

  render() {
    return (
      <React.Fragment>
        <NavBar key={1} isPhone={this.state.isPhone} />
        <Slider key={2} isPhone={this.state.isPhone} />
        <BreakingNews key={3} isPhone={this.state.isPhone} />
        <MostPopular key={4} isPhone={this.state.isPhone} />
        <AllNews key={5} isPhone={this.state.isPhone} />
        <About key={6} isPhone={this.state.isPhone} />
      </React.Fragment>
    );
  }

  isPhone() {
    return window.innerWidth < PHONE_WIDTH;
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      const isPhone = window.innerWidth < PHONE_WIDTH;
      this.setState({
        isPhone
      })
    })
  }

}

export default App;
