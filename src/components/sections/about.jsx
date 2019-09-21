import React, { Component } from 'react';
import Headline from '../headline';
import ContactBox from './contactBox';
import AboutBox from './aboutBox';
import { PHONE_WIDTH } from "../../settings"

class About extends Component {
    render() {
        return (
            <div id="about" className="bg-primary text-white py-1 text-center overflow-hidden">
                <Headline title="About" />
                <div className={this.getClasses()}>
                    <AboutBox isPhone={this.props.isPhone} />
                    <ContactBox isPhone={this.props.isPhone} />
                </div>
            </div>
        );
    }

    getClasses() {
        let classes = "justify-content-around";
        if (this.props.isPhone) {
            classes += " col";
        }
        else {
            classes += " row";
        }
        return classes;
    }
}

export default About;