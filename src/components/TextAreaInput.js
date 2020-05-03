import React from 'react';

const TextAreaInput = (props) => {
    //console.log(props.value);
    return (
        <div className="form-group">
            <label for={props.name} className="form-label">{props.title}</label>
            <textarea
                id={props.name}
                name={props.name}
                type={props.inputType}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
                uniqueKey={props.uniqueKey}

            />
        </div>
    )
}

export default TextAreaInput;