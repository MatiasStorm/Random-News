import React, { Component } from 'react';
import NewsRow from './newsRow';

class NewsPage extends Component {

    render() {
        return (
            <div className="container">
                {this.props.page.rows.map(row =>
                    <NewsRow articles={row.articles} key={row.id} imageError={this.props.imageError} />)}
            </div>
        );
    }


}

export default NewsPage;