import React, { Component } from 'react';
import TextGenerator from '../../utilities/textGenerator';

class AboutBox extends Component {
    state = {
        aboutText: TextGenerator.getSentences(10)
    }
    render() {
        return (
            <div className={this.getClasses()}>
                <h2>What is RandomNews</h2>
                <p className="text-left">{this.state.aboutText}</p>
            </div>
        );
    }

    getClasses() {
        let classes = "";
        if (this.props.isPhone) {
            classes += "col"
        }
        else {
            classes += "col-4"
        }
        return classes;
    }
}

export default AboutBox;