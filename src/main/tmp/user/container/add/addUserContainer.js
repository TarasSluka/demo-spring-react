import React, {Component} from "react";
import UserAdd from '../../componens/add'
import {connect} from "react-redux";


function mapStateToProps(state, ownProps) {
    // let id = ownProps.match.params.id;

    // const partner = state.partners.find((partner) => partner.id == id);

    console.log("user add container");
}

export default connect(mapStateToProps)(UserAdd);