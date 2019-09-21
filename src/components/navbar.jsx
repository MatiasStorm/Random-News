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
        const linkClassNames = this.getLinkClassNames();
        const brandClassNames = this.getBrandClassNames()
        return (
            <nav className={this.getNavBarClassNames()}>
                <a className={brandClassNames} href="#home">RandomNews</a>
                <a className={linkClassNames} href="#home">Home</a>
                <a className={linkClassNames} href="#breaking-news">Breaking News</a>
                <a className={linkClassNames} href="#most-popular">Most Popular</a>
                <a className={linkClassNames} href="#all-news">All News</a>
                <a className={linkClassNames} href="#about">About</a>
            </nav>
        );
    }

    getBrandClassNames() {
        if (this.props.isPhone) {
            return "navbar-brand";
        }
        return "p-3 navbar-brand font-weight-bolder"
    }

    getLinkClassNames() {
        if (this.props.isPhone) {
            return "nav-link"
        }
        return "py-3 nav-link font-weight-bold"
    }

    getNavBarClassNames() {
        let classNames = "fixed-top py-0 bg-primary nav";
        if (this.state.Ishidden) classNames += " nav-hidden";
        return classNames;
    }
}

export default NavBar;
