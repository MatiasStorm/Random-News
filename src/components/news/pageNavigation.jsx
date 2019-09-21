import React, { Component } from 'react';
import { PHONE_WIDTH } from '../../settings';

class PageNavigation extends Component {
    state = {
        staticClasses: "btn btn-primary",
        isPhone: false,
    }
    render() {
        const pageNumbers = this.getPageNumbers();
        return (
            <div className="btn-group text-center mb-5 mt-1">
                <button onClick={this.props.previosPage} className={this.state.staticClasses + this.getDynamicClasses()}>{"<<"}</button>
                {this.displayLeftDotButton()}

                {pageNumbers.map(number =>
                    <button
                        onClick={() => this.props.goToPage(number - 1)}
                        className={this.getClassNames(number)}
                        key={number}>
                        {number}
                    </button>
                )}

                <button className={this.state.staticClasses + this.getDynamicClasses()} disabled>{"..."}</button>
                <button onClick={this.props.nextPage} className={this.state.staticClasses + this.getDynamicClasses()}>{">>"}</button>
            </div>
        );
    }

    getDynamicClasses() {
        if (!this.props.isPhone) {
            return " mx-2";
        }
        return "";
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
        let classNames = this.state.staticClasses + this.getDynamicClasses();
        if (buttonNumber - 1 === this.props.currentPage) {
            classNames += " active";
        }
        return classNames;
    }

    displayLeftDotButton() {
        if (this.props.currentPage > 2) {
            return (
                <button className={this.state.staticClasses + this.getDynamicClasses()} disabled>{"..."}</button>
            );
        }
    }

}

export default PageNavigation;