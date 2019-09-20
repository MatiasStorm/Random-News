import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons'
import socialIcon from 'react-social-icons/dist/social-icon';

class SocialIcons extends Component {
    state = {}
    render() {
        return (
            <div className="p-2">
                <span className="pr-2">
                    <SocialIcon url="http://twitter.com" />
                </span>
                <span className="p-2">
                    <SocialIcon url="http://facebook.com" />
                </span>
                <span className="p-2">
                    <SocialIcon url="http://instagram.com" />
                </span>
            </div>);
    }
}

export default SocialIcons;