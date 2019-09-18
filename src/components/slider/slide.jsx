import React, { Component } from 'react';
import RandomImage from '../randomImage';
import TextGenerator from '../../utilities/textGenerator';

class Slide extends Component {
    state = {
        headline: TextGenerator.getWords(5),
        paragraph: TextGenerator.getSentences(5)
    }

    render() {
        return (
            <span className="slide d-inline-block position-relative" style={this.style}>
                <RandomImage
                    height={this.props.imageHeight}
                    width={this.props.imageWidth}
                />

                <span className="slide-text-container w-100 h-50 z-index-sticky" >
                    <h2 className="d-inline z-index-sticky">{this.state.headline}</h2>
                    <p>{this.state.paragraph}</p>
                </span>
            </span>
        );
    }
}

export default Slide;