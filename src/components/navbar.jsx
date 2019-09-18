import React, { Component } from 'react';


class NavBar extends Component {
    state = {}
    render() {
        return (
            <nav className="fixed-top pu-0 bg-primary nav">
                <a className="p-3 navbar-brand font-weight-bolder" href="#">RandomNews</a>
                <a className="py-3 nav-link font-weight-bold" href="#">Home</a>
                <a className="py-3 nav-link font-weight-bold" href="#">Breaking News</a>
                <a className="py-3 nav-link font-weight-bold" href="#">Most Popular</a>
                <a className="py-3 nav-link font-weight-bold" href="#">All News</a>
                <a className="py-3 nav-link font-weight-bold" href="#">Contact</a>
            </nav>
        );
    }
}

export default NavBar;

// py-0 navbar fixed-top bg-primary