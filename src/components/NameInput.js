import React from 'react';

    const NameInput = (props) => {
        //console.log(props.value);
        return (
            <div className="form-group">
                <label for={props.name} className="form-label">{props.title}</label>
                <input
                    id={props.name}
                    name={props.name}
                    type={props.inputType}
                    value={props.value}
                    onChange={props.onChange}
                    placeholder={props.placeholder}
                 />
            </div>
        )
    }

export default NameInput