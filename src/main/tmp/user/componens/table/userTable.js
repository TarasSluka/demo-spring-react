import React, {Component} from 'react';
import UserRow from './row';
import PropTypes from 'prop-types';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
// import UserAdd from '../add'

const styleSheet = createStyleSheet('UserAdd', theme => ({
    paper: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
}));


class UserTable extends Component {
    constructor(props) {
        super(props)

    }


    render() {
        console.log(this);
        const classes = this.props.classes;
        const userList = this.props.userList;
        var templete;
        if (userList.length > 0) {
            const row = this.props.userList.map(function (item, index) {
                return <UserRow key={index} item={item}/>
            });
            templete =
                <Table>
                    <TableHead>
                        <TableRow k>
                            <TableCell numeric>Id</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {row}
                    </TableBody>
                </Table>

        }
        else {
            templete = <div>no content</div>
        }
        return (<div>
                {/*<Paper className={classes.paper}>*/}
                {/*<UserAdd/>*/}
                {/*</Paper>*/}
                <Paper className={classes.paper}>
                    {templete}
                </Paper></div>
        )

    }
}

UserTable.propTypes = {
    classes: PropTypes.object.isRequired,
    userList: PropTypes.array.isRequired
};

export default withStyles(styleSheet)(UserTable);