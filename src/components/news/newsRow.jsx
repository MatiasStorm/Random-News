import React, { Component } from 'react';
import NewsArticle from './newsArticle';

class NewsRow extends Component {
    state = {}
    render() {
        return (
            <div className="row">
                <NewsArticle imageHeight={300} imageWidth={500}></NewsArticle>
                <NewsArticle imageHeight={300} imageWidth={500}></NewsArticle>
                <NewsArticle imageHeight={300} imageWidth={500}></NewsArticle>
                <NewsArticle imageHeight={300} imageWidth={500}></NewsArticle>
            </div>
        );
    }
}

export default NewsRow;