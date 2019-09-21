import React, { Component } from 'react';
import Headline from '../headline';
import TextGenerator from '../../utilities/textGenerator';
import NewsRowSlider from '../news/newsRowSlider';
import { MOST_POPULAR_TOPICS } from '../../settings';


class MostPopular extends Component {
    state = {
        topics: this.getTopics(MOST_POPULAR_TOPICS)
    }
    render() {
        // console.log("Most popular ", this.props.isPhone)
        return (
            <div id="most-popular">
                <div className="border-bottom border-5 container">
                    <Headline title="Most Popular"></Headline>
                    {this.state.topics.map((topic, index) =>
                        <div key={index}>
                            <h1 className="text-weight-bolder my-3 border-bottom border-3">{topic + ":"}</h1>
                            <NewsRowSlider isPhone={this.props.isPhone} />
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