import React, {Component} from "react";
import Paper from 'material-ui/Paper';
import './balance.scss';
const style = {
    paper: {
        display: 'inline-block',
        float: 'left',
        margin: '16px 32px 16px 0',
    }
};


class Balance extends Component {


    render() {

        return (
            <div className="balance">
           <h3>Balance</h3>
                <h2>1500$</h2>
            </div>

        );
    }
}
export default Balance;
