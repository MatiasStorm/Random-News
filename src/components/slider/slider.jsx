import React, { Component } from 'react';
import Slide from './slide.jsx';

class Slider extends Component {
    state = {}
    render() {
        return (
            <div>
                <Slide></Slide>
                <Slide></Slide>
                <Slide></Slide>
                <Slide></Slide>
            </div>
        );
    }
}

export default Slider;