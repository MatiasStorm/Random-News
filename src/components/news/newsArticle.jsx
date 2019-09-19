import React, { Component } from 'react';

class NewsArticle extends Component {
    render() {
        return (
            <div
                className="d-inline-block col news-article"
            >
                <img
                    src={this.props.imageUrl}
                    onError={() => this.props.imageError(this.props.id)}
                    alt="" />
                <div className="">
                    <h3>{this.props.headline}</h3>
                    <p>{this.props.paragraph}</p>
                </div>
            </div>
        );
    }
}

export default NewsArticle;
