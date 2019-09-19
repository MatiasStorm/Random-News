import React, { Component } from 'react';
import NewsRow from '../news/newsRow';
import Headline from '../headline';
import TextGenerator from '../../utilities/textGenerator';
import NewsRowSlider from '../news/newsRowSlider';


class MostPopular extends Component {
    state = {
        topics: this.getTopics(4)
    }
    render() {
        return (
            <div id="most-popular">
                <div className="border-bottom-4 container">
                    <Headline title="Most Popular"></Headline>
                    {this.state.topics.map((topic, index) =>
                        <div key={index}>
                            <h1 className="text-weight-bolder p-3"><u>{topic + ":"}</u></h1>
                            <NewsRowSlider />
                        </div>
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