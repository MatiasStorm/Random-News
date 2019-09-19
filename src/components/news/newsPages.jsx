import React, { Component } from 'react';
import NewsPage from './newsPage';
import { NEWS_PAGES } from '../../settings';
import NewsArticle from './newsArticle';
import ArticleService from '../../services/articleService';
import { LoremIpsum } from 'lorem-ipsum';

class NewsPages extends Component {
    articleService = new ArticleService(new LoremIpsum());
    state = {
        pages: this.getPages(),
    }
    render() {
        console.log(this.state.pages)
        return (
            <div>
                {this.state.pages.map(page =>
                    <NewsPage page={page} key={page.id} />)}
                {/* Navigation */}
            </div>
        );
    }



    getPages() {
        let pages = []
        for (let i = 0; i < NEWS_PAGES.numberOfPages; i++) {
            let page = {
                id: i,
                rows: []
            };
            for (let j = 0; j < NEWS_PAGES.numberOfRowsPerPage; j++) {
                let row = {
                    id: j,
                    articles: []
                }
                for (let k = 0; k < NEWS_PAGES.numberOfArticlesPerRow; k++) {
                    row.articles.push({
                        imageUrl: this.articleService.getImageUrl(NEWS_PAGES.imageWidth, NEWS_PAGES.imageHeight),
                        imageWidth: NEWS_PAGES.imageWidth,
                        imageHeight: NEWS_PAGES.imageHeight,
                        headline: this.articleService.getWords(NEWS_PAGES.numberOfWords),
                        paragraph: this.articleService.getSentences(NEWS_PAGES.numberOfSentences),
                        imageError: this.newImageUrl,
                        id: k
                    })
                }
                page.rows.push(row);
            }
            pages.push(page);
        }
        return pages;
    }

    newImageUrl(id) {
        console.log("Error")
        // let article = this.state.articles.filter((a) => a.id === id)[0];
        // const url = this.articleService.getImageUrl(article.imageWidth, article.imageHeight);
        // article.imageUrl = url;
        // const articles = [...this.state.articles];
        // const index = articles.indexOf(article);
        // articles[index] = article;
        // this.setState({
        //     articles: articles
        // })
    }
}

export default NewsPages;
