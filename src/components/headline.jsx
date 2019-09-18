import React, { Component } from 'react';

class Headline extends Component {
    state = {}
    render() {
        return (
            <h1 className="text-white p-3 margin-auto text-center">{this.props.title}</h1>
        );
    }
}

export default Headline;