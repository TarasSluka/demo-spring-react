import React, {Component} from 'react';

class Sidebar extends Component {
    render() {
        // const classes = this.props.classes;
        return (
            <div className={classes.root}>
                {/*<List>*/}
                {/*<Link to="/users">*/}
                {/*<ListItem button component="a">*/}
                {/*<ListItemText primary="Users"/>*/}
                {/*</ListItem>*/}
                {/*</Link>*/}
                {/*<Link to="/users/add">*/}
                {/*<ListItem button component="a">*/}
                {/*<ListItemText primary="Add User"/>*/}
                {/*</ListItem>*/}
                {/*</Link>*/}
                {/*</List>*/}
            </ div>
        );
    }

}

// Sidebar.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

// import PropTypes from 'prop-types';
// import {withStyles, createStyleSheet} from 'material-ui/styles';
// import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';

// const styleSheet = createStyleSheet('Sidebar', theme => ({
//     root: {
//         width: '100%',
//         maxWidth: 360,
// background: theme.palette.background.paper,
// },
// }));

export default withStyles(styleSheet)(Sidebar);
