import React, { Component } from 'react';
import SliderArrows from '../sections/sliderArrows';
import { NEWS_ROW_SLIDER, PHONE_WIDTH } from "../../settings.js";
import ArticleService from '../../services/articleService';
import { LoremIpsum } from 'lorem-ipsum';
import NewsRow from './newsRow';

class NewsRowSlider extends Component {
    articleService = new ArticleService(new LoremIpsum());
    state = {
        articles: this.getArticles(),
        visibleArticles: [],
        currentIndex: 0,
        firstLoad: true,
    }

    componentDidMount() {
        this.setState({
            firstLoad: false,
            visibleArticles: this.getVisibleArticles(0)
        })
    }

    render() {
        return (
            <div className="position-relative container col">

                {this.renderSliderArrows()}

                <div className="article-row-container row" style={this.style}>
                    <NewsRow imageError={this.newImageUrl} articles={this.state.visibleArticles} />
                    {this.loadAllArticles()}
                </div>
            </div>
        );
    }

    renderSliderArrows() {
        if (!this.props.isPhone) {
            return (<SliderArrows onLeftArrowClick={this.showPreviousArticle} onRightArrowClick={this.showNextArticle} />);
        }
        return;
    }

    loadAllArticles = () => {
        if (this.state.firstLoad) {
            return (
                <NewsRow imageError={this.newImageUrl} articles={this.state.articles} />
            );
        }
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

    showNextArticle = () => {
        const index = (this.state.currentIndex >= NEWS_ROW_SLIDER.numberOfArticles - 2) ? 0 : this.state.currentIndex + 2;
        const visibleArticles = this.getVisibleArticles(index);

        this.setState({
            currentIndex: index,
            visibleArticles: visibleArticles,
        })
    }

    showPreviousArticle = () => {
        const index = (this.state.currentIndex < 1) ? (NEWS_ROW_SLIDER.numberOfArticles - 2) : (this.state.currentIndex - 2);
        const visibleArticles = this.getVisibleArticles(index);

        this.setState({
            currentIndex: index,
            visibleArticles: visibleArticles,
        })
    }

    getVisibleArticles = (index) => {
        var visibleArticles = []

        while (visibleArticles.length < NEWS_ROW_SLIDER.numberOfVisibleArticles) {
            visibleArticles.push(this.state.articles[index]);
            if (index >= NEWS_ROW_SLIDER.numberOfArticles - 1) {
                index = 0;
            }
            else {
                index++;
            }
        }
        return visibleArticles;
    }


    getArticles() {
        var articles = []
        for (let i = 0; i < NEWS_ROW_SLIDER.numberOfArticles; i++) {
            articles.push({
                imageUrl: this.articleService.getImageUrl(NEWS_ROW_SLIDER.imageWidth, NEWS_ROW_SLIDER.imageHeight),
                imageWidth: NEWS_ROW_SLIDER.imageWidth,
                imageHeight: NEWS_ROW_SLIDER.imageHeight,
                headline: this.articleService.getWords(NEWS_ROW_SLIDER.numberOfWords),
                paragraph: this.articleService.getSentences(NEWS_ROW_SLIDER.numberOfSentences),
                id: {
                    articleId: i
                }
            })
        }
        return articles;
    }

}

export default NewsRowSlider;