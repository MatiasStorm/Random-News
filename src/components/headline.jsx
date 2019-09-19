import React, { Component } from 'react';

class Headline extends Component {
    state = {}
    render() {
        return (
            <h1 className="pt-5 pb-2 margin-auto text-center display-4 font-weight-bold">{this.props.title}</h1>
        );
    }
}

export default Headline;