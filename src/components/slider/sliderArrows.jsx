import React, { Component } from 'react';

const LeftArrow = (props) => {
    return (
        <a className="carousel-control-prev" onClick={props.handleClick}>
            <span className="carousel-control-prev-icon " aria-hidden="true"></span>
        </a>
    );
};

const RightArrow = (props) => {
    return (
        <a className="carousel-control-next" onClick={props.handleClick}>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
    );
};

class SliderArrows extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <LeftArrow handleClick={this.props.prevSlide}></LeftArrow>
                <RightArrow handleClick={this.props.nextSlide}></RightArrow>
            </React.Fragment>
        );
    }
}

export default SliderArrows;



