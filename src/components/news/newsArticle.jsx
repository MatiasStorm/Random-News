import React, { Component } from 'react';
import RandomImage from '../randomImage';
import TextGenerator from '../../utilities/textGenerator';

class NewsArticle extends Component {
    state = {
        headline: TextGenerator.getWords(5),
        paragraph: TextGenerator.getSentences(5),
    }
    render() {
        return (
            <div className="d-inline-block text-center col">
                <RandomImage height={this.props.imageHeight} width={this.props.imageWidth}></RandomImage>
                <div className="text-left">
                    <h2>{this.state.headline}</h2>
                    <p>{this.state.paragraph}</p>
                </div>
            </div>
        );
    }
}

export default NewsArticle;
