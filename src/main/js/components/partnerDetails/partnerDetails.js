import React, {Component} from "react";
import Paper from 'material-ui/Paper';
import MainInformation from '../partnerDetails/mainInformation';
import Balance from '../partnerDetails/balance';
import ExpandCard from '../partnerDetails/expandCard';

import './partnerDetails.scss';

const style = {
    paper: {
        // display: 'inline-block',
        // widths: '100%',
        // float: 'left',
        margin: '16px 32px 16px 0',
    }
};


class PartnerDetails extends Component {
    render() {
        return (
            <div>
                <Paper style={style.paper}>
                    <div className="partnerDetails">
                        <div>
                            <MainInformation/>
                        </div>
                        <div className="balanceInformation">
                            <Balance/>
                        </div>
                    </div>
                    <div>
                        <ExpandCard/>
                        <ExpandCard/>
                        <ExpandCard/>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default PartnerDetails;
