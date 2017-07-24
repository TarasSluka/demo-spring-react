import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import { deletePartner ,fetchPartners} from '../../store/partners';
import TableOfPartners from './tableOfPartners';

class TableOfPartnersContainer extends Component {

    render() {
        const {partners, deletePartner , fetchPartners} = this.props;
        return (
                <TableOfPartners partners = {partners} deletePartner = {deletePartner} fetchPartners = {fetchPartners}/>
    );
    }
}

function mapStateToProps(state) {
    return {
        partners: state.partners
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({deletePartner: deletePartner,fetchPartners:fetchPartners}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(TableOfPartnersContainer);
