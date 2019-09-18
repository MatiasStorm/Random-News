import React, { Component } from 'react';
import NewsRow from '../news/newsRow';
import Headline from '../headline';
import TextGenerator from '../../utilities/textGenerator';

class MostPopular extends Component {
    state = {
        topics: this.getTopics(4)
    }
    render() {
        return (
            <React.Fragment>
                <Headline title="Most Popular"></Headline>
                <div className="container border-bottom">
                    {this.state.topics.map((title) =>
                        <React.Fragment>
                            <h1 className="text-weight-bolder"><u>{title + ":"}</u></h1>
                            <NewsRow></NewsRow>
                        </React.Fragment>
                    )}
                </div>
            </React.Fragment>
        );
    }

    getTopics(n) {
        let topics = []
        for (let i = 0; i < n; i++) {
            topics.push(TextGenerator.getWords(1))
        }
        return topics;
    }
}

export default MostPopular;