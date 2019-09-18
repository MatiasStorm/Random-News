import React, { Component } from 'react';
import ImageUrlGenerator from '../utilities/imageUrlGenerator';

class RandomImage2 extends Component {
    imgurl = new ImageUrlGenerator;
    constructor(width, height) {
        super()
        this.state = {
            imageUrl: this.imgurl.getUrl(width, height),
            height: height,
            width: width,
        }
    }

    render() {
        return (
            <img
                className={"mw-100 mh-100 "} src={this.state.imageUrl}
                onError={this.newImage}>
            </img>
        );
    }

    newImage = () => {
        this.setState({
            imageUrl: this.imgurl.getUrl(this.state.width, this.state.height)
        })
    }
}

export default RandomImage2;