import React, { Component } from 'react';
import SliderArrows from '../sections/sliderArrow2';
import { NEWS_ROW } from "../../settings.js";
import ArticleService from '../../services/articleService';
import { LoremIpsum } from 'lorem-ipsum';
import NewsArticle from './newsArticle';

class NewsRow extends Component {
    articleService = new ArticleService(new LoremIpsum());
    render() {
        return (
            <div className="article-row-container row" style={this.style}>
                {this.props.articles.map(article =>
                    <NewsArticle
                        key={article.id}
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