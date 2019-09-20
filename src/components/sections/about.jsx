import React, { Component } from 'react';
import Headline from '../headline';
import ContactBox from './contactBox';
import AboutBox from './aboutBox';
import { PHONE_WIDTH } from "../../settings"

class About extends Component {
    phoneWidth = PHONE_WIDTH
    state = {
        classes: this.getClasses(),
    }

    componentDidMount() {
        window.addEventListener("resize", this.setClasses)
    }

    render() {
        console.log(window.screen.width)
        return (
            <div id="about" className="bg-primary text-white py-1 text-center overflow-hidden">
                <Headline title="About" />
                <div className={this.getClasses()}>
                    <AboutBox phoneWidth={this.phoneWidth} />
                    <ContactBox phoneWidth={this.phoneWidth} />
                </div>
            </div>
        );
    }

    getClasses() {
        let classes = "justify-content-around";
        if (window.screen.width < this.phoneWidth) {
            classes += " col";
        }
        else {
            classes += " row";
        }
        return classes;
    }

    setClasses = () => {
        this.setState({
            classes: this.getClasses()
        })
    }

}

export default About;