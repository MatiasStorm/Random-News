import React, { Component } from 'react';


class NavBar extends Component {
    state = {}

    // componentDidMount() {
    //     window.addEventListener("scroll", this.toggleNavBar);
    // }

    // toggleNavBar() {
    //     console.log("scroll")
    //     const navBar = document.querySelector(".nav");
    //     console.log(navBar)
    //     navBar.style.transform = "translateY(-100%)";
    // }

    render() {
        return (
            <nav className="fixed-top py-0 bg-primary nav">
                <a className="p-3 navbar-brand font-weight-bolder" href="#home">RandomNews</a>
                <a className="py-3 nav-link font-weight-bold" href="#home">Home</a>
                <a className="py-3 nav-link font-weight-bold" href="#breaking-news">Breaking News</a>
                <a className="py-3 nav-link font-weight-bold" href="#most-popular">Most Popular</a>
                <a className="py-3 nav-link font-weight-bold" href="#all-news">All News</a>
                <a className="py-3 nav-link font-weight-bold" href="#about">About</a>
            </nav>
        );
    }
}

export default NavBar;
