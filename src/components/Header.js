import React, { Component } from 'react';
import Logo from "../assets/juno-logo.svg"

class Header extends Component {
    render() {
        return (
            <header>
                <div className="title">
                    <img src={Logo} alt="Juno Logo" /> 
                    <h1>Yearbook!</h1>
                </div>
                <p className="cohort26">Cohort 26, Winter II 2020</p>
                <p className="covidCohort">😷"The Covid Cohort"🦠</p>
                
            </header>
        )
    }
}

export default Header;