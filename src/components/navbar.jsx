import React, { Component } from 'react';


class NavBar extends Component {
    state = {}
    render() {
        return (
            <nav className="py-0 navbar bg-primary ">
                <a className="py-0 font-weight-bolder navbar-brand" href="#">RandomNews</a>
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