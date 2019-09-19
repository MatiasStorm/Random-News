import React, { Component } from 'react';

class PageNavigation extends Component {
    state = {}
    render() {
        const pageNumbers = this.getPageNumbers();
        return (
            <div className="btn-group text-center mb-5 mt-1">
                <button onClick={this.props.previosPage} className="mx-2 btn btn-primary">{"<<"}</button>

                {this.displayLeftDotButton()}

                {pageNumbers.map(number =>
                    <button
                        onClick={() => this.props.goToPage(number - 1)}
                        className={this.getClassNames(number)}
                        key={number}>
                        {number}
                    </button>
                )}

                <button className="mx-2 btn btn-primary btn-disabled" disabled>{"..."}</button>

                <button onClick={this.props.nextPage} className="mx-2 btn btn-primary">{">>"}</button>
            </div>
        );
    }

    getPageNumbers() {
        let pageNumbers = [];
        if (this.props.currentPage < 3) {
            pageNumbers = [...Array(6).keys()].slice(1);
        }
        else {
            for (let i = this.props.currentPage - 1; i < this.props.currentPage + 4; i++) {
                pageNumbers.push(i)
            }
        }
        return pageNumbers;
    }

    getClassNames(buttonNumber) {
        let classNames = "mx-2 btn btn-primary"
        if (buttonNumber - 1 === this.props.currentPage) {
            classNames += " active";
        }
        return classNames;
    }

    displayLeftDotButton() {
        if (this.props.currentPage > 2) {
            return (
                <button className="mx-2 btn btn-primary btn-disabled" disabled>{"..."}</button>
            );
        }
    }

}

export default PageNavigation;