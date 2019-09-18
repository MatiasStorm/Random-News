import React, { Component } from 'react';
import NewsArticle from './newsArticle';

class NewsColumn extends Component {
    state = {
        numberOfSentences: 3
    }
    render() {
        return (
            this.getArticles()
        );
    }

    getArticles() {
        if (Math.random() > 0.5) {
            return (
                <NewsArticle
                    numberOfSentences={this.state.numberOfSentences}
                    imageHeight={700}
                    imageWidth={500} />
            );
        }
        else {
            return (
                <div className="col">
                    <NewsArticle
                        numberOfSentences={this.state.numberOfSentences}
                        imageHeight={300}
                        imageWidth={500} />
                    <NewsArticle
                        numberOfSentences={this.state.numberOfSentences}
                        imageHeight={300}
                        imageWidth={500} />
                </div>
            );
        }
    }
}

export default NewsColumn;
