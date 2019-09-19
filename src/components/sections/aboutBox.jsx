import React, { Component } from 'react';
import TextGenerator from '../../utilities/textGenerator';

class AboutBox extends Component {
    state = {}
    render() {
        return (
            <div className="col-4">
                <h2>What is RandomNews</h2>
                <p className="text-left">{TextGenerator.getSentences(10)}</p>
            </div>
        );
    }
}

export default AboutBox;