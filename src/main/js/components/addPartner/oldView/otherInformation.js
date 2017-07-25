import React, {Component} from "react";
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { Field, reduxForm } from 'redux-form'
const  { DOM: { input } } = React
import '../addPartner.scss'
import Paper from 'material-ui/Paper';

const store = {phoneNumber: '', companyName: '', country: '', city: '', streetAddress: '', zip: ''}


class OtherInformation extends Component {
    constructor(props) {
        super(props);
    }

    // getInitialState() {
    //     return store
    // }

    //
    // handlePhoneNumberChanged(event) {
    //     store.phoneNumber = event.target.value;
    //     this.setState(store);
    // }
    //
    // handleCompanyNameChanged(event) {
    //     store.companyName = event.target.value;
    //     this.setState(store);
    // }
    //
    // handleCountryChanged(event) {
    //     store.country = event.target.value;
    //     this.setState(store);
    // }
    //
    // handleCityChanged(event) {
    //     store.city = event.target.value;
    //     this.setState(store);
    // }
    //
    // handleStreetAddressChanged(event) {
    //     store.streetAddress = event.target.value;
    //     this.setState(store);
    // }
    //
    // handleZipChanged(event) {
    //     store.zip = event.target.value;
    //     this.setState(store);
    // }

    render() {
        return (
            <form className="add-Partner-generalInformation">
                <div className="add-Partner-wrap-inputFields">
                    <TextField
                        className="add-Partner-inputFields"
                        hintText="Phone number"
                        onChange={this.handlePhoneNumberChanged}
                        value={this.state.phoneNumber}
                        // errorText="This field is required"
                    />
                    <TextField
                        className="add-Partner-inputFields"
                        hintText="Company name"
                        onChange={this.handleCompanyNameChanged}
                        value={this.state.companyName}
                        // errorText="This field is required"
                    />
                    <TextField
                        className="add-Partner-inputFields"
                        hintText="Country"
                        onChange={this.handleCountryChanged}
                        value={this.state.country}
                        // errorText="This field is required"
                    />
                    <TextField
                        className="add-Partner-inputFields"
                        hintText="City"
                        onChange={this.handleCityChanged}
                        value={this.state.city}
                    />
                    <TextField
                        className="add-Partner-inputFields"
                        hintText="Street address"
                        onChange={this.handleStreetAddressChanged}
                        value={this.state.streetAddress}
                    />
                    <TextField
                        className="add-Partner-inputFields"
                        hintText="ZIP"
                        onChange={this.handleZipChanged}
                        value={this.state.zip}
                    />
                </div>
                <div className="add-Partner-navigateButtons">
                    <div className="add-Partner-leftButtons ">
                        <FlatButton label="Cancle"/>
                    </div>
                    <div className="add-Partner-rightButtons">
                        <FlatButton className="add-Partner-rightButtons-previous-btn" label="previous"/>
                        <FlatButton label="create"/>
                    </div>
                </div>
            </form>
        )
    }
};

export default OtherInformation;
