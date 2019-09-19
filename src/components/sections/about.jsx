import React, { Component } from 'react';
import Headline from '../headline';
import ContactBox from './contactBox';
import AboutBox from './aboutBox';

class About extends Component {
    state = {}
    render() {
        return (
            <div id="about" className="bg-primary text-white py-1 text-center overflow-hidden">
                <Headline title="About" />
                <div className="row justify-content-around">
                    <AboutBox />
                    <ContactBox />
                </div>
            </div>
        );
    }
}

export default About;