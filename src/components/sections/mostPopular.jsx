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
            <div id="most-popular">
                <Headline title="Most Popular"></Headline>
                <div className="container border-bottom-4 ">
                    {this.state.topics.map((topic, index) =>
                        <React.Fragment>
                            <h1 className="text-weight-bolder"><u>{topic + ":"}</u></h1>
                            <NewsRow key={index}></NewsRow>
                        </React.Fragment>
                    )}
                </div>
            </div>
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