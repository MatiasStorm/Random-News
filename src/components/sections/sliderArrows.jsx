import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons/faAngleDoubleLeft";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons/faAngleDoubleRight";

class SliderArrows extends Component {
    state = {}
    style = {
        width: "3%" // Width has to be defined here
    }
    render() {
        return (
            <div className="">
                <FontAwesomeIcon
                    onClick={this.props.onLeftArrowClick}
                    className="left-arrow position-absolute zindex-fixed h-100"
                    style={this.style}
                    icon={faAngleDoubleLeft}></FontAwesomeIcon>
                <FontAwesomeIcon
                    onClick={this.props.onRightArrowClick}
                    className="right-arrow position-absolute h-100"
                    style={this.style}
                    icon={faAngleDoubleRight}></FontAwesomeIcon>
            </div>
        );
    }
}

export default SliderArrows;