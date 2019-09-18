import React, { Component } from 'react';
import NewsArticle from './newsArticle';

class NewsColumn extends Component {
    state = {}
    render() {
        return (
            this.getArticles()
        );
    }

    getArticles() {
        if (Math.random() > 0.5) {
            return (
                <NewsArticle imageHeight={700} imageWidth={500}></NewsArticle>
            );
        }
        else {
            return (
                <div className="col">
                    <NewsArticle imageHeight={300} imageWidth={500}></NewsArticle>
                    <NewsArticle imageHeight={300} imageWidth={500}></NewsArticle>
                </div>
            );
        }
    }
}

export default NewsColumn;
