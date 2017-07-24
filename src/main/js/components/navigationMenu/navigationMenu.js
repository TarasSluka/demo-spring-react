import React from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionSupervisorAccount from 'material-ui/svg-icons/action/supervisor-account';


const style = {
    paper: {
        display: 'inline-block',
        float: 'left',
        margin: '16px 32px 16px 0',
    },
    rightIcon: {
        textAlign: 'center',
        lineHeight: '24px',
    },
};

const NavigationMenu = () => (
    <div>
            <Menu>
                <MenuItem primaryText="Home page" leftIcon={<ActionHome />} />
                <MenuItem primaryText="Partners" leftIcon={<ActionSupervisorAccount />} />
            </Menu>
    </div>
);

export default NavigationMenu;
