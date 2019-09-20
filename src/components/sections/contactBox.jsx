import React, { Component } from 'react';
import SocialIcons from './socialIcons';

class ContactBox extends Component {
    state = {
        classes: this.getClasses()
    }
    render() {
        return (
            <div className={this.state.classes}>
                <h2>Contact</h2>
                <p>RandomNews.com <br />
                    Random News Service Ltd. <br />
                    Random News Headquators <br /> <br />
                    {Math.floor(Math.random() * 100) + " Random Street"} <br />
                    RandomCity <br />
                    RandomCountry <br />
                    +05 496 325 6854 685 <br />
                    info@random-news.com</p>
                <SocialIcons />
            </div>);
    }

    componentDidMount() {
        window.addEventListener("resize", this.setClasses);
    }

    getClasses() {
        let classes = "";
        if (window.screen.width < this.props.phoneWidth) {
            classes += "col"
        }
        else {
            classes += "text-left col-4"
        }
        return classes;
    }

    setClasses = () => {
        this.setState({
            classes: this.getClasses()
        })
    }

}

export default ContactBox;