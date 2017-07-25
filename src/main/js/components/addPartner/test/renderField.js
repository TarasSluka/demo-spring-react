import React from 'react';
import TextField from 'material-ui/TextField';

const renderField = ({className, input, label, type, meta: {touched, error}}) => (

    <TextField
        className={className}
        floatingLabelText={label}
        errorText={touched && error}
        type={type}

    />


);

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