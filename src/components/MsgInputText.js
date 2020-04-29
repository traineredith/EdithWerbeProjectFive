import React from 'react';


const TextArea = (props) => (
    <div className="form-group">
        <label className="form-label">{props.title}</label>
        <textarea
            message={props.message}
            onChange={props.handleChange}
            placeholder={props.placeholder}
            />
    </div>
);

export default TextArea;