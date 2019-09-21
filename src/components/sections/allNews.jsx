import React, { Component } from 'react';
import Headline from '../headline';
import NewsPages from '../news/newsPages';

class AllNews extends Component {
    state = {}
    render() {
        return (
            <div id="all-news">
                <Headline title="All News"></Headline>
                <NewsPages isPhone={this.props.isPhone}></NewsPages>
            </div>
        );
    }
}

export default AllNews;
