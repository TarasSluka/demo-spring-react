import React from 'react';
import TextField from 'material-ui/TextField';
//hintText, className,
//

// className = {className}
const renderField = ({input, label, type, meta: {touched, error}}, ...custom) => (
    <TextField
        floatingLabelText={label}
        errorText={touched && error}
        type={type}
        {...input}

    />
);

// className

export default renderField;
{/*<div>*/
}
{/*<label>{label}</label>*/
}
{/*<div>*/
}
{/*<input {...input} placeholder={label} type={type}/>*/
}
// {touched && error && <span>{error}</span>}
// </div>
// </div>