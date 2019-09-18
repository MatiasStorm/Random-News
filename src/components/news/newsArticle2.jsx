import React, { Component } from 'react';
import RandomImage2 from '../randomImage2';
import TextGenerator from '../../utilities/textGenerator';

class NewsArticle extends Component {
    constructor(imageWidth, imageHeight, numberOfSentences, id) {
        super();
        this.state = {
            headline: TextGenerator.getWords(5),
            paragraph: TextGenerator.getSentences(numberOfSentences),
            imageHeight: imageHeight,
            imageWidth: imageWidth,
            id: id,
            image: new RandomImage2(imageWidth, imageHeight)
        }
    }
    render() {
        return (
            <div className="d-inline-block text-center col news-article">
                {this.state.image.render()}
                {/* <img src={"https://picsum.photos/id/" + this.state.id + "/200/200"} alt="" /> */}
                {/* <RandomImage height={this.state.imageHeight} width={this.state.imageWidth}></RandomImage> */}
                <div className="text-left">
                    <h3>{this.state.headline}</h3>
                    <p>{this.state.paragraph}</p>
                </div>
            </div>
        );
    }
}

export default NewsArticle;
