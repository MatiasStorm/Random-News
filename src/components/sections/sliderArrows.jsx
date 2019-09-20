import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons/faAngleDoubleLeft";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons/faAngleDoubleRight";

class SliderArrows extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <span>
                    <FontAwesomeIcon onClick={this.props.onLeftArrowClick} className="left-arrow" style={{ width: "3%" }} icon={faAngleDoubleLeft}></FontAwesomeIcon>
                </span>
                <span>
                    <FontAwesomeIcon onClick={this.props.onRightArrowClick} className="right-arrow" style={{ width: "3%" }} icon={faAngleDoubleRight}></FontAwesomeIcon>
                </span>
            </React.Fragment>
        );
    }
}

export default SliderArrows;