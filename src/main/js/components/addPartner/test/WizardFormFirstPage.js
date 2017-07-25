import React from 'react';
import {Field, reduxForm} from 'redux-form';
import validate from './validate';
import renderField from './renderField';
import '../addPartner.scss'

const {DOM: {input}} = React;

const WizardFormFirstPage = props => {
    const {handleSubmit} = props;
    return (
        <form className="add-Partner-generalInformation" onSubmit={handleSubmit}>
            <div>
                {/*<FlatButton primary={true} label="Choose an Image">*/}
                {/*<input type="file" id="imageButton"></input>*/}
                {/*</FlatButton>*/}
            </div>
            <div className="add-Partner-wrap-inputFields">
                <Field
                    className="add-Partner-inputFields"
                    name="firstName"
                    type="text"
                    component={renderField}
                    label="First Name"
                />
                <Field
                    className="add-Partner-inputFields"
                    hintText="*Full name"
                    name="lastName"
                    type="text"
                    component={renderField}
                    label="Last Name"
                />
                <Field
                    className="add-Partner-inputFields"
                    hintText="Confirm password"
                    name="lastName"
                    type="password"
                    component={renderField}
                    label="Last Name"
                />
                <Field
                    className="add-Partner-inputFields"
                    hintText="*Full name"
                    name="lastName"
                    type="Password"
                    component={renderField}
                    label="Last Name"
                />
                <Field
                    className="add-Partner-inputFields"
                    hintText="*Full name"
                    name="lastName"
                    type="text"
                    component={renderField}
                    label="Last Name"
                />


                <div>
                    <button type="submit" className="next">Next</button>
                </div>
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'wizard', //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate,
})(WizardFormFirstPage);
