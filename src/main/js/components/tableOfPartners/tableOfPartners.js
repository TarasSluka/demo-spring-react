import React, {Component} from "react";
import Paper from 'material-ui/Paper';
import IconMenuForPartnerTableContainer from '../iconMenuForPartnerTable/index';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';


const style = {
    paper: {
        display: 'inline-block',
        float: 'left',
        margin: '16px 32px 16px 0',
    }
};


class TableOfPartners extends Component {

    componentDidMount(){
        this.props.fetchPartners()
    }

    createListItems() {
        return this.props.partners.map((partner) => {
            return (
                <TableRow key={partner.id}>
                    <TableRowColumn>{partner.fullName}</TableRowColumn>
                    <TableRowColumn>{partner.email}</TableRowColumn>
                    <TableRowColumn>{partner.balance}</TableRowColumn>
                    <TableRowColumn> <IconMenuForPartnerTableContainer partner= {partner} deletePatner= {this.props.deletePartner}/> </TableRowColumn>
                </TableRow>
            );
        });
    }

    render() {
        const {partners, deletePartner , fetchPartners} = this.props;
        return (
            <div>
                <Paper style={style.paper}>
                    <Table >
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                            <TableRow>
                                <TableHeaderColumn>Full Name</TableHeaderColumn>
                                <TableHeaderColumn>E-mail</TableHeaderColumn>
                                <TableHeaderColumn>Balance</TableHeaderColumn>
                                <TableHeaderColumn> </TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            {this.createListItems()}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}
export default TableOfPartners;
