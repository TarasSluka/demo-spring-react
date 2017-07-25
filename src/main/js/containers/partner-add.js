import React, {Component} from 'react';
import {connect} from 'react-redux';
import PartnerAdd from '../components/addPartner'

class ParnerAdd extends Component {
    render() {

        return (
            <div>
                <PartnerAdd/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(ParnerAdd);