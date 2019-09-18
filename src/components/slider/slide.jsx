import React, { Component } from 'react';
import RandomImage from '../randomImage';
import { LoremIpsum } from "lorem-ipsum";

class Slide extends Component {
    state = {
        headline: this.getHeadline(),
        paragraph: this.getParagraph()
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

    getHeadline() {
        const lorem = new LoremIpsum()
        return lorem.generateWords(5);
    }

    getParagraph() {
        const lorem = new LoremIpsum()
        return lorem.generateSentences(5)
    }
}

export default Slide;