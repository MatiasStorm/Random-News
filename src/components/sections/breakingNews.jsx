import React, { Component } from 'react';
import Headline from '../headline';
import NewsColumn from '../news/newsColumns';

class BreakingNews extends Component {
    state = {
        title: "Breaking News",
    }
    render() {
        return (
            <div className="bg-secondary h-100 overflow-hidden">
                <Headline title={this.state.title}></Headline>
                <div className="container">
                    <div className="row justify-content-around">
                        <NewsColumn></NewsColumn>
                        <NewsColumn></NewsColumn>
                        <NewsColumn></NewsColumn>
                    </div>
                </div>
            </div>);
    }
}

export default BreakingNews;