import React, { Component } from 'react';
import NewsArticle from './newsArticle';

class NewsRow extends Component {
    render() {
        return (
            <div className="article-row-container row" style={this.style}>
                {this.props.articles.map(article =>
                    <NewsArticle
                        key={article.id.articleId}
                        headline={article.headline}
                        paragraph={article.paragraph}
                        imageUrl={article.imageUrl}
                        imageHeight={article.imageHeight}
                        imageWidth={article.imageWidth}
                        id={article.id}
                        imageError={this.props.imageError}
                    ></NewsArticle>)}
            </div>
        );
    }
}

export default NewsRow;