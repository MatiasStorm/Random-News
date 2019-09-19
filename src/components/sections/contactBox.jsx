import React, { Component } from 'react';
import SocialIcons from './socialIcons';

class ContactBox extends Component {
    state = {}
    render() {
        return (
            <div className="col-4 text-left">
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
}

export default ContactBox;