import React, { Component } from 'react';
import ImageUrlGenerator from '../utilities/imageUrlGenerator';

class RandomImage extends Component {
    imgurl = new ImageUrlGenerator();
    state = {
        imageUrl: this.imgurl.getUrl(this.props.width, this.props.height)
    }

    render() {
        return (
            <img
                className={"mw-100 mh-100 " + this.props.classes} src={this.state.imageUrl}
                onError={this.newImage}
                alt="">
            </img>
        );
    }

    newImage = () => {
        this.setState({
            imageUrl: this.imgurl.getUrl(this.props.width, this.props.height)
        })
    }
}

export default RandomImage;