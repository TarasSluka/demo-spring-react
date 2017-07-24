import React from 'react';
require('../../scss/style.scss');
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';
const app = () => (
    <div>
        <h2>Ysername list:</h2>
        <UserList/>
        <hr/>
        <h2>User Details:</h2>
        <UserDetail/>
    </div>
);
export default app;