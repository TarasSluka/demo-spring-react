import React from 'react'
import {Field, reduxForm} from 'redux-form'
import validate from './validate'
import FlatButton from 'material-ui/FlatButton';
import renderField from './renderField';

const {DOM: {input}} = React;

const WizardFormSecondPage = (props) => {
    const {handleSubmit, pristine, previousPage, reset, submitting} = props;
    return (
        <form onSubmit={handleSubmit} className="add-Partner-generalInformation">
            <div className="add-Partner-wrap-inputFields">
                <Field
                    className="add-Partner-inputFields"
                    label="*Phone number"
                    name="phoneNumber"
                    type="text"
                    component={renderField}
                />
                <Field
                    className="add-Partner-inputFields"
                    label="*Company name"
                    name="companyName"
                    type="text"
                    component={renderField}
                />
                <Field
                    className="add-Partner-inputFields"
                    label="*Country"
                    name="country"
                    type="text"
                    component={renderField}
                />
                <Field
                    className="add-Partner-inputFields"
                    label="*City"
                    name="city"
                    type="text"
                    component={renderField}
                />
                <Field
                    className="add-Partner-inputFields"
                    label="*Street address"
                    name="streetAddress"
                    type="text"
                    component={renderField}
                />
                <Field
                    className="add-Partner-inputFields"
                    label="*ZIP"
                    name="zip"
                    type="text"
                    component={renderField}
                />
            </div>
            <div className="add-Partner-navigateButtons">
                <div className="add-Partner-leftButtons ">
                    <FlatButton
                        label="Cancle"
                        onClick={reset}
                    />
                </div>
                <div className="add-Partner-rightButtons">
                    <FlatButton
                        className="add-Partner-rightButtons-previous-btn"
                        label="previous"
                        onClick={previousPage}
                    />
                    <FlatButton
                        disabled={pristine || submitting}
                        type="submit"
                        label="create"
                    />
                </div>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'wizard',  //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(WizardFormSecondPage)