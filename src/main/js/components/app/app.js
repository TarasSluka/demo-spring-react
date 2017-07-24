import React from "react";
import "./app.scss";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TableOfPartnersContainer from "../tableOfPartners/tableOfPartnersContainer";
import MainAppBar from "../mainAppBar";
import NavigationMenu from "../navigationMenu/";

import Paper from 'material-ui/Paper';

import PartnerDetails from '../partnerDetails';
import AddPartner from '../addPartner';


const App = () => (

    <MuiThemeProvider>
        <div>
            <MainAppBar/>
            <div className="appContainer">
                <div className="sideBar">
                    <NavigationMenu/>
                </div>
                <div className="card">

                    <AddPartner/>

                </div>

            </div>
        </div>
    </MuiThemeProvider>
);

export default App;
