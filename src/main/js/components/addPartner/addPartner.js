import React from "react";
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import './addPartner.scss'
import Paper from 'material-ui/Paper';

const AddPartner = () => (
        <Paper className="add-Partner-paper">
            <form className="add-Partner-generalInformation">
                <div>
                    {/*<FlatButton primary={true} label="Choose an Image">*/}
                    {/*<input type="file" id="imageButton"></input>*/}
                    {/*</FlatButton>*/}
                </div>
                <div className="add-Partner-wrap-inputFields">
                    <TextField
                        className="add-Partner-inputFields"
                        hintText="*Full name"
                        // errorText="This field is required"
                    />
                    <TextField
                        className="add-Partner-inputFields"
                        hintText="*Email"
                        // errorText="This field is required"
                    />
                    {/*<TextField*/}
                    {/*className="add-Partner-inputFields"*/}
                    {/*hintText="*Phone number"*/}
                    {/*floatingLabelText="*Phone number"*/}
                    {/*/>*/}

                    <TextField
                        className="add-Partner-inputFields"
                        hintText="Password"
                        type="password"
                    />
                    <TextField
                        className="add-Partner-inputFields"
                        hintText="Confirm password"
                        type="password"
                    />
                    <TextField
                        className="add-Partner-inputFields"
                        hintText="Other information"
                        multiLine={true}
                        rowsMax={4}
                    />
                </div>
                <div className="add-Partner-navigateButtons">
                    <div className="add-Partner-leftButtons ">
                        <FlatButton label="Cancle"/>
                    </div>
                    <div className="add-Partner-rightButtons">
                        <FlatButton className="add-Partner-rightButtons-previous-btn" label="previous"/>
                        <FlatButton label="next"/>
                    </div>
                </div>
            </form>
        </Paper>

    )
;
export default AddPartner;
