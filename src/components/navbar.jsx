import React, { Component } from 'react';


class NavBar extends Component {
    state = {
        prevScrollPos: window.pageYOffset,
        isHidden: false
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const newScrollPos = window.pageYOffset;
        let Ishidden;
        if (newScrollPos > this.state.prevScrollPos) {
            Ishidden = true
        }
        else {
            Ishidden = false
        }
        this.setState({
            prevScrollPos: newScrollPos,
            Ishidden: Ishidden
        })

    }

    render() {
        return (
            <nav className={this.getClassNames()}>
                <a className="p-3 navbar-brand font-weight-bolder" href="#home">RandomNews</a>
                <a className="py-3 nav-link font-weight-bold" href="#home">Home</a>
                <a className="py-3 nav-link font-weight-bold" href="#breaking-news">Breaking News</a>
                <a className="py-3 nav-link font-weight-bold" href="#most-popular">Most Popular</a>
                <a className="py-3 nav-link font-weight-bold" href="#all-news">All News</a>
                <a className="py-3 nav-link font-weight-bold" href="#about">About</a>
            </nav>
        );
    }

    getClassNames() {
        let classNames = "fixed-top py-0 bg-primary nav";
        if (this.state.Ishidden) classNames += " nav-hidden";
        return classNames;
    }
}

export default NavBar;
