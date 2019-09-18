import React, { Component } from 'react';

class Headline extends Component {
    state = {}
    render() {
        return (
            <h1 className="p-3 margin-auto text-center display-4 font-weight-bold"><u>{this.props.title}</u></h1>
        );
    }
}

export default Headline;