import React, { Component } from 'react';
import NewsPage from './newsPage';
import { NEWS_PAGES } from '../../settings';
import ArticleService from '../../services/articleService';
import { LoremIpsum } from 'lorem-ipsum';
import PageNavigation from './pageNavigation';

class NewsPages extends Component {
    articleService = new ArticleService(new LoremIpsum());
    state = {
        pages: this.getPages(),
        currentIndex: 0,
    }
    render() {
        const { pages, currentIndex } = this.state;
        return (
            <div className="">
                <NewsPage page={pages[currentIndex]} imageError={this.newImageUrl} />
                <PageNavigation currentPage={currentIndex} nextPage={this.nextPage} previosPage={this.previosPage} goToPage={this.goToPage} />
            </div>
        );
    }

    nextPage = () => {
        const newIndex = this.state.currentIndex + 1
        let pages = [...this.state.pages];
        if (pages[newIndex] == null) {
            pages[newIndex] = this.getPage(newIndex);
        }
        this.setState({
            currentIndex: newIndex,
            pages: pages
        })
    }

    previosPage = () => {
        if (this.state.currentIndex > 0) {
            this.setState(oldState => ({
                currentIndex: oldState.currentIndex - 1
            }))
        }
    }

    goToPage = (index) => {
        let pages = [...this.state.pages]
        for (let i = this.state.currentIndex; i <= index; i++) {
            if (pages[i] == null) {
                pages[i] = this.getPage(i);
            }
        }
        this.setState({
            currentIndex: index,
            pages: pages
        })
    }

    getPages() {
        let pages = []
        for (let pageId = 0; pageId < NEWS_PAGES.numberOfPages; pageId++) {
            pages.push(this.getPage(pageId));
        }
        return pages;
    }

    getPage(pageId) {
        let page = {
            id: pageId,
            rows: []
        };
        for (let rowId = 0; rowId < NEWS_PAGES.numberOfRowsPerPage; rowId++) {
            page.rows.push(this.getRow(pageId, rowId));
        }
        return page;
    }

    getRow(pageId, rowId) {
        let row = {
            id: rowId,
            articles: []
        }
        for (let articleId = 0; articleId < NEWS_PAGES.numberOfArticlesPerRow; articleId++) {
            row.articles.push(this.getArticle(pageId, rowId, articleId))
        }
        return row;
    }

    getArticle(pageId, rowId, articleId) {
        return ({
            imageUrl: this.articleService.getImageUrl(NEWS_PAGES.imageWidth, NEWS_PAGES.imageHeight),
            imageWidth: NEWS_PAGES.imageWidth,
            imageHeight: NEWS_PAGES.imageHeight,
            headline: this.articleService.getWords(NEWS_PAGES.numberOfWords),
            paragraph: this.articleService.getSentences(NEWS_PAGES.numberOfSentences),
            id: {
                pageId: pageId,
                rowId: rowId,
                articleId: articleId
            }
        });
    }

    newImageUrl = (id) => {
        let pages = [...this.state.pages];

        const page = pages.filter(p => p.id === id.pageId)[0];
        const pageIndex = pages.indexOf(page);

        const row = page.rows.filter(r => r.id === id.rowId)[0]
        const rowIndex = page.rows.indexOf(row)

        let article = row.articles.filter(a => a.id.articleId === id.articleId)[0];
        const articleIndex = row.articles.indexOf(article);

        article.imageUrl = this.articleService.getImageUrl(NEWS_PAGES.imageWidth, NEWS_PAGES.imageHeight);

        pages[pageIndex].rows[rowIndex].articles[articleIndex] = article

        this.setState({
            pages: pages,
        })
    }
}

export default NewsPages;
