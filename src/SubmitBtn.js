import React from 'react';


const Button = (props) => {
    return (
        <button
            style={props.style}
            className="submitBtn"
            onClick={props.action} >
            Submit
        </button>)
}


export default Button;