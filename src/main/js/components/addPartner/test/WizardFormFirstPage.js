import React from 'react';
import {Field, reduxForm} from 'redux-form';
import validate from './validate';
import renderField from './renderField';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import '../addPartner.scss'

const {DOM: {input}} = React;

const WizardFormFirstPage = props => {

    const {handleSubmit, reset} = props;
    return (
        <form className="add-Partner-generalInformation" onSubmit={handleSubmit}>
            <div className="add-Partner-wrap-avatar">
                <FloatingActionButton className="add-Partner-wrap-avatar" disabled={true}>
                    {/*<ContentAdd/>*/}
                </FloatingActionButton>
            </div>
            <div className="add-Partner-wrap-inputFields">
                <Field
                    className="add-Partner-inputFields"
                    label="*Full name"
                    name="fullName"
                    type="text"
                    component={renderField}
                />
                <Field
                    className="add-Partner-inputFields"
                    label="*Email"
                    name="email"
                    type="text"
                    component={renderField}
                />
                <Field
                    className="add-Partner-inputFields"
                    label="*Password"
                    name="password"
                    type="password"
                    component={renderField}
                />
                <Field
                    className="add-Partner-inputFields"
                    label="*Confirm password"
                    type="password"
                    name="confirmPassword"
                    component={renderField}
                />
            </div>
            <div className="add-Partner-navigateButtons">
                <div className="add-Partner-leftButtons ">
                    <FlatButton label="Cancle" onClick={reset}/>
                </div>
                <div className="add-Partner-rightButtons">
                    <FlatButton type="submit" label="next"/>
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
