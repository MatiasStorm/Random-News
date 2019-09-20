import React, { Component } from 'react';
import TextGenerator from '../../utilities/textGenerator';

class AboutBox extends Component {
    state = {
        classes: this.getClasses()
    }

    render() {
        return (
            <div className={this.state.classes}>
                <h2>What is RandomNews</h2>
                <p className="text-left">{TextGenerator.getSentences(10)}</p>
            </div>
        );
    }

    getClasses() {
        let classes = "";
        if (window.screen.width < this.props.phoneWidth) {
            classes += "col"
        }
        else {
            classes += "col-4"
        }
        return classes;
    }

    componentDidMount() {
        window.addEventListener("resize", this.setClasses);
    }

    setClasses = () => {
        this.setState({
            classes: this.getClasses()
        })
    }


}

export default AboutBox;