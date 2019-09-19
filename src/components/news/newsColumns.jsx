import React, { Component } from 'react';
import NewsArticle from './newsArticle';
import { NEWS_COLUMN } from '../../settings';
import ArticleService from '../../services/articleService';
import { LoremIpsum } from 'lorem-ipsum';

class NewsColumn extends Component {
    articleService = new ArticleService(new LoremIpsum());
    state = {
        articles: this.getArticles()
    }
    render() {
        return (
            <div className="col">
                {this.state.articles.map(article =>
                    (<NewsArticle
                        key={article.id.articleId}
                        imageUrl={article.imageUrl}
                        headline={article.headline}
                        paragraph={article.paragraph}
                        id={article.id}
                        imageError={this.newImageUrl} />))}
            </div>
        );
    }

    newImageUrl = (id) => {
        let article = this.state.articles.filter((a) => a.id.articleId === id.articleId)[0];
        const url = this.articleService.getImageUrl(article.imageWidth, article.imageHeight);
        article.imageUrl = url;
        const articles = [...this.state.articles];
        const index = articles.indexOf(article);
        articles[index] = article;
        this.setState({
            articles: articles
        })
    }

    getArticles() {
        let articles = [];
        if (Math.random() > 0.5) {
            articles.push({
                imageUrl: this.articleService.getImageUrl(NEWS_COLUMN.singleImageWidth, NEWS_COLUMN.singleIimageHeight),
                imageWidth: NEWS_COLUMN.singleImageWidth,
                imageHeight: NEWS_COLUMN.singleIimageHeight,
                headline: this.articleService.getWords(NEWS_COLUMN.numberOfWords),
                paragraph: this.articleService.getSentences(NEWS_COLUMN.numberOfWords),
                id: {
                    articleId: 1
                }
            });
        }
        else {
            articles.push({
                imageUrl: this.articleService.getImageUrl(NEWS_COLUMN.doubleImageWidth, NEWS_COLUMN.doubleIimageHeight),
                imageWidth: NEWS_COLUMN.doubleImageWidth,
                imageHeight: NEWS_COLUMN.doubleIimageHeight,
                headline: this.articleService.getWords(NEWS_COLUMN.numberOfWords),
                paragraph: this.articleService.getSentences(NEWS_COLUMN.numberOfWords),
                id: {
                    articleId: 1
                }
            });
            articles.push({
                imageUrl: this.articleService.getImageUrl(NEWS_COLUMN.doubleImageWidth, NEWS_COLUMN.doubleIimageHeight),
                imageWidth: NEWS_COLUMN.doubleImageWidth,
                imageHeight: NEWS_COLUMN.doubleIimageHeight,
                headline: this.articleService.getWords(NEWS_COLUMN.numberOfWords),
                paragraph: this.articleService.getSentences(NEWS_COLUMN.numberOfWords),
                id: {
                    articleId: 2
                }
            });
        }
        return articles
    }
}

export default NewsColumn;
