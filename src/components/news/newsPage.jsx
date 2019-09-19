import React, { Component } from 'react';
import NewsRow from './newsRow';

class NewsPage extends Component {

    render() {
        console.log(this.props.page);
        return (
            <div className="container">
                {this.props.page.rows.map(row =>
                    <NewsRow articles={row.articles} key={row.id} />)}
            </div>
        );
    }


}

export default NewsPage;