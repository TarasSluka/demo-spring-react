import React, {Component} from "react";
import Avatar from 'material-ui/Avatar';

import './mainInformation.scss';

class MainInformation extends Component {


    render() {

        return (
            <div className="mainInformation">
                <div className="add-Partner-avatar">

                    <Avatar/>
                </div>
                <div className="information">
                    <h3 className="fullName">Mark Zuckerberg</h3>
                    <sub>mark.zuckerberg@gmail.com</sub>
                </div>
            </div>
        );
    }
}

export default MainInformation;
