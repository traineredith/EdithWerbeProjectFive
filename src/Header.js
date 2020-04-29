import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <img src='./assets/juno-logo.svg' alt="Juno logo"/>
                <h1>Juno Yearbook!</h1>
                <p>Cohort 26, Winter II 2020</p>
                <p>"The Covid Cohort"</p>
                <p>Leave a message, joke or jibe for your beloved student</p>
            </header>
        )
    }
}

export default Header;