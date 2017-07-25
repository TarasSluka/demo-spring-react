import React from "react";
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import './addPartner.scss'
import Paper from 'material-ui/Paper';
import MainInformation from './addPartnerStep/mainInformation';
import OtherInformation from './addPartnerStep/otherInformation';

class AddPartner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showPreviousBtn: false,
            showNextBtn: true,
            compState: 0,
            showFirstStep: true
        };

        this.hiden = {
            display: "none"
        };
        this.handleOnClick = this.handleOnClick.bind(this);
        this.onClickNext = this.onClickNext.bind(this);
        this.onClickPrev = this.onClickPrev.bind(this);
    }

    onClickNext() {
        setState(this.state.showFirstStep = false)
    }

    render() {
        var template;

        if (this.showFirstStep === true) {
            template = <MainInformation/>;
        } else template = <OtherInformation/>;

        return (
            <Paper className="add-Partner-paper">
                {template}
            </Paper>
        );
    }
};
export default AddPartner;



