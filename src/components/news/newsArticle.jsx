import React, { Component } from 'react';
import RandomImage from '../randomImage';
import TextGenerator from '../../utilities/textGenerator';

class NewsArticle extends Component {
    state = {
        headline: TextGenerator.getWords(5),
        paragraph: TextGenerator.getSentences(3),
    }
    render() {
        return (
            <div className="d-inline-block text-center col news-article">
                <RandomImage height={this.props.imageHeight} width={this.props.imageWidth}></RandomImage>
                <div className="text-left">
                    <h3>{this.state.headline}</h3>
                    <p>{this.state.paragraph}</p>
                </div>
            </div>
        );
    }
}

export default NewsArticle;
