import React from 'react';


const Button = (props) => {
    console.log(props.style);
    return (
        <button
            style={props.style}
            className="submitBtn"
            onClick={props.action} >
            {props.title}
            Submit
        </button>)
}


export default Button;