import React, {Component} from 'react';
import {connect, Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import API from 'redux-rest';
import {TableCell, TableRow} from 'material-ui/Table';

class UserRow extends Component {

    constructor(props) {
        super(props);
        this.state = {counter: 0};
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onRowClick = this.onRowClick.bind(this);

    };

    onRowClick(item) {
        this.setState({counter: ++this.state.counter});
        console.log("click row", item);
    };

    onButtonClick(item) {
        console.log("click button", item);

    };


    render() {
        const item = this.props.item;
        return (
            <TableRow hover>
                <TableCell numeric onClick={event => this.onRowClick(item)}>
                    {item.id}
                </TableCell>
                <TableCell onClick={event => this.onRowClick(item)}>
                    {item.name}
                </TableCell>
                <TableCell onClick={event => this.onRowClick(item)}>
                    {item.email}
                </TableCell>
                <TableCell>
                    <button onClick={() => this.onButtonClick(item)}>button</button>
                </TableCell>
            </TableRow>
        )
    }
}


export default UserRow;