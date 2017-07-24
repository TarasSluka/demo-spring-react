import React, {Component} from "react";
import UserTable from '../../componens/table'
import {connect} from "react-redux";

const userList = [
    {"id": 1, "name": "user 1", "email": "user1@gmail.com"}, {
        "id": 2,
        "name": "user 2",
        "email": "user1@gmail.com"
    }, {"id": 3, "name": "user 3", "email": "user3@gmail.com"}, {
        "id": 4,
        "name": "user 4",
        "email": "user4@gmail.com"
    }, {"id": 5, "name": "user 5", "email": "user5@gmail.com"}
];

function mapStateToProps(state, ownProps) {
    // let id = ownProps.match.params.id;

    // const partner = state.partners.find((partner) => partner.id == id);

    console.log("user list container");
    return {
        userList: userList
    };
}

export default connect(mapStateToProps)(UserTable);