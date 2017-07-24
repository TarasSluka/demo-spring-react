import React, {Component} from 'react';
import {connect, Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import API from 'redux-rest';
import UserRow from './column';
import PropTypes from 'prop-types';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styleSheet = createStyleSheet('UserAdd', theme => ({
    paper: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
}));


class UserDetail extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    componentWillReceiveProps() {

    }

    render() {
        return (
            <div>
                <h1>User Detail</h1>
            </div>
        );
    }
}

UserDetail.propTypes = {
    classes: PropTypes.object.isRequired,
    userList: PropTypes.array.isRequired
};

export default withStyles(styleSheet)(UserDetail);