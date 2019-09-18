import React, { Component } from 'react';
import NewsArticle2 from './newsArticle2';
import SliderArrows from '../sections/sliderArrow2';
import { NEWS_ROW } from "../../settings.js";

class NewsRow extends Component {
    state = {
        articles: this.getArticles(),
        visibleArticles: [],
        currentIndex: 0,
    }

    componentDidMount() {
        const visibleArticles = this.getVisibleArticles();
        this.setState({
            visibleArticles: visibleArticles
        })
    }


    render() {
        return (
            <div className="row border border-danger position-relative">
                <SliderArrows onLeftArrowClick={this.showPreviousArticle} onRightArrowClick={this.showNextArticle} />
                {this.state.visibleArticles.map(article =>
                    article.render())}
            </div>
        );
    }

    showNextArticle = () => {
        let index = (this.state.currentIndex >= NEWS_ROW.numberOfArticles - 1) ? 0 : this.state.currentIndex + 1;
        const visibleArticles = this.getVisibleArticles();

        this.setState({
            currentIndex: index,
            visibleArticles: visibleArticles,
        })
        this.render();
    }

    showPreviousArticle = () => {
        const index = (this.state.currentIndex < 1) ? (NEWS_ROW.numberOfArticles - 1) : (this.state.currentIndex - 1);
        const visibleArticles = this.getVisibleArticles();

        this.setState({
            currentIndex: index,
            visibleArticles: visibleArticles,
        })
    }

    getVisibleArticles = () => {
        var visibleArticles = []
        var index = this.state.currentIndex
        while (visibleArticles.length < NEWS_ROW.numberOfVisibleArticles) {
            visibleArticles.push(this.state.articles[index]);
            if (index >= NEWS_ROW.numberOfArticles - 1) {
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
        for (let i = 0; i < NEWS_ROW.numberOfArticles; i++) {
            articles.push(new NewsArticle2(NEWS_ROW.imageWidth, NEWS_ROW.imageHeight, NEWS_ROW.numberOfSentences, i))
        }
        return articles;
    }

}

export default NewsRow;